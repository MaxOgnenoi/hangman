// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 5137;

// Serve the static build files
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve your index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
