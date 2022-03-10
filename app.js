const express = require("express");
const app = express();
const birthdays = require("./routes/birthdays")
const cars = require("./routes/cars")
const morgan = require("morgan");
const db = require('./database/controllers')

//Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use("/birthdays", birthdays)
app.use("/cars", cars)
//Routes
app.get('/', (req, res) => {
    res.status(200).send('Creep on your favorite celebrities.')
});

app.get('/atrology', (req, res) => {
    db.getAtrologySigns()
    .then((data) => res.send(data))
    .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Nothing here!" })
    });
});

module.exports = app;
