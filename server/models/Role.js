const Sequelize = require("sequelize");
const db = require("../core/database");
const User = require("./User");

// Model for Role
const Role = db.define("Role", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    // Define the table's name
    // tableName: "Role"
  }
);

module.exports = Role;