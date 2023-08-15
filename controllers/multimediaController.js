const { Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const folderORM = require("../models/folderORM");
const fileORM = require("../models/fileORM");

class folderController {
  /* This method will get a specific folder which belong to a specific location */
  static async getFolder(req, res) {}

  /* This method will get all the folders of any specific location */
  static async getAllFolders(req, res) {}

  /* 
    This method will create a new folder into the database and also
    it will insert the files which are inside this folder
  */
  static async createFolder(req, res) {
    const newFolderData = req.body.folder;
    const folderName = newFolderData.originalname;
    let id_user = req.session.userData;

    methods.processFolder(newFolderData);

    // let results = await folderORM.create({
    //   id_user: id_user,
    //   name: folderName,
    //   filesIn : ,
    //   foldersIn : ,
    //   folderBeforePath : ,
    //   path : ,
    // });
  }

  /* This method will download a selected folder and put it in the download path */
  static async downloadFolder(req, res) {}

  /* This method will update the folder's name and any other thing which can be updated */
  static async updateFolder(req, res) {}

  /* This method can move a selected folder to any specific ubication in the user's storage */
  static async moveFolderTo(req, res) {}

  /* 
    This method will obtain the fist structure of the folder 
    I refer to the first level inside this folder.
  */
  static async readFolderFiles(req, res) {}

  /* This method will creat a root for every new user */
  static async newUserRoot(req, res, next){
    let userId = req.session.userData.id;

    const resutls = folderORM.create({
      id_user: userId,
      name: `root${userId}`,
      filesIn: {},
      foldersIn: {},
      folderBeforePath: "/",
      path: `/root${userId}`,
    });
    
    if (resutls) {
      next();
    }else{
      res.redirect("/login");
    }
  }
}

class fileController {
  /* This method will get a specific file */
  static async getFile(req, res) {}

  /* This method will get all the files of any specific storage location */
  static async getAllFiles(req, res) {}

  /* This method will create a file in any specific location */
  static async createFile(req, res) {}

  /* This method will give you the file to download and set it in the download local storage */
  static async downloadFile(req, res) {}

  /* This method will update the name of any selected file */
  static async udateFile(req, res) {}

  /* This method will move a file to any selected socation of the user's storage */
  static async moveFileTo(req, res) {}
}

class multimediaController {
  /* Get all files and folders in a specific path  */
  static async getAllfolderAndFilesOf(req, res) {}
}

class methods {
  static async processFolder(newFolderData) {
    try {
      const items = await fs.readdir(newFolderData);
      let folders = [];
      let files = [];

      for (const item of items) {
        const itemPath = path.join(newFolderData, item);
        const stat = await fs.stat(itemPath);

        if (stat.isDirectory()) {
          folders.push({ Name: stat.originalname });
        } else if (stat.isFile()) {
          files.push({ Name: stat.originalname });
        }
      }

      // for (const item of items) {
      //   const itemPath = path.join(newFolderData, item);
      //   const stat = await fs.stat(itemPath);

      //   if (stat.isDirectory()) {
      //   } else if (stat.isFile()) {
      //     const fileContent = await fs.readFile(itemPath, "utf8");
      //   }
      // }
    } catch (error) {
      console.error("Error while processing folder:", error);
    }
  }
}

module.exports = folderController;
