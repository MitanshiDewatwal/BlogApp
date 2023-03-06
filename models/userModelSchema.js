const mongoose = require('mongoose')
const userModelSchema = new mongoose.Schema({
    userName : {
        type:String,
        required:true,
    },
    userEmail : {
        type: String,
        required:true,
    },
    password : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    phoneNo : {
        type : Number,
        required : true,
    },
    profilePic : {
       type : String,
    
   },
    isActive : {
        type : Boolean,
        required : true,
        default : true,
    },
})
userModelSchema.set('timestamps',true)
module.exports=mongoose.model('user',userModelSchema)
