# DaakGhor

DaakGhor is a full-stack web application built with Node.js, Express, React, and MongoDB. The project includes Google OAuth authentication, protected routes, and Stripe-based credit billing.

## Overview

This app is structured as a typical client/server setup:

- Express backend handles API routes, authentication, and billing logic
- React frontend provides the user interface
- MongoDB stores user records and credits
- Passport.js integrates Google sign-in
- Stripe is used to process payments and credit purchases

## Features

- Google authentication via Passport.js
- Session-based login using cookie sessions
- User model with credit tracking
- Stripe checkout flow for purchasing credits
- Protected API routes using middleware
- React frontend with Redux state management

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- React.js
- Redux
- Passport.js
- Stripe
- Material UI

## Project Structure

```text
DaakGhor/
├── index.js                  # Express server entry point
├── package.json              # Backend dependencies and scripts
├── config/
│   ├── keys.js               # Selects dev/prod config
│   └── prod.js               # Production environment variables
├── models/
│   └── User.js               # User schema
├── routes/
│   ├── authRoutes.js         # Google auth routes
│   └── billingRoutes.js      # Stripe billing routes
├── services/
│   └── passport.js           # Passport Google strategy
├── middlewares/
│   └── requireLogin.js       # Auth guard for protected routes
├── client/
│   ├── package.json          # Frontend dependencies and scripts
│   ├── public/
│   └── src/
│       ├── actions/
│       ├── components/
│       ├── reducers/
│       ├── index.js
│       └── serviceWorker.js
└── ...
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- MongoDB running locally or a MongoDB connection URI
- Google OAuth credentials
- Stripe API keys

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MuhtasimMusfiqZarab/DaakGhor.git
cd DaakGhor
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd client
npm install
cd ..
```

4. Create a development configuration file:

Create a file named `config/dev.js` with the following structure:

```js
module.exports = {
  googleClientID: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  mongoURI: 'YOUR_MONGODB_URI',
  cookieKey: 'YOUR_COOKIE_KEY',
  stripePublishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
  stripeSecretKey: 'YOUR_STRIPE_SECRET_KEY',
};
```

> The app loads `config/prod.js` in production and `config/dev.js` in development via `config/keys.js`.

## Environment Variables

For production deployment, set these environment variables:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `MONGO_URI`
- `COOKIE_KEY`
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

## Running the App

Run both the backend and frontend together:

```bash
npm run dev
```

This uses the root script to start the server and the client concurrently.

### Backend

```bash
npm run server
```

### Frontend

```bash
npm run client
```

The app will typically run on:

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## Authentication Flow

The project uses Google OAuth through Passport.js:

1. User visits `/auth/google`
2. Google authenticates the user
3. Callback is handled at `/auth/google/callback`
4. User session is created and stored using cookies
5. Protected pages and API routes can check the logged-in state

## Billing Flow

The Stripe route is defined in the backend and allows authenticated users to purchase credits:

- POST `/api/stripe`
- Requires login via `requireLogin`
- Charges the card using Stripe
- Increments the user credit balance and saves it to MongoDB

## Notes

This repository is a starter full-stack app with authentication and payments integrated. It is suitable for learning, customization, and extension into a larger product or service platform.

## License

This project is licensed under the ISC License.
