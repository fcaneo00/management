const Sequelize = require("sequelize");
const db = require("../core/database");
const bcrypt = require('bcryptjs');
const Role = require("./Role");

// Model for User
const User = db.define("User", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    }
},
    {
        hooks: {
            // Create password hash before creating user
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync(10)
                user.password = bcrypt.hashSync(user.password, salt)
            }
        },
    },
    {
        // Define the table's name
        // tableName: "User"
    }
);

// Role {fk} in User
Role.hasOne(User)

User.prototype.validPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = User;