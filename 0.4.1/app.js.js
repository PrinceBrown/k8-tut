// app.js
const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).json({
    response: 'Good response from server!', 
    environmentSecretID: process.env.SECRET_ID ?? 'No secret ID found',
    environmentSecretMessage: process.env.SECRET_MESSAGE ?? 'No secret ID found',
    status: 200, 
    port: port, hostname: hostname}));

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
