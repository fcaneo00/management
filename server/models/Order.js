const Sequelize = require("sequelize");
const db = require("../core/database");
const User = require("./User");

// Model for Order
const Order = db.define("Order", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  processed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
},
  {
    // Define the table's name
    // tableName: "Order"
  }
);

// All foreign keys here
User.hasOne(Order)
Order.belongsTo(User)


module.exports = Order;