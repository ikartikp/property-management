const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/database1")
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
     console.log( message.err);
   })