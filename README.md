# TransactWise

TransactWise is a financial management application that provides a comprehensive set of features to help users manage their finances, track transactions, and gain valuable insights into their financial activities. The application is built with a Golang backend and a Next.js TypeScript frontend, offering a secure and efficient platform for users to take control of their finances. This README file serves as a guide to understand the project and get it up and running.

## Features

### User Authentication

TransactWise employs Firebase for user authentication, ensuring secure access to the application.

### Financial Institution Connection

Users can link their financial accounts through the Finicity Open Banking Platform, enabling access to their account information within the app.

### Debit/Credit Dashboard

The application provides a clear and concise dashboard to view debit and credit transactions, giving users an overview of their financial status.

### Transactions Tracker

TransactWise allows users to track their financial transactions, categorize them, and analyze their spending patterns.

### Expense-Credit Tracker

Users can monitor their expenses and credit activities, helping them make informed financial decisions.

### Monthly Financial Analytics

The application generates monthly financial analytics reports, providing insights into income, expenses, and savings trends.

### Chatbot

TransactWise features a chatbot that can answer user queries and provide financial advice and tips.

### Stock Analytics

Users can access stock market data and analytics within the application, helping them make investment decisions.

### Transaction Notifications

TransactWise sends transaction notifications to keep users informed about their financial activities in real-time.

### Customer Bank Statements

Users can retrieve and view their bank statements directly through the application for a convenient overview of their financial history.

## Getting Started

Follow these steps to set up and run TransactWise locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/transactwise.git
   cd transactwise
   ```

2. **Set Up the Backend (Golang)**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install Go dependencies:
     ```bash
     go mod tidy
     ```
   - Configure Firebase authentication. Ensure you have a Firebase project set up and provide the necessary credentials.

   - Set up Finicity Open Banking Platform API integration.

   - Start the backend server:
     ```bash
     go run server.go
     ```

3. **Set Up the Frontend (Next.js TypeScript)**
   - Navigate to the `nextjs` directory:
     ```bash
     cd ../nextjs
     ```
   - Install npm dependencies:
     ```bash
     npm install
     ```
   - Configure Firebase authentication for the frontend. Make sure the frontend can communicate with the backend API.

   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your web browser and navigate to `http://localhost:3000` to access TransactWise.

## Configuration

Make sure to configure the following environment variables:

- Firebase configuration (for both frontend and backend).
- Finicity Open Banking Platform API credentials (backend).
- Any other project-specific configuration settings.

## Contributing

We welcome contributions to enhance TransactWise. Feel free to submit bug reports, feature requests, or pull requests to improve the application.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use and modify the code for your own purposes.

## Contact

For any questions or concerns, please contact [rishikeshadh4@gmail.com](mailto:your-email@example.com).

---

Thank you for using TransactWise! We hope this financial management application helps you gain better control over your finances and achieve your financial goals.
