const express = require('express');

const app = express();

app.use(express.static("./public"));

app.all('*', (req, res) => {
    console.log(`Request re`)
})
console.log('Express Tutorial')