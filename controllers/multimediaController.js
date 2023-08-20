const methods = require("./services/methods");
const { Op } = require("sequelize");
const crypto = require("crypto-js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");


class multimediaController {
  /* Get all files and folders in a specific path  */
  static async homeRendering(req, res) {

    let cryp1 = methods.location(req) + "/movies";

    const encryptionKey = req.session.userData.email;
    const iv = req.session.userData.password;
    let cryps = crypto.AES.encrypt(cryp1, encryptionKey, { iv }).toString().replace(/\+/g, '-').replace(/\//g, '_');
    res.render("home", {
      title: "Home",
      stay: true,
      location: methods.pathEncryption(req),
      multimedia: {
        Folder1: {
          id_user: req.params.id,
          name: "movies",
          folderBeforePath: "encryptedUrlSafe",
          path: cryps,
        },
        file: {
          name: "Quicksort",
          type: ".pdf",
          creationDate: "02/10/2023",
          size: "1000",
          usersAndPermission: [
            {
              name: "Juancho",
              permission: "read",
            },
            {
              name: "John4",
              permission: "write",
            },
          ],
          path: "encryptedHex3",
        },
      },
    });
  }
}

module.exports = multimediaController;
