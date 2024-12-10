const mongoose = require("mongoose");
const Listing = require("../../Destiny/models/Listing.js");
const initData = require("../init/data.js");

const mongoURL="mongodb://127.0.0.1:27017/Destiny";

main().then(()=>{
    console.log("Connecting to database is successful!");
}).catch((e)=>{
    console.log(e);
});
async function main(){
    await mongoose.connect(mongoURL);
};

let init = async() =>{
    await Listing.deleteMany({});
    for(data of initData.data){
        data.user="67503225025dc616114076da";
        data.like=false;
    }
    await Listing.insertMany(initData.data);
}

init();