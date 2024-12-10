const Listing = require("./models/Listing.js");
const Review = require("./models/Review.js");

module.exports.checkAuth = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.flash("failure","You must be logged in First");
        res.redirect("/user/login");
    }else{
        next();
    }
};

module.exports.correctUserListing=async(req, res, next)=>{
    let currList= await Listing.findById(req.params.id);
    if(!currList.user.equals(req.user._id)){
        req.flash("failure","Unauthorized access");
        res.redirect(`/listings/${req.params.id}`);
    }else{
        next();
    }
}

module.exports.correctUserReview=async(req, res, next)=>{
    let currReview= await Review.findById(req.params.rid); 

    if(!currReview.user.equals(req.user._id)){
        req.flash("failure","Unauthorized access");
        res.redirect(`/listings/${req.params.id}`);
    }else{
        next();
    }
}