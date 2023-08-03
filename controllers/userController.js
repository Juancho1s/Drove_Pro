const usersORM = require("../models/userORM");
const loginValidation = require("../controllers/validation/loginValidation");
const signupValidation = require("../controllers/validation/signupValidation");

/* This calss will contain all the refered method to the users, these methods are called controllers */
class userController {
  /* This method works in order to add a new user with the above validations */
  static async addUser(req, res) {

    /* The pourpose of this variable is to know if the contente of the new user's input is correct */
    let err = signupValidation.validationResult(req);

    /* checke the variable */
    if (!err.isEmpty()) {
      /* In case it is invalid */
      res.send(errors.errors[0].msg);
    } else {
      /* In case it is valid the user will be added to the data base */
      let results = await usersORM.create({
        username: req.body["username"],
        email: req.body["email"],
        password: req.body["password"],
      });

      /* Here we can know if the user was successfully added to the data base */
      if (results) {
        /* 
        In case it is correct the server will direct you to the home page 
        where is the main storage of your new user 
        */
        res.redirect("/home");
      } else {
        /* Other way the server will display an error meassage */
        res.send(
          "Add user failed!! we are got some troubles with the server you might try some later."
        );
      }
    }
  }

  /* This method works in order to find a singular user depending on its email */
  static async getUserByEmail(req, res) {
    let err = loginValidation.validationResult(req);
    if (err) {
      res.redirect("/login");
    }

    let email = req.session.email;//next

    let user = await usersORM.findOne({
      where: { email: email },
    });

    if (user) {
      res.render("home", {
        title: "DrovePro-Home",
        userID: user.id,
      });
    } else {
      res.redirect("/login");
    }
  }

  /* Here is the dessicion of the update methods to be usede */
  static async updateUser(req, res) {}

  /* This method is suposed to update the password depending on the user's email */
  static async updateUserPassword(req, res) {}

  /* This method is suposed to update the first name depending on the user's email */
  static async updateUserName(req, res) {}
}

module.exports = {
  userController,
};
