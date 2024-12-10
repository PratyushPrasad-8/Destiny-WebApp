const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
        default:1
    },
    comment:{
        type:String,
        required:true,
        min:5,
        max:50
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

const Review = mongoose.model("Review",reviewSchema);
module.exports=Review;