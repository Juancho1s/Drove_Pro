const signupValidation = require("./services/signupValidation");
const multimediaController = require("./multimediaController");
const folderORM = require("./foldersController");
const loginValidation = require("./services/loginValidation");
const usersORM = require("../models/userORM");
const { Op } = require("sequelize");
const crypto = require("crypto-js");

/* This calss will contain all the refered method to the users, these methods are called controllers */
class userController {
  /* This method works in order to add a new user with the above validations */
  static async addUser(req, res, next) {
    /* The pourpose of this variable is to know if the contente of the new user's input is correct */
    let err = signupValidation.validationResult(req);

    /* checke the variable */
    if (!err.isEmpty()) {
      /* In case it is invalid */
      res.redirect("/login");
    } else {
      /* In case it is valid, the user will be added to the data base */
      let user = await usersORM.create({
        username: req.body["username"],
        email: req.body["email"],
        password: req.body["password"],
      });
      if (user) {
        /* This statement will save all the user data(it is totaly secure in HTTPS) */
        req.session.userData = {
          id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
          location: [`root${user.id}`],
        };

        /* This function create the new user's root */
        folderORM.newUserRoot(req, res, next);

        res.redirect(`/home`);
      } else {
        res.redirect("/login");
      }
    }
  }

  /* This method works in order to find a singular user depending on its email */
  static async getUserByEON(req, res) {
    let err = loginValidation.validationResult(req);
    if (!err.isEmpty()) {
      res.redirect("/login");
    }

    /* If every thing is good, these variables will hold the data to use it in some queries */
    let username_email = req.body.username_email;
    let password = req.body.password;

    /*
      This query will find the user by the user email or the user name and also it will compare if the 
      passwords match
    */
    let user = await usersORM.findOne({
      where: {
        [Op.or]: [{ username: username_email }, { email: username_email }],
        password: password,
      },
    });

    /* 
    By the end, if the user is a valid one the server will direct you
    to the home page which will contain all the user folders and files 
    */
    if (user) {
      req.session.userData = {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        location: [`root${user.id}`],
      };
      res.redirect(`/home`);
    } else {
      /* In case that the user is an invalid one, the server will direct you to the login page */
      res.redirect("/login");
    }
  }

  /* This method will get all the files that are shared with the current user */
  static async getFilesShared(req, res) { }

  /* Here is the dessicion of the update methods to be usede */
  static async updateUser(req, res) { }

  /* This method is suposed to update the password depending on the user's email */
  static async updateUserPassword(req, res) { }

  /* This method is suposed to update the first name depending on the user's email */
  static async updateUserName(req, res) { }
}

module.exports = userController;
