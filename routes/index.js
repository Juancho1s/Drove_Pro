var express = require("express");
var router = express.Router();

const {
  UsersController,
  validationRules,
  userController,
} = require("../controllers/userController");
const sessionStarting = require("../controllers/validation/sessionStarting");

/* GET */
/* This get would start the server */
router.get("/", sessionStarting.checkUserSession);
/* This get would destroy the user account and allow the user to start anotherone */
router.get("/login", sessionStarting.destroySession);
/* This get would destroy the user account and allow the user to create anotherone */
router.get("/signup", sessionStarting.destroySession);
/* This get would redirect you to the home page where the user can select any folder or file */
router.get("/home/:id");

/* POST */
/* This post give me the input of the user to start its session */
router.post("/login", userController.getUserByEmail);
/* This post gives us a new user with all the information needed for him in order to create */
router.post("/signup", userController.addUser);

module.exports = router;
