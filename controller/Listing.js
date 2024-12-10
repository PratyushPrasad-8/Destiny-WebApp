const Listing=require("../models/Listing");

module.exports.index=async (req,res)=>{
    let allData = await Listing.find({});
    res.render("Listings/index.ejs",{allData})
};

module.exports.renderCreateForm=(req,res)=>{
    res.render("Listings/new.ejs");
};

module.exports.addListing=async(req,res)=>{
    let newListing = new Listing(req.body); 
    newListing.image={filename:req.file.filename,url:req.file.path};
    newListing.user=req.user;
    await newListing.save();
    req.flash("success","New Destiny Created");
    res.redirect("/listings");
};

module.exports.renderEditForm=async(req,res)=>{
    let data = await Listing.findById(req.params.id);
    data.image.url=data.image.url.replace("/upload","/upload/c_fill,w_200");
    res.render("Listings/edit.ejs",{data});
};

module.exports.editListing=async(req, res)=>{
    if(typeof(req.file) != "undefined"){
        req.body.image={filename:req.file.filename,url:req.file.path};
    }
    await Listing.findByIdAndUpdate(req.params.id, req.body);
    req.flash("success","Destiny Edited");
    res.redirect(`/listings/${req.params.id}`);
};

module.exports.renderShowForm=async (req,res)=>{
    let data = await Listing.findById(req.params.id).populate("reviews").populate("user");
    for(review of data.reviews){review = await review.populate("user");}
    res.render("Listings/show.ejs",{data});
};

module.exports.destroyListing=async(req,res)=>{ 
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success","Destiny deleted");
    res.redirect("/listings");
};

module.exports.likeIndex=async(req,res)=>{
    let allData = await Listing.find({like:true});
    res.render("Listings/index.ejs",{allData});
};

module.exports.interestIndex=async(req,res)=>{
    let allData = await Listing.find({interest:true});
    res.render("Listings/index.ejs",{allData});
};

module.exports.addLike=async(req,res)=>{
    const currList=await Listing.findById(req.params.id);
    currList.like=currList.like?false:true;
    await currList.save();
    res.redirect("/listings")
};

module.exports.addInterest=async(req,res)=>{
    const currList=await Listing.findById(req.params.id);
    currList.interest=currList.interest?false:true;
    await currList.save();
    res.redirect("/listings");
};

module.exports.searchIndex= async(req,res)=>{
    // const searchTerm = req.query.search;
    // const regex = new RegExp(`^${searchTerm}`, "i");
    // const results = await Listing.find({ title: regex });
    // console.log(results);
    // res.render("Listings/index.ejs",{results});
    let allData = await Listing.find({title:req.query.search});
    res.render("Listings/index.ejs",{allData});
};
