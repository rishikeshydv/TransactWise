## Overview
```TransactWise``` is a a HTTP based secure web application using Finicity Open Banking APIs to route requests to microservices to access, receive notifications, and monitor consolidated transactions and financial statements from various financial institutions. It offers analytical insights and reports based on the financial data, while also providing budgeting capabilities through a python model using Matplotlib and Flask
## Frontend

### 1. Getting Started
   Prerequisites 
  Before proceeding with the installation, ensure that you have the following prerequisites:

  * Node (v12 or higher)
  * npm
  * Internet connection to fetch dependencies

### 2. Installation
     
  To install the DineDesign web app, follow these steps:
     
  * Clone the repository from the GitHub repository.
  * Navigate to the project directory.
  * Run npm install to install the required dependencies.
  * Running the Web App
    To run the DineDesign web app locally, execute the following command:

    ```
      npm run dev
    ```
  The web app will be accessible at http://localhost:3000.

### 3. Technology Stack for Frontend

  * Nextjs - A React Framework
  * Axios
  * Tailwind CSS

## Backend

### 1. Technology Stack for Backend

  * Languages: Go
  * Tools Used: Open Banking APIs
  * Database: Firebase
    
### 2. Features
* User Authentication and Authorization
* Fincial Institution Connection
* Debit/Credit Dashboard
* Tracking Credit/Debit Card Usage
* Expense and Income Tracker
* Monthly financial Analytics

### 3. Source files description
```./server.go```runs the server for the entire backend of the financial app and allows you to navigate and route to each of the microservices.

### Running the Webapp
   #### 1. Clone the repo:
   ```
      git clone https://github.com/rishikeshydv/DineDesign.git](https://github.com/rishikeshydv/TransactWise.git
   ```
   #### 2. Set directory to the repo 
   ```
      cd TransactWise
   ```
   #### 3. Run the Backend Server:
   ```
      go run server.go
   ```
   The server runs on port 4000.

   #### 4. To start the frontend, navigate to the nextjs folder:
   ```
      cd nextjs
   ```
   #### 5. Install all frontend dependencies:
   ```
      npm install
   ```
   #### 6. Start the frontend development server:
   ```
      npm run dev
   ```
   ###### Access the app in your browser by visiting: http://localhost:3000

