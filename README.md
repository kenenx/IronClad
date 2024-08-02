# Ironclad

## Overview

Ironclad is a weight training workout tracker that leverages AI to create customized workout plans, track progress, and enhance users' fitness journeys. This full-stack application helps users organize their workouts, generate personalized training sessions, and continuously adjust routines for optimal results.

## Table of Contents

- [Ironclad](#ironclad)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
    - [Minimum Viable Product (MVP)](#minimum-viable-product-mvp)
    - [Future Features](#future-features)
  - [User Interface](#user-interface)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Setup Instructions](#setup-instructions)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Description

Ironclad is a web application that allows users to create and manage their workout routines, track their progress, and utilize AI to generate personalized workout plans. The application is built with a clear separation of concerns between the client, server, and database.

## Features

### Minimum Viable Product (MVP)

- User registration and login.
- Creation and saving of workout templates.
- Tracking of specific workout sessions.
- Viewing previously completed workouts.
- AI-generated workouts based on user inputs.
- Admin management of workout templates and users.

### Future Features

- AI-generated workouts based on previous sessions.
- Visualization of progress through graphs.
- Cardio workout templates and AI-generated cardio workouts.

## User Interface

Ironclad is optimized for mobile devices, ensuring ease of use during workout sessions. The interface includes intuitive navigation and a bottom navbar for easy access.

![Wireframes](ironcladwireframe1.png)

## Architecture

Ironclad follows an N-Tier architecture with a clear separation of concerns:

- **Client-Side**: React application
- **Server-Side**: Node.js/Express application
- **Database**: MongoDB

![Architecture diagram](architecture.jpg)

## Technologies

- **Front-end**: HTML, CSS, JavaScript, React, Vite, Bootstrap, Axios
- **Back-end**: JavaScript, Node.js, Express, Mongoose
- **Database**: MongoDB
- **Authentication**: JWT, Bcrypt
- **Testing**: Vitest, Chai, Mocha
- **Version Control**: Git

## Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB

### Setup Instructions

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/ironclad.git
    cd ironclad
    ```

2. Install dependencies for both client and server:

    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the `server` directory with the following:

    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    OPENAI_API_KEY=your_openai_api_key
    ```
    - Create a `.env` file in the `client` directory with the following:
    ```env
    VITE_API_URL=your_server_url
    ```
  

4. Start the development servers:

    ```sh
    cd server
    npm run start
    cd ../client
    npm run dev
    ```

## Testing

Ironclad uses Vitest, Chai, and Mocha for testing. Run tests using the following commands:

    ```sh
    cd server
    npm test
    cd ../client
    npm test
    ```

## Deployment

Ironclad is deployed using the following services:

- **Front-end**: Render
- **Back-end**: Render
- **Database**: MongoDB Atlas