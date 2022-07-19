const express = require("express");
const router = express.Router();
const Role = require("../models/Role");

// /api/v1/role/ Get all roles
router.get("/", (req, res) => {
    // Select all role
    Role.findAll()
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

// /api/v1/role/ Insert role
router.post("/", (req, res) => {
    // Insert role
    Role.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});

module.exports = router