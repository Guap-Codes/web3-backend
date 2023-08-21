// Import the 'dotenv' module and configure environment variables from '.env' file
require('dotenv').config();

// Determine the port number from the environment variable 'PORT', default to 8080 if not provided
const port = process.env.PORT ? process.env.PORT : 8080;

// Import required modules: 'express' for creating a web server, 'cors' for handling cross-origin requests, and 'body-parser' for parsing JSON requests
const express = require('express'); // Web server framework
const cors = require('cors'); // Cross-Origin Resource Sharing middleware
const bodyParser = require('body-parser'); // Middleware for parsing JSON

// Create an instance of the Express server
const server = express();

// Configure server to use 'cors' middleware to allow all origins
server.use(cors({ origin: '*' }));

// Configure server to use 'body-parser' middleware for parsing incoming JSON requests
server.use(bodyParser.json());

// Start the server and listen on the specified port
server.listen(port, () => console.log(`Listening On port:${port}\n`));

// Export the created server instance for external use
module.exports = server;
