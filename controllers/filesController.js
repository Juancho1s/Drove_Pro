const methods = require("./services/methods");
const fileORM = require("../models/fileORM");
const crypto = require("crypto-js");
const { Op } = require("sequelize");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

class filesController {
  /* This method will get all the files of any specific storage location */
  static async getAllFiles(req, res) {}

  /* This method will create a file in any specific location */
  static async createFile(req, res) {}

  /* This method will upload a selected file from the user stuff to the server */
  static async uploadFile(req, res) {
    try {
      let file = req.files;
      let originalname = file[0].originalname;
      let type = path.extname(originalname);
      let size = file[0].size;
      let date = new Date;
      let pathLocation = `${methods.location(req)}/${originalname}`;
      let name = path.basename(
        originalname,
        type
      );

        let result = fileORM.create({
          name: name,
          type: type,
          creationDate: date,
          size: size,
          usersAndPermission: {},
          path: pathLocation,
          pathBefore: methods.location(req),
          user_id: req.session.userData.id,
        });

    } catch (error) {
      console.log("There was an error with:" + error)
    }
  }

  /* This method will give you the file to download and set it in the download local storage */
  static async downloadFile(req, res) {}

  /* This method will update the name of any selected file */
  static async udateFile(req, res) {}

  /* This method will move a file to any selected socation of the user's storage */
  static async moveFileTo(req, res) {}
}

module.exports = filesController;
