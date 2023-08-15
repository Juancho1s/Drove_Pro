const usersORM = require("../../models/fileORM");
const { check, validationResult } = require("express-validator");

const validationRules = [
    check("file")
    .notEmpty()
    .withMessage("It is require do upload a file")
];