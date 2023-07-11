const usersORM = require("../models/userORM");
const { check, validationResult } = require("express-validator");

const validationRules = [
  check("firstName")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("User name is required"),
  check("secondName")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("Second Name is Required"),
  check("password")
    .notEmpty()
    .isStrongPassword()
    .isAlphanumeric()
    .withMessage("Password is required"),
  check("birthdate")
    .isDate()
    .toDate(true)
    .notEmpty()
    .withMessage("Your birthdate is required"),
  check("email")
    .custom(async (value) => {
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
