var express = require("express");

var router = express.Router();

import burger from "../models/burger";

// import connection from "../config/connection"

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/api/burgers", function (req, res) {
    burger.query("SELECT * FROM burgers", function (err, data) {
        if (err) { throw err };
        res.send(data);
    })
});

router.post("/api/burgers", function (req, res) {
    burger.query("INSERT INTO burgers (burger_name, devoured) VALUES ('" + req.body.burger_name + "', 0)", function (err, data) {
        if (err) { throw err };
        res.json(data);
    })
});

router.put("/api/burgers/:burger_name", function (req, res) {
    burger.query("UPDATE burgers SET devoured = 1 WHERE burger_name = '" + req.params.burger_name + "'", function (err, data) {
        if (err) { throw err };
        res.json(data);
    })
});

module.exports = router;