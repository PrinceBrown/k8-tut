const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // This will make your app listen to all network interfaces

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});