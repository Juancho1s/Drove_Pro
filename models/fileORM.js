const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "123456789",
  database: "drove",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const File = sequelize.define("files", {
  id: {
    type: DataTypes.INTEGER(10),
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  creationDate: {
    type: DataTypes.DATE,
  },
  size: {
    type: DataTypes.DOUBLE,
  },
  usersAndPermission: {
    type: DataTypes.JSON,
  },
  path: {
    type: DataTypes.STRING,
  },
  pathBefore: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = File;
