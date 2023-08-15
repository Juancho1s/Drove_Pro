const usersORM = require("../../models/folderORM");
const { check, validationResult } = require("express-validator");

const validationRules = [
    check("folder")
    .notEmpty()
    .withMessage("It is require do upload a folder")
];