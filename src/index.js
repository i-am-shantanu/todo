const express=require("express")
const pool=require("./configuraton/database")
const session = require("express-session")
const router = require('./routes/index')
const passport = require("passport")
require("dotenv").config()

const PORT=process.env.PORT || 5000

const app=express()
app.use(express.json())
app.use(session({
    secret:'ENCRYPT',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:60000*60
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(router)

pool.getConnection()
.then((con)=>{
    console.log("Database connected successfully !");
    con.release();
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    });
})
.catch((err)=>console.log("Database connection error :",err))
