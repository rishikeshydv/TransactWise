package main

import (
	"fmt"
	"net/http"
	"os"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gopkg.in/resty.v1"
    "cloud.google.com/go/firestore"
	"golang.org/x/net/context"
	"google.golang.org/api/option"
)

func main() {
    // Load environment variables from .env file
    err := godotenv.Load()
    if err != nil {
        panic("Error loading .env file")
    }

    // Access environment variables
    finicityAppKey := os.Getenv("FINICITY_APP_KEY")
    finicityPartnerId := os.Getenv("FINICITY_PARTNER_ID")
    finicityPartnerSecret := os.Getenv("FINICITY_PARTNER_SECRET")


    r := gin.Default()

    r.GET("/connect-bank", func(c *gin.Context) {
        connectBankHandler(c, finicityAppKey, finicityPartnerId, finicityPartnerSecret)
    })
	r.GET("/fetch-transactions", fetchTransactionsHandler)


    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    r.Run(":" + port)
}

func connectBankHandler(c *gin.Context, finicityAppKey, finicityPartnerId, finicityPartnerSecret string) {
    client := resty.New()

    resp, err := client.R().
        SetHeader("Content-Type", "application/x-www-form-urlencoded").
        SetFormData(map[string]string{
            "partnerId":     finicityPartnerId,
            "partnerSecret": finicityPartnerSecret,
            "appKey":        finicityAppKey,
        }).
        Get("https://api.finicity.com/aggregation/v1/customers/1005061234/accounts/simple")

    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to the bank"})
        return
    }

    fmt.Println(resp.String())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to bank"})
		return
	}

	// Store `resp.String()` or relevant data in your database for future use
    customerToken := resp.String()
    	// Store the customerToken in Firestore
	ctx := context.Background()
	opt := option.WithCredentialsFile("firebase-credentials.json")
	client, err := firestore.NewClient(ctx, os.Getenv("FIREBASE_PROJECT_ID"), opt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to initialize Firestore client"})
		return
	}
	defer client.Close()

	_, err = client.Collection("users").Doc(os.Getenv("REBASE_DOCUMENT_ID")).Set(ctx, map[string]interface{}{
		"customerToken": customerToken,
	}, firestore.MergeAll)

    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to store customer token"})
        return
    }


	c.Redirect(http.StatusSeeOther, resp.String()) // Redirect user to connectURL
}



func fetchTransactionsHandler(c *gin.Context) {
	appKey := os.Getenv("FINICITY_APP_KEY")
	appSecret := os.Getenv("FINICITY_APP_SECRET")

	client := resty.New()
	
    firebaseApp := initializeFirebase() // Initialize Firebase app here

    // Assuming you have a "users" collection in Firestore
    userDocRef := firebaseApp.Collection("users").Doc("your_customer_id")

    // Retrieve the customer token from Firestore
    userSnapshot, err := userDocRef.Get(ctx)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve customer token"})
        return
    }

    customerToken := userSnapshot.Data()["customerToken"].(string)


	resp, err := client.R().
		SetHeader("Finicity-App-Key", appKey).
		SetHeader("Finicity-App-Secret", appSecret).
		SetHeader("Authorization", "Bearer "+customerToken).
		Get("https://api.finicity.com/transactions/v2")

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch transactions"})
		return
	}

	// Process and return transaction data as needed
	c.JSON(http.StatusOK, gin.H{"transactions": resp.String()})
}