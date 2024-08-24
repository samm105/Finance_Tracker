# Finance Tracker App

This is a full-stack Finance Tracker application that helps users manage their income, expenses, and overall financial health. The project includes a Node.js backend and a React frontend. All the code for this project is available in the `new-branch` branch.

## Features

- **Expense Tracking**: Add, view, update, and delete expenses.
- **Income Management**: Record and manage various sources of income.
- **Dashboard**: Visualize financial data with charts and summaries.
- **Category Management**: Organize expenses and income by category for better tracking.
- **User Authentication**: Secure login and registration system.

## Prerequisites

To run this project, you need to have the following installed on your machine:

- **Node.js** (version 14.x or later)
- **npm** or **yarn** (for managing packages)
- **MongoDB** (for the database)

## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository and checking out the `new-branch` branch:

```bash
git clone https://github.com/your-username/Finance_Tracker_App.git
cd Finance_Tracker_App
git checkout new-branch

BACKEND SETUP
cd server
npm install
cp .env.example .env
npm start

FRONTEND SETUP
cd ../Finance_Tracker
npm install
npm run dev
http://localhost:5173

CLERK SETUP
## Setup Clerk for Authentication

This project uses [Clerk](https://clerk.dev/) for user authentication and management.

### Step 1: Create a Clerk Account

1. Go to [Clerk.dev](https://clerk.dev/) and sign up for an account.
2. Create a new Clerk application in the Clerk dashboard.

### Step 2: Obtain API Keys

1. In the Clerk dashboard, navigate to your application and find the API keys.
2. Copy the `Frontend API`, `API Key`, and `JWT Key`.

### Step 3: Configure Environment Variables

1. Create a `.env` file in the root of the `server` directory (or wherever appropriate).
2. Add the following environment variables:

```plaintext
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-api-key



