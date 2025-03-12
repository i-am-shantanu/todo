const passport = require("passport");
const {Strategy} = require("passport-local")
const {getUserById,getUserByUsername} = require("../models/authModel")


passport.serializeUser((user,done)=>{
    console.log("Inside serializeUser function");
    done(null,user.id);
})

passport.deserializeUser(async(id,done)=>{

    console.log("Inside deserializeUser function");
   try {
        const user = await getUserById(id);
        done(null,user);
    } catch (error) {
        done(error,null);
    }
})

passport.use(
    new Strategy(async(username,password,done)=>{
        console.log("inside verify function")
        try {
            const res = await getUserByUsername(username);
            if(res.length===0)
                throw new Error("Invalid Credential");
            const [user]=res;
            if(user.password!==password)
                throw new Error("Invalid Credential");
            done(null,user);

        } catch (error) {
            done(error,null,{message:error.message});
        }
    })
)

module.exports=passport;