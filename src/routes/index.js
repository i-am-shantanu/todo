const {Router} = require("express")
const authRoutes=require('./authRoutes')
const todoRoutes=require('./todoRoutes')

const router = Router();
router.use(authRoutes);
router.use(todoRoutes);

module.exports=router;

