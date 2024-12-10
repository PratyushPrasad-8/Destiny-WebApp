const User=require("../models/User.js");

module.exports.rendersignupPage=(req, res)=>{
    res.render("Users/signup.ejs");
};

module.exports.signupUser=async(req, res, next)=>{
    try{
        const newUser=new User(req.body);
        await User.register(newUser,req.body.password);
        req.login(newUser,(e)=>{
            if(e){
                return next(e);
            }
            req.flash("success","Welcome to Destiny, a Perfect WebApp");
            res.redirect("/listings");
        });
    }catch(e){
        req.flash("failure","username already exists");
        res.redirect("/user/signup");
    }
};

module.exports.renderLoginPage=(req, res)=>{
    res.render("Users/login.ejs");
};

module.exports.loginUser=(req, res)=>{
    req.flash("success","Welcome Back to Destiny");
    res.redirect("/listings");
};

module.exports.logoutUser=async (req, res, next)=>{
    req.logout((e)=>{
        if(e){
            return next(e);
        }
        req.flash("success","Succesfully Logged out");
        res.redirect("/listings");
    });
};