const methods = require("./services/methods");
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
    if (req.session.userData.location.length > 1) {
      let userId = req.session.userData.id;
      let files = 
    }else{

    }
  }
}

module.exports = multimediaController;
