var express = require("express");
var router = express.Router();

const crypto = require("crypto");
const {
  validationRules,
  userController,
} = require("../controllers/userController");
const sessionStarting = require("../controllers/services/sessionStarting");
const multimediaController = require("../controllers/multimediaController");

/* GET */

/* This get would start the server */
router.get("/", sessionStarting.checkUserSession);

/* This get would destroy the user account and allow the user to start anotherone */
router.get("/login", sessionStarting.clearLogin);

/* This get would destroy the user account and allow the user to create anotherone */
router.get("/signup", sessionStarting.clearSigup);

/* This get would redirect you to the home page where the user can select any folder or file */
router.get("/home/:id", sessionStarting.checkUserSession);

router.get("/home/:id/folder/:path", sessionStarting.checkUserSession, (req, res) => {

  let location = req.session.userData.location;
  
  let path = req.params.path;
  
  
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);


  let cryp1 = location;
  let cryp2 = location + "/movies";
  let cryp3 = location + "/Mergesort";

  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);

  let encryptedHex1 = cipher.update(cryp1, 'utf-8', 'hex');
  let encryptedHex2 = cipher.update(cryp2, 'utf-8', 'hex');
  let encryptedHex3 = cipher.update(cryp3, 'utf-8', 'hex');
  encryptedHex1 += cipher.final('hex');
  encryptedHex2 += cipher.final('hex');
  encryptedHex3 += cipher.final('hex');




  res.render("folder", {
    title: "Caca en uña",
    stay: true,
    multimedia: {
      "Folder1": {
        "id_user": 1,
        "name": "movies",
        "folderBeforePath": encryptedHex1,
        "path": encryptedHex2,
      },
      "file": {
        "name": "Mergesort",
        "type": ".jpg",
        "creationDate": "02/10/2023",
        "size": "1000",
        "usersAndPermission": {},
        "path": encryptedHex3,
      },
    },
  });
});

router.post("/newfile", (req, res) => {
  res.render("newfile", {
    title: "New File",
    stay: false
  });
});

router.post("/newfolder", (req, res) => {
  res.render("newfolder", {
    title: "New Folder",
    stay: false,
  });
});


/* POST */

/* This post give me the input of the user to start its session */
router.post("/login", userController.getUserByEON);

/* This post gives us a new user with all the information needed for him in order to be created */
router.post("/signup", userController.addUser);

router.post("/uploadFolder/:path", multimediaController.createFolder);

module.exports = router;
