var express = require('express');
var router = express.Router();

const {
  UsersController,
  validationRules,
  userController,
} = require("../controllers/userController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', destroyUsers,{});

router.get('/home', userController.);

module.exports = router;
