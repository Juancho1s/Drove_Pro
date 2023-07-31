const usersORM = require("../models/userORM");
const { check, validationResult } = require("express-validator");

/* These are the validation rules which are going to be executed at the time of adding a new user. */
const validationRules = [
  /* Checks for the first name to be valid format */
  check("firstName")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("User name is required"),

  /* Checks for the second name to be valid format */
  check("lastName")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("Second Name is Required"),

  /* Checks for the password to be valid format */
  check("password")
    .notEmpty()
    .isStrongPassword()
    .isAlphanumeric()
    .withMessage("Password is required"),

  /* Checks for the first name to be valid format */
  check("birthdate")
    .isDate()
    .toDate(true)
    .notEmpty()
    .withMessage("Your birthdate is required"),

  /* Checks for the first name to be valid format */
  check("email")
    .custom(async (value) => {
      /* 
        This is a query to the the database to confirm the absence of the new email 
        If there's no such record then it means that we can proceed further and create an account.
      */
        const existingUser = await Users.findByEmail(value);
        if (existingUser) {
        // Will use the below as the error message
            throw new Error("A user already exists with this e-mail address");
        }
    })
    .normalizeEmail({ gmail_remove_dots: false })
    .isEmail()
    .notEmpty(),
];

/* This calss will contain all the refered method to the users, these methods are called controllers */
class userController {

  /* This method works in order to add a new user with the above validations */
  static async addUser(req, res){

    /* The pourpose of this variable is to know if the contente of the new user's input is correct */
    let err = validationResult(req);

    /* checke the variable */
    if (!err.isEmpty()) {
      /* In case it is invalid */
      res.send(errors.errors[0].msg);

    }else{
      /* In case it is valid the user will be added to the data base */
      let results = usersORM.create({
        firstName : req.body['firstName'],
        lastName  : req.body['lastName'],
        email     : req.body['email'],
        password  : req.body['password'],
        birthdate : req.body['birthdate']
      });

      /* Here we can know if the user was successfully added to the data base */
      if (results) {
        /* 
        In case it is correct the server will direct you to the home page 
        where is the main storage of your new user 
        */
        res.redirect('/home');
      } else {

        /* Other way the server will display an error meassage */
        res.send("Add user failed!! we are got some troubles with the server you might try some later.");
      }
    }
  }

  /* This method works in order to find a singular user depending on its email */
  static async getUserByEmail(req, res){
  }

  /* Here is the dessicion of the update methods to be usede */
  static async updateUser(req, res){
  }

  /* This method is suposed to update the password depending on the user's email */
  static async updateUserPassword(req, res){
  }

  /* This method is suposed to update the first name depending on the user's email */
  static async updateUserFirstName(req, res){
  }

  /* This method is suposed to update the second name depending on the user's email */
  static async updateUserSecondName(req, res){
  }

  /* This mehtod is suposed to update the birthdate depending on the user's email */
  static async updateUserBirthdate(req, res){
  }
}

module.exports = {
  validationRules,
  userController,
}