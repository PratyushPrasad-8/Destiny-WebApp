const Review=require("../models/Review.js");
const Listing=require("../models/Listing.js");

module.exports.addReview=async(req,res)=>{   
    let newReview=new Review(req.body);
    newReview.user=req.user;
    let currList= await Listing.findById(req.params.id);
    currList.reviews.push(newReview);
    await newReview.save();
    await currList.save();  
    req.flash("success","New Review Created");
    res.redirect(`/listings/${req.params.id}`);
};

module.exports.destroyReview=async(req, res)=>{    
    let {id, rid}=req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {Review,rid}});
    await Review.findByIdAndDelete(rid);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${req.params.id}`);
};