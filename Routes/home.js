const express=require("express");
const router=express.Router();
const homeController=require("../controller/home.js");

router.get("/", homeController);

module.exports=router;