# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  When an asynchronous operation within a route handler throws an error, and that error isn't properly caught, the server will crash.

## The Bug

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation.  If the asynchronous operation fails, an error is thrown, but it's not caught, causing the server to terminate.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle errors in asynchronous routes. By using a `.catch()` block, the error is handled gracefully, preventing server crashes.  The solution also includes a centralized error handler for uncaught exceptions.