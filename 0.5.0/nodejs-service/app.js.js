// app.js
const express = require('express');
const app = express();

const hostname = '0.0.0.0';



app.get('/server-status', (req, res) => {
    console.log('Server status requested');
    res.status(200).json({
        serverName: 'RocketScore NodeJs k8-Demo (GG)',
        status: 'Running',
        environment: process.env.NODE_ENV || 'local',
    });
})


app.get('/', (req, res) => res.status(200).json({
    response: 'Good response from server!', 
    environmentSecretID: process.env.SECRET_ID ?? 'No secret ID found',
    environmentSecretMessage: process.env.SECRET_MESSAGE ?? 'No secret ID found',
    status: 200, 
    port: PORT, hostname: hostname}));


  
const PORT = process.env.PORT || 5400;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
