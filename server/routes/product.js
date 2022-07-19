const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// /api/v1/products/ Get all Product
router.get("/", (req, res) => {
  // Select all Product
  Product.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

// /api/v1/products/:id Get Product by id
router.get("/:code", (req, res) => {
  // Select Product by id
  Product.findOne({
    where: { code: req.params.code }
  })
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

// /api/v1/products/:id Delete Product by id
router.delete("/:id", (req, res) => {
  //Delete Product by id
  Product.destroy({
    where: { id: req.params.id }
  })
    .then(result => res.json("Deleted ID " + req.params.id))
    .catch(err => console.log(err))
})

// /api/v1/products/ Insert Product
router.post("/", (req, res) => {
  // Insert Product
  Product.create(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
});

// /api/v1/products/update/id Update Product
router.patch("/update/:code", (req, res) => {
  // Update Product
  Product.update(
    {
      description: req.body.description,
      weight: req.body.weight,
      price: req.body.price,
      MeasureId: req.body.MeasureId
    }, {
    where: { code: req.params.code }
  })
    .then(response =>
      res.status(200).send(response)
    )
    .catch((err) => {
      res.status(404).send(err)
    })
})

router.put("/update/:id", (req, res) => {
  const formDetail = req.body
  // Update Product
  Product.update(
    {
      productCode: formDetail.productCode,
      description: formDetail.description,
      weight: formDetail.weight,
      price: formDetail.price,
      MeasureId: formDetail.MeasureId
    }, { where: { id: req.params.id } }
  )
    .then(
      res.status(200).send("Update ok")
    )
    .catch((err) => {
      res.status(404).send(err)
    })
});

module.exports = router;
