
const mongoose = require("mongoose")
const propertySchema = new mongoose.Schema({
url:{
   type:String,
  required:[true,"enter image url"]
},
house:{
    type:String,
   required:[true,"enter your username"]
 },
 owner:{
    type:String,
   required:[true,"enter your ownername"]
 },
 email:{
    type:String,
   required:[true,"enter your email "]
 },
 price:{
   type:Number,
  required:[true,"enter your price"]
},
 number:{
    type:Number,
   required:[true,"enter your number"]
 },
 discription:{
    type:String,
    required:[true,"descrive your property"]
 }
})
const propertyCollection =mongoose.model("property",propertySchema);
module.exports=propertyCollection