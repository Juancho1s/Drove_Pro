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
    folder: {
      "link": "This is files will have its contents written into a JSON string. \n",
      "link2": 42,
      "c": { "nested": "You can nest directories to create a tree structure. \n" },
      "d": { "example": "somethimes it's convenient to enable some raw JSON" },
      "empty": {},
    }
  });
});

/* POST */
/* This post give me the input of the user to start its session */
router.post("/login", userController.getUserByEON);
/* This post gives us a new user with all the information needed for him in order to be created */
router.post("/signup", userController.addUser);

module.exports = router;