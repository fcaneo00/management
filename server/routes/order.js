const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// /api/v1/order/ Get all orders
router.get("/", (req, res) => {
    // Select all Order
    Order.findAll()
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

// /api/v1/order/:id Get saved orders by id
router.get("/:id", (req, res) => {
    // Select all Order
    Order.findAll({
        where: { UserId: req.params.id, processed: false }
    })
        .then(result => res.json(result))
        .catch(err => console.log(err))
});

// /api/v1/order/:id Delete Order by id
router.delete("/:id", (req, res) => {
    //Delete Order by id
    Order.destroy({
        where: { id: req.params.id }
    })
        .then(res.json("Deleted order ID " + req.params.id))
        .catch(err => console.log(err))
})

// /api/v1/order/ Insert order
router.post("/", (req, res) => {
    // Insert order
    Order.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).send(err));
})

module.exports = router