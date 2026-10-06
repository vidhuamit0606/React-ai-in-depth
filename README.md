# React AI In Depth

A simple chatbot based on the OpenAI API.

The frontend is a React 19 application written in TypeScript, bootstrapped with [Create React App](https://create-react-app.dev/) (`react-scripts`).
The backend is a plain Node / Express REST server that calls the OpenAI API.

# Installation pre-requisites

Please install Node 24 Long Term Support Edition (LTS).

# How To install this repository

After cloning, install the exact dependencies of package-lock.json:

    npm ci

# Environment variables

Copy `.env.example` to `.env` and fill in your `OPENAI_API_KEY` and `JWT_SECRET`.

The Create React App dev server port is set in `.env.development` (port 4200), which takes precedence over the backend `PORT` in `.env`.

# Available scripts

### `npm start`

Runs the frontend in development mode at [http://localhost:4200](http://localhost:4200).
Requests to `/api` are proxied to the backend on port 9000.

### `npm test`

Runs the tests with Jest in interactive watch mode.

### `npm run build`

Builds an optimized production bundle into the `build` folder.

### `npm run eject`

Ejects the Create React App configuration. This is a one-way operation.
