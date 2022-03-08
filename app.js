const express = require("express");
const app = express();
const morgan = require("morgan");


//Middleware
app.use(morgan('tiny'));
app.use(express.json());


module.exports = app;
