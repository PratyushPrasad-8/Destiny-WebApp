const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("../models/Review.js");

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        min:10,
        max:500
    },
    price:{
        required:true,
        type:Number,
        min:0
    },
    image:{
        filename:{
            type:String
        },
        url:{
            type:String,
            default:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",
            set: (v) => v==="" ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : v
        } 
    },
    location:{
        type:String
    },
    country:{
        type:String,
        required:true
    },
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    like:{
        type:Boolean,
        default:false
    },
    interest:{
        type:Boolean,
        default:false
    }
});

listingSchema.post("findOneAndDelete",async(list)=>{
    console.log(list);
    if(list){
        await Review.deleteMany({_id: {$in: list.reviews}});
    }
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;