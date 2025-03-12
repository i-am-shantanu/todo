const express = require("express")
const {signup,login,logout}=require("../controller/authController")
const passport=require("../strategies/localStrategy")
const router = express.Router()

router.post("/api/auth/signup",signup);     //user registration
router.post("/api/auth/login",login);       //user login
router.post("/api/auth/logout",logout);
module.exports=router;