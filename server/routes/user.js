const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken')

// Create JWT Secret Key
/*function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, jwtconfig.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}*/

// /api/v1/users/ Get all Users
router.get("/", (req, res) => {
    // Select all Users
    User.findAll()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

// /api/v1/users/register User Register
router.post("/register", (req, res) => {
    // New User
    User.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).send(err));
});

// /api/v1/users/login User Login
router.post("/login", (req, res) => {
    const logDetail = req.body
    // User Login
    User.findOne({
        where: {
            id: logDetail.id
        }
    })
        .then((user) => {
            // User found and password hash compare
            if (user && bcrypt.compareSync(logDetail.password, user.password)) {
                res.status(200).json({ name: user.name, role: user.RoleId })
            } else {
                res.status(404).json({ message: "Wrong ID or password" })
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        })
});

// /api/v1/users/:id Delete User by id
router.delete("/:id", (req, res) => {
    //Delete User by id
    User.destroy({
        where: { id: req.params.id }
    })
        .then(result => res.send("User deleted"))
        .catch(err => console.log(err))
})

// /api/v1/users/:id Update User by id
router.put("/update/:id", (req, res) => {
    const formDetail = req.body
    // Update certain fields
    User.update(
        {
            name: formDetail.name,
            password: bcrypt.hashSync(req.body.password, 10),
            RoleId: formDetail.RoleId
        }, { where: { id: req.params.id } }
    )
        .then((user) => {
            if (user == 1) {
                res.status(200).json({ message: "Update ok" })
            } else {
                res.status(404).json({ message: "User does not exists" })
            }
        })
        .catch((err) => {
            res.status(500).send(err)
        })
});

module.exports = router