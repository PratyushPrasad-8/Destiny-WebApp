const express=require("express");
const router=express.Router();
const passport=require("passport");
const UserController=require("../controller/User.js");

router.route("/signup")
    .get(UserController.rendersignupPage)
    .post(UserController.signupUser);

router.route("/login")
    .get(UserController.renderLoginPage)
    .post(passport.authenticate("local",{ 
        failureFlash:true,
        failureRedirect:"/user/login"
    }),UserController.loginUser);

router.get("/logout",UserController.logoutUser);

module.exports=router;