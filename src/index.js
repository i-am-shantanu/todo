const express=require("express")
const pool=require("./configuraton/database")
require("dotenv").config()

const PORT=process.env.PORT || 5000

const app=express()
app.use(express.json())

pool.getConnection()
.then((con)=>{
    console.log("Database connected successfully !");
    con.release();
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    });
})
.catch((err)=>console.log("Database connection error :",err))
