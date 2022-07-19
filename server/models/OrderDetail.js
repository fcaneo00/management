const Sequelize = require("sequelize");
const db = require("../core/database");
const Order = require("./Order");
const Product = require("./Product");

// Model for OrderDetail
const OrderDetail = db.define("OrderDetail", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
},
  {
    // Define the table's name
    // tableName: "OrderDetail"
  }
);

// Remove automatic primary key
OrderDetail.removeAttribute('id')

// All foreign keys here
Product.hasMany(OrderDetail)
Order.hasMany(OrderDetail)

module.exports = OrderDetail;