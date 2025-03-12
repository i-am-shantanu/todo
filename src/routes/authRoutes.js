const express = require("express")

const router = express.Router()

router.post("/api/auth/signup",()=>{console.log("signup")})      //user registration
router.post("/api/auth/login",()=>{console.log("login")})       //user login

module.exports=router;