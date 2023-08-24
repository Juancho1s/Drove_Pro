const folderORM = require("../models/folderORM");
const methods = require("./services/methods");
const { Op } = require("sequelize");
const crypto = require("crypto-js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


class foldersController {
  /* This method will get a specific folder which belong to a specific location */
  static async getCurrentFolder(req, res) {
    try {
      let location = methods.location(req);
      let userId = req.session.userData.id;
      let results = await folderORM.findOne({
        where: {
          path: location,
          id_user: userId,
        }
      });

      return results;
    } catch (error) {
      console.log(error);
    }
  }

  /* This method will get all the folders of any specific location */
  static async getAllFolders(req, res) {
    let userId = req.session.userData.id;
    let pathFolder = methods.decryption(req.params.path);
    let results = await folderORM.findAll({
      where: {
        path: {
          [Op.like]: pathFolder,
        },
        id_user: userId, // if user is logged in then only show his files else show public files
      }
    });
    return results;
  }

  /* This method can update a folder to the database */
  static async uploadFolder(req, res) { }

  /* 
    This method will create a new folder into the database and also
    it will insert the files which are inside this folder
  */
  static async createFolder(req, res) {

    const uploadedFiles = req.files;
    const locationPath = req.params.path;
    let id_user = req.session.userData.id;

    methods.processFolder(uploadedFiles, req);

    if (req.session.userData.location.length == 1) {
      res.redirect(`/home/${id_user}/folder/:path`);
    } else {
      res.redirect(req.headers.origin);
    }

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
  static async downloadFolder(req, res) { }

  /* This method will update the folder's jsno */
  static async updateFolderjsonField(req, res) {

  }

  /* This method will update the folder's jsno */
  static async updateFilesjsonField(req, originalname) {
    let encryptedLocation = methods.pathEncryption(req, originalname);
    let location = methods.location(req);

    let row = await folderORM.findOne({
      where: { path: location }
    });
    let filesIn = row.filesIn;

    filesIn.push({
      name: originalname,
      path: encryptedLocation,
    });


    await folderORM.update({
      filesIn: filesIn
    }, {
      where: {
        path: location,
      }
    });
  }

  /* This method can move a selected folder to any specific ubication in the user's storage */
  static async moveFolderTo(req, res) { }

  /* 
    This method will obtain the fist structure of the folder 
    I refer to the first level inside this folder.
  */
  static async readFolderFiles(req, res) { }

  /* This method will creat a root for every new user */
  static async newUserRoot(req, res, next) {
    let userId = req.session.userData.id;
    let newRoot = `root${userId}`;

    const resutls = await folderORM.create({
      id_user: userId,
      name: newRoot,
      filesIn: [],
      foldersIn: [],
      folderBeforePath: "",
      path: newRoot,
    });

    if (resutls) {
      var path = resutls.folderBeforePath;

      // Name of the folder.
      let folderName = resutls.name;

      req.session.userData.location.push(resutls.name);

      fetch('https://gymalwaysinshape.000webhostapp.com/createEmptyFolder.php?path=' + path + '&name=' + folderName, {
        method: 'POST'
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
}

module.exports = foldersController;