const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require('./database/controllers')


//Middleware
app.use(morgan('tiny'));
app.use(express.json());
//Routes
app
    .route('/birthdays')
    .get((req, res) => {
        // let{ astrologySign } = req.query;
        // if(astrologySign !== undefined) {
        //     db.getBirthdayBySign(astrologySign)
        //     .then((data) => res.send(data))
        //     .catch((err) => {
        //         console.error(err);
        //         res.status(404).json({ message: "Nothing here!" })
        //     }
        //     );
        // } 
        console.log('query:', req.query)
        if (req.query !== {}) {
            db.handleQueries(req.query)
            .then((data) => res.send(data))
            .catch((err) => {
                console.error(err);
                res.status(404).json({ message: "Nothing here!" })
            });
        } else {
            db.getAllBirthdays()
            .then((data) => res.send(data))
            .catch((err) => {
                console.error(err);
                res.status(404).json({ message: "Nothing here!" })
            });
        }
    })
    .post((req, res) => {
        db.postBirthday(req.body)
            .then((data) => res.status(201).json(data))
            .catch((err) => {
                console.error(err);
                return res.status(404).json({ success: false, message: "Something is wrong." });
            }
        );
    })

app
    .route('/birthdays/:name')
    .get((req, res) => {
    db.getBirthdayByName(req.params.name)
        .then((data) => res.send(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Nothing here!" })
        });
    })
    .put((req, res) => {
        db.replaceBirthday(req.params.name, req.body)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                console.error(err);
                res.status(404).json({ message: "Something is wrong." })
            });
    })
    .patch((req, res) => {
        db.replaceBirthday(req.params.name, req.body)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                console.error(err);
                res.status(404).json({ message: "Something is wrong." })
            });
    })
    .delete((req, res) => {
        db.removeBirthday(req.params.name)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                console.error(err);
                res.status(404).json({ message: "Something is wrong." })
            });
    });

module.exports = app;
