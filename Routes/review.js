const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js"); 
const {checkAuth}=require("../Middleware.js");
const {correctUserReview}=require("../Middleware.js");
const ReviewController=require("../controller/review.js");

router.post("/", checkAuth, wrapAsync(ReviewController.addReview));

router.delete("/:rid", checkAuth, correctUserReview, wrapAsync(ReviewController.destroyReview));

module.exports=router;
