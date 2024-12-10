if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const dbURL=process.env.ATLASDB_URL;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodoverride=require("method-override");
const ejsMate = require("ejs-mate");

const listingRouter=require("./Routes/listing.js");
const reviewRouter=require("./Routes/review.js");
const userRouter=require("./Routes/User.js");
const homeRouter=require("./Routes/home.js");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/User.js");

app.use(express.static(path.join(__dirname,"public")));
app.engine('ejs', ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodoverride('_method'));

const store=MongoStore.create({
    mongoUrl:dbURL,
    crypto:{
        secret:process.env.SESSION_SECRET
    },
    touchAfter:24*60*60
});

store.on("error",()=>{
    console.log("Error in Mongo store",err);
});

const sessionOptions={
    store,
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 1* 24* 60* 60* 1000,
        maxAge:1* 24* 60* 60* 1000,
        httpOnly:true
    }
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//---------------------Server----------------------
app.get("/",(req, res)=>{
    res.redirect("/listings");
});

app.listen(8080,()=>{
    console.log(`Listening at port 8080`);
});

//-------------------Middlewares-----------------
app.use("/",(req, res, next)=>{
    res.locals.success=req.flash("success");
    res.locals.failure=req.flash("failure");
    res.locals.currUser=req.user;
    next();
});

//-------------Routers and Requests---------------
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/user", userRouter);
app.use("/home", homeRouter);

app.get("/about",(req, res)=>{
    res.render("Others/about.ejs");
});

app.get("/contact", (req, res)=>{
    res.render("Others/contact.ejs");
});
//-----------------Error handling------------------
app.all("*",(req, res, next)=>{
    res.render("Others/pageNotFound");
});

app.use((err, req, res, next)=>{
    res.render("Others/error.ejs");
});

//-------database and server connection------------ 
// const mongoURL="mongodb://127.0.0.1:27017/Destiny";    
main().then(()=>{
    console.log("Connection with Database established successfully!");
}).catch((e)=>{
    console.log(e);
})
async function main(){
    await mongoose.connect(dbURL);
}


