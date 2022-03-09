const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require('./database/controllers')


//Middleware
app.use(morgan('tiny'));
app.use(express.json());

app.get("/birthdays", (req, res) => {
    let{ astrologySign } = req.query;
    if(astrologySign !== undefined) {
        db.getBirthdayBySign(astrologySign)
        .then((data) => res.send(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Nothing here!" })
        }
        );
    } else {
        db.getAllBirthdays()
        .then((data) => res.send(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Nothing here!" })
        }
        );
    }
})

app.get('/birthdays/:name', function (req, res) {
    db.getBirthdayByName(req.params.name)
        .then((data) => res.send(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Nothing here!" })
        }
        );
});

app.post('/birthdays', (req, res) => {
    db.postBirthday(req)
        .then((data) => res.status(201).json(data))
        .catch((err) => {
            console.error(err);
            return res.status(404).json({ success: false, message: "Something is wrong." });
        }
        );
})

app.put('/birthdays/:name', function (req, res) {
    db.replaceBirthday(req.params.name, req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Something is wrong." })
        });
});

app.patch('/birthdays/:name', function (req, res) {
    db.replaceBirthday(req.params.name, req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Something is wrong." })
      });
});

app.delete('/birthdays/:name', function (req, res) {
    db.removeBirthday(req.params.name)
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            console.error(err);
            res.status(404).json({ message: "Something is wrong." })
        });
});

module.exports = app;
