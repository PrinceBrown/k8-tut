// app.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get("http://gatewaygenius-demo-service.default.svc.cluster.local");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while fetching data');
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));