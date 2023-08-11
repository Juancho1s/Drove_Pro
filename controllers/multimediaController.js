const folderORM = require("../models/folderORM");
const fileORM = require("../models/fileORM");
const { Op } = require("sequelize");

class folderController {
  static async getFolder(req, res) {}

  static async moveFolderTo(req, res) {}

  static async createFolder(req, res) {}

  static async downloadFolder(req, res) {}

  static async updateFolder(req, res) {}
}

class fileController {
  static async getFile(req, res) {}

  static async createFile(req, res) {}

  static async downloadFile(req, res) {}

  static async udateFile(req, res) {}

  static async moveFileTo(req, res) {}
}

class multimediaController{
  //get all files and folders in a specific path 
  static async getUserFilesAndFolders(req,res){}
}

module.exports = folderController;
