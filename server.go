package main

import (
	"fmt"
	"net/http"
	"os"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gopkg.in/resty.v1"
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

	c.Redirect(http.StatusSeeOther, resp.String()) // Redirect user to connectURL
}


func fetchTransactionsHandler(c *gin.Context, finicityAppKey, finicityPartnerId, finicityPartnerSecret string) {

	client := resty.New()

	// Assume you have a customer-specific token stored in the database after bank connection
	customerToken := "customer_specific_token_from_database"

	resp, err := client.R().
	SetHeader("Content-Type", "application/x-www-form-urlencoded").
	SetFormData(map[string]string{
		"partnerId":     finicityPartnerId,
		"partnerSecret": finicityPartnerSecret,
		"appKey":        finicityAppKey,
		"authToken": customerToken,
	}).
		Get("https://api.finicity.com/transactions/v2")

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch transactions"})
		return
	}

	// Process and return transaction data as needed
	c.JSON(http.StatusOK, gin.H{"transactions": resp.String()})
}