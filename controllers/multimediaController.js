const methods = require("./services/methods");
const filesController = require("../controllers/filesController");
const fileORM = require("../models/fileORM");
const folder = require("../models/folderORM");

const { Op } = require("sequelize");
const crypto = require("crypto-js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


class multimediaController {
  /* Get all files and folders in a specific path  */
  static async homeRendering(req, res) {
    res.render("home", {
      title: "Home",
      stay: true,
      userId: req.session.userData.id,
      encryptedLocation: methods.pathEncryption(req),
      location: methods.location(req),
      multimedia: await filesController.getAllFiles(req, res),
    });

  }
}

module.exports = multimediaController;
