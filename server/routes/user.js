const express = require(`express`);
const userRoutes = express.Router();
const dbo = require(`../database/conn`);
const ObjectId = require(`mongodb`).ObjectId;

userRoutes.route(`/`).get(function (req, res) {
    let db_connect = dbo.getDb(`marsleyva`);

    db_connect
        .collection(`users`)
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = userRoutes;