const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

// Serve static files from the same directory
app.use(express.static(__dirname));

// Handle requests for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
