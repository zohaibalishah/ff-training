const express = require('express')
const router = express.Router();
const authController=require("../controller/authController")


// default req,req, next function passto  builtin in login
router.post("/login",authController.Login)
router.post("/signup",authController.SignUp)




module.exports = router;
