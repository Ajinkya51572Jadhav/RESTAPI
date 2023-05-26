const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
   {
    name:{
      type:String,
       required:true
    },
     email:{
      type:String,
      required:true
      
     },
     phone:{
        type:Number,
        required:true,
        }
    
    }
    );

 const Student  = new mongoose.model("Student",UserSchema);   


    module.exports = Student;

