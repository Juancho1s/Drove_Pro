const crypto = require("crypto-js");
const express = require("express");
const multer = require("multer");

const multimediaController = require("../controllers/multimediaController");
const sessionStarting = require("../controllers/services/sessionStarting");
const foldersController = require("../controllers/foldersController");
const filesController = require("../controllers/filesController");
const usersController = require("../controllers/usersController");
const APIController = require("../controllers/APIController");
const methods = require("../controllers/services/methods");

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    cb(null, 'uploads/')  // Specify the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

/* GET */

/* This get would start the server */
router.get("/", sessionStarting.checkUserSession);

/* This get would destroy the user account and allow the user to start anotherone */
router.get("/login", sessionStarting.clearLogin);

/* This get would destroy the user account and allow the user to create anotherone */
router.get("/signup", sessionStarting.clearSigup);

/* This get would redirect you to the home page where the user can select any folder or file */
router.get(
  "/home",
  sessionStarting.checkUserSession,
  multimediaController.homeRendering
);

router.get(
  "/home/folder/:path",
  sessionStarting.checkUserSession,
  (req, res) => {
    let location = methods.location(req);
    let encryptionKey = req.session.userData.email;

    let path = req.params.path;

    let cryp1 = location + "/movies";
    let cryp1ed = crypto.AES.encrypt(cryp1, encryptionKey, {
      mode: crypto.mode.CBC,
    }).toString(crypto.enc.Base64);

    try {
      res.render("folder", {
        title: "Caca en uña",
        stay: true,
        multimedia: {
          Folder1: {
            id_user: 1,
            name: "movies",
            folderBeforePath: "encryptedUrlSafe",
            path: cryp1ed,
          },
          file: {
            name: "Mergesort",
            type: ".jpg",
            creationDate: "02/10/2023",
            size: "1000",
            usersAndPermission: {},
            path: "encryptedHex3",
          },
        },
      });
    } catch (error) {
      console.error("Error while processing folder:", error);
    }
  }
);

/* POST */


try {
  router.post(
    "/newfiles",
    sessionStarting.checkUserSession,
    upload.single("fileInput"),
    filesController.uploadFile
  );
} catch (error) {
  console.log(error);
}
router.post(
  "/newfolder",
  sessionStarting.checkUserSession,
  upload.single("folderUpload"),
  foldersController.createFolder
);

/* This post give me the input of the user to start its session */
router.post("/login", usersController.getUserByEON);

/* This post gives us a new user with all the information needed for him in order to be created */
router.post("/signup", usersController.addUser);

module.exports = router;
