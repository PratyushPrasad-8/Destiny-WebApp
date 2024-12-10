const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js"); 
const {checkAuth}=require("../Middleware.js");
const {correctUserListing}=require("../Middleware.js");
const ListingController=require("../controller/Listing.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});
const Listing=require("../models/Listing.js");

router.route("/")
    .get(wrapAsync(ListingController.index)) 
    .post(upload.single("image"), checkAuth, wrapAsync(ListingController.addListing));

router.get("/new",checkAuth,ListingController.renderCreateForm);

router.get("/search", ListingController.searchIndex);

router.get("/like", ListingController.likeIndex);

router.get("/interest", ListingController.interestIndex);

router.route("/:id")
    .get(wrapAsync(ListingController.renderShowForm))
    .put(upload.single("image"), checkAuth, correctUserListing, wrapAsync(ListingController.editListing))
    .delete(checkAuth, correctUserListing, wrapAsync(ListingController.destroyListing));

router.get("/:id/edit", checkAuth, correctUserListing, wrapAsync(ListingController.renderEditForm));

router.get("/like/:id", ListingController.addLike);

router.get("/interest/:id", ListingController.addInterest);

module.exports=router;