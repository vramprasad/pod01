// responder-api

const express = require('express');

const app = express();
const PORT = 4000;

// Endpoint that responds to requests
app.get('/endpoint', (req, res) => {
  res.json({ message: 'Hello from API 2!' });
});

app.listen(PORT, () => {
  console.log(`Responder API running on port ${PORT}`);
});
