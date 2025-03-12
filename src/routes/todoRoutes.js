const express = require("express")

const router = express.Router()

router.get("/api/todos",()=>{console.log("get all todos")})         //gets all todos
router.get("/api/todos/:id",()=>{console.log("single todo")})     //get a single todo by id 
router.post("/api/todos",()=>{})        // add a new todo
router.patch("/api/todo",()=>{})        //edit a todo
router.delete("/api/todo/:id",()=>{})   //delete a single todo by id
router.delete("/api/todo",()=>{})       //delete all todos

module.exports=router;
