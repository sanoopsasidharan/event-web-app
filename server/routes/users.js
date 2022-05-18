var express = require("express");
var router = express.Router();
const { userRegister } = require("../controller/user_Controller");

// creating user
// body name email number registerType
// return userCreated
router.post("/register", userRegister);

module.exports = router;
