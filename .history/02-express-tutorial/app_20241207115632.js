const express = require('express');

const app = express();

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "it worked!"});
});

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
    });

const PORT =3000;
app.listen(PORT, () => {
    console.log(`Ser`);
});

