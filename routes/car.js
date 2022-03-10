const express = require("express");
const router1 = express.Router();
const db = require('../database/controllers');

router1
.route('/')
    .get((req,res) => {
        db.getAllCars()
        .then((data) => res.send(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Nothing here!" })
        });
    })

 module.exports = router1;