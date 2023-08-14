const { Op } = require("sequelize");
const folderORM = require("../models/folderORM");
const fileORM = require("../models/fileORM");

class folderController {
  static async getFolder(req, res) {}

  static async createFolder(req, res) {
    const newFolderData = req.body.folder;
    const folderName = newFolderData.originalname;

    let results = await folderORM.create();
  }
  
  static async downloadFolder(req, res) {}
  
  static async updateFolder(req, res) {}
  
  static async moveFolderTo(req, res) {}
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
  static async getAllfolderAndFilesOf(req,res){}
}

module.exports = folderController;
