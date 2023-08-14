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

const Folder = sequelize.define("folders", {
  id_user: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  filesIn: {
    type: DataTypes.JSON,
  },
  foldersIn: {
    type: DataTypes.JSON,
  },
  folderBeforePath: {
    type: DataTypes.STRING,
  },
  path: {
    type: DataTypes.STRING,
  },
});

module.exports = Folder;
