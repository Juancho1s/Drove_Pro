var express = require("express");
var router = express.Router();

const {
  validationRules,
  userController,
} = require("../controllers/userController");
const sessionStarting = require("../controllers/services/sessionStarting");

/* GET */

/* This get would start the server */
router.get("/", sessionStarting.checkUserSession);

/* This get would destroy the user account and allow the user to start anotherone */
router.get("/login", sessionStarting.clearLogin);

/* This get would destroy the user account and allow the user to create anotherone */
router.get("/signup", sessionStarting.clearSigup);

/* This get would redirect you to the home page where the user can select any folder or file */
router.get("/home/:id", sessionStarting.checkUserSession, (req, res) => {
  res.render("home", {
    title: "Home",
    stay: true,
    multimedia: {
      "Folder1": {
        "Name": "Programs",
        "Folders": [
          { "Name": "Project Management" },
          { "Name": "Contracts" },
          {
            "Name": "Engineering",
            "Folders": [{ "Name": "Assets" }, { "Name": "Requirements" }],
          },
        ],
      },
      "file": { "Name": "Quiksort" },
    },
  });
});

router.get("/home/1/folder/Programs", (req, res) =>{
  res.render("folder",{
    title: "Caca en uña",
    stay: true,
    multimedia: {
      "Folder1": {
        "Name": "Programs",
        "Folders": [
          { "Name": "Project Management" },
          { "Name": "Contracts" },
          {
            "Name": "Engineering",
            "Folders": [{ "Name": "Assets" }, { "Name": "Requirements" }],
          },
        ],
      },
      "file": { "Name": "Quiksort" },
    },
  });
});

router.get("/newfile", (req, res) => {
  res.render("newfile", {
    title: "New File",
    stay: false
  });
});

router.get("/newfolder", (req, res) => {
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

module.exports = router;
