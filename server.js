// Load environment variables from .env file
require('dotenv').config();

// Import the Express library
const express = require('express');
const app = express();

// Use the PORT from the .env file, with a fallback to 3000
const PORT = process.env.PORT || 3000;

// A simple test route
app.get('/', (req, res) => {
  res.send('Welcome to the Fruit Booking System Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
