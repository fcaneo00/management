const Sequelize = require("sequelize");
const db = require("../core/database");
const Measure = require("./Measure");

// Model for Product
const Product = db.define("Product", {
  code: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  weight: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
},
  {
    // Define the table's name
    // tableName: "Product"
  }
);

// All foreign keys here
Measure.hasOne(Product)
Product.belongsTo(Measure)

module.exports = Product;