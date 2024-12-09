const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.send('oop')
})
console.log('Express Tutorial')