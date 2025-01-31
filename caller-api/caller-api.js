// caller-api

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Endpoint that calls API 2
app.get('/call-api2', async (req, res) => {
  try {
    const response = await axios.get('http://responder-api:4000/endpoint');
    res.json({ message: 'Response from API 2', data: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Error calling API 2', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Caller API running on port ${PORT}`);
});
