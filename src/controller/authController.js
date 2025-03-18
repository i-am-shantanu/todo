const {addUser,getUserByUsername} = require("../models/authModel")
const passport = require("passport")

exports.signup = async(req,res) =>{
    console.log("inside signup controller");

    try {
        await addUser(req.body);
        const user=await getUserByUsername(req.body.username);
        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        return res.status(409).send({message:"username already taken"})
    }
}
exports.login = async(req,res,next)=>{
    passport.authenticate("local",(error,user,info)=>{
        if(error){
            console.log(error);
            return res.status(500).json({message:"Internal server error"})
        }
        else if (!user)
        return res.status(401).json({message:info.message || "Authentication Failed"})

        req.login(user,(err)=>{
            if(err) console.log(err)
            return res.status(200).json({message:"login successfull",user})
        })
    })(req,res,next);   //iife
}

exports.logout = async(req,res)=>{
    if(!req.user)
        return res.status(401).send({message:"unauthorized"});
    req.logout((error)=>{
        if(error)
            console.log(error)
        req.session.destroy((error)=>{
            if(error)
                console.log(error);
            res.clearCookie("connect.sid");
            res.status(200).send({message:"logged Out successfully !"});

        })
    })
}