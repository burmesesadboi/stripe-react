# Stripe React Website using Context API
This repository provides a sample React website that uses the Context API to manage the state of the application. The website is built using modern React features and includes a simple layout with a navbar and a main content area. The primary purpose of the website is to demonstrate how to use the Context API to manage global state in a React application.

Features
The website includes the following features:

A simple navbar that allows users to navigate between different pages.
A main content area that displays different pages depending on the selected navbar item.
A context provider that manages the global state of the application.
Multiple context consumers that access the global state and update the UI accordingly.
Getting Started
To get started with the project, clone the repository to your local machine and run the following commands:

first : `npm install`

then : `npm run dev` since it was used to develop with `Vite`

This will install all the required dependencies and start a local development server on http://localhost:5173/.

The global state of the application is managed using the Context API. 
The context provider is defined in src/context/GlobalState.js, and the context consumers are defined in various components throughout the application.

To modify the global state of the application, you can update the state in the context provider and the changes will be reflected in all the context consumers.

## Conclusion
Overall, this repository provides a useful resource for developers who want to learn how to use the Context API to manage global state in a React application
