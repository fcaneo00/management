const Sequelize = require("sequelize");
const db = require("../core/database");

// Model for Measure
const Measure = db.define("Measure", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    // Define the table's name
    // tableName: "Measure"
  }
);

module.exports = Measure;