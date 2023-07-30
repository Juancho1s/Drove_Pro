const {Sequelize, DataTypes} = require('sequelize');
const db = require('../myapp/config/db');

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "@zM4dA4T97mq",
    database: "drove",
    dialect:"mysql",
    define: {
        timestamps: false
    }
});

const User = sequelize.define("users", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    username:{
        type: DataTypes.STRING

    },
    email:{
        type: DataTypes.STRING

    },
    password:{
        type: DataTypes.STRING
    },
    recoverycode:{
        type: DataTypes.INTEGER

    },
    avatar:{
        type: DataTypes.STRING

    }
});

module.exports = User;