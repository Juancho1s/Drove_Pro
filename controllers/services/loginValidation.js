const usersORM = require("../../models/userORM");
const { check, validationResult } = require("express-validator");

/* These are the validation rules which are going to be executed at the time of adding a new user. */
const validationRules = [
  /* Checks for the first name to be valid format */
  check("userName")
  .notEmpty()
  .withMessage("User name is required")
  .trim(),

  /* Checks for the password to be valid format */
  check("password")
  .notEmpty()
  .withMessage("Password is required"),

  /* Checks for the first name to be valid format */
  check("email")
  .trim()
  .isEmail()
  .notEmpty(),
];

module.exports = {
  validationRules,
  validationResult,
};
