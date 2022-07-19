const express = require("express");
const Order = require("../models/Order");
const router = express.Router();
const OrderDetail = require("../models/OrderDetail");

// /api/v1/orderdetail/ Get all orderdetails
router.get("/", (req, res) => {
    // Select all OrderDetail
    OrderDetail.findAll()
        .then(result => res.json(result))
        .catch(err => console.log(err));
})

// /api/v1/orderdetail/ Get all orderdetails
router.get("/:orderId", (req, res) => {
    // Select all OrderDetail
    OrderDetail.findAll({
        where: { OrderId: req.params.orderId }
    })
        .then(result => res.json(result))
        .catch(err => res.status(404).send(err));
})

// /api/v1/orderdetail/ Get all orderdetails
router.patch("/:OrderId", (req, res) => {
    // Delete and then create new order
    OrderDetail.bulkCreate(req.body, {
        updateOnDuplicate: ['OrderId'],
        where: { OrderId: req.params.OrderId }
    })
        .then(res.status(200).json(res))
        .catch(res.status(404).send(err))
})

// /api/v1/orderdetail/ Insert orderdetail
router.post("/", (req, res) => {
    // Insert orderdetail
    OrderDetail.bulkCreate(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).send(err));
});

module.exports = router