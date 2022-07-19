const express = require("express");
const router = express.Router();
const Measure = require("../models/Measure");
const Product = require("../models/Product");

// /api/v1/measure/ Get all measures
router.get("/", (req, res) => {
    // Select all Measure
    Measure.findAll()
        .then(result => res.json(result))
        .catch(err => res.status(404).send(err))
        .catch(err => console.log(err))
});

// /api/v1/measure/ Insert measure
router.post("/", (req, res) => {
    // Insert measure
    Measure.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => console.status(404).send(err))
        .catch(err => console.log(err))
});

module.exports = router