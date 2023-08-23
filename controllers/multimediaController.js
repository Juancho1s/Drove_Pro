const methods = require("./services/methods");
const filesController = require("../controllers/filesController");

const { Op } = require("sequelize");
const crypto = require("crypto-js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const foldersController = require("./foldersController");


class multimediaController {
  /* Get all files and folders in a specific path  */
  static async homeRendering(req, res) {
    try {
      let CurrentFolder = await foldersController.getCurrentFolder(req, res);
      
      res.render("home", {
        title: "Home",
        stay: true,
        userId: req.session.userData.id,
        encryptedLocation: methods.pathEncryption(req),
        filesIn: CurrentFolder.filesIn,
        foldersIn: CurrentFolder.foldersIn,
      });
    } catch (error) {
      console.log("The error is:" + error)
    }


  }
}

module.exports = multimediaController;
