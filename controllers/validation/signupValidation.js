const usersORM = require("../../models/userORM");
const { check, validationResult } = require("express-validator");

/* These are the validation rules which are going to be executed at the time of adding a new user. */
const validationRules = [
  /* Checks for the first name to be valid format */
  check("userName")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("User name is required")
    .trim(),

  /* Checks for the password to be valid format */
  check("password")
    .notEmpty()
    .isStrongPassword()
    .isAlphanumeric()
    .withMessage("Password is required"),

  /* Checks for the first name to be valid format */
  check("email")
    .custom(async (email) => {
      /* 
            This is a query to the the database to confirm the absence of the new email 
            If there's no such record then it means that we can proceed further and create an account.
          */
      var existingUser = await usersORM.findByEmail(email);
      if (existingUser) {
        // Will use the below as the error message
        throw new Error(
          "A user already is using the e-mail address you had introduced!!!"
        );
      }
    })
    .normalizeEmail({ gmail_remove_dots: false })
    .isEmail()
    .notEmpty()
    .trim(),
];

module.exports = {
  validationRules,
  validationResult,
};
