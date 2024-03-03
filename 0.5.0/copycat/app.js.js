// app.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get("http://gatewaygenius-demo-service:80");
    response.data.serverName = "Copycat"; // Append serverName to the response data
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'A request was attempted to http://gatewaygenius-demo-service:80 but failed.',
      error: error.response ? error.response.data : error.message
    });
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));