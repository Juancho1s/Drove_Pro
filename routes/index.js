var express = require("express");
var router = express.Router();

const crypto = require("crypto-js");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {
  userController,
} = require("../controllers/usersController");
const {
  folderController,
  fileController,
  multimediaController,
} = require("../controllers/multimediaController");
const methods = require("../controllers/services/methods");
const sessionStarting = require("../controllers/services/sessionStarting");

/* GET */

/* This get would start the server */
router.get("/", sessionStarting.checkUserSession);

/* This get would destroy the user account and allow the user to start anotherone */
router.get("/login", sessionStarting.clearLogin);

/* This get would destroy the user account and allow the user to create anotherone */
router.get("/signup", sessionStarting.clearSigup);

/* This get would redirect you to the home page where the user can select any folder or file */
router.get(
  "/home/:id",
  sessionStarting.checkUserSession,
  multimediaController.getAllfolderAndFilesOf
);

router.get(
  "/home/:id/folder/:path",
  sessionStarting.checkUserSession,
  (req, res) => {
    let location = methods.location(req);
    let encryptionKey = req.session.userData.email;

    let path = req.params.path;

    let cryp1 = location + "/movies";
    let cryp1ed = crypto.AES.encrypt(cryp1, encryptionKey, {mode: crypto.mode.CBC}).toString(crypto.enc.Base64);

    try{
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

router.post("/newfile");

router.post("/newfolder", upload.any("folder"), folderController.createFolder);

/* This post give me the input of the user to start its session */
router.post("/login", userController.getUserByEON);

/* This post gives us a new user with all the information needed for him in order to be created */
router.post("/signup", userController.addUser);

router.post("/uploadFolder/:path", folderController.createFolder);

module.exports = router;
