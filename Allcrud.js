// listen            express 
//  connection        mongoose
// userSchema             mongoose
//  model exports            mongoose
// routing post get      express

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

// connection localhost
      mongoose.connect("mongodb://127.0.0.1:27017/adddata",{
         useNewUrlParser:true,   
         useUnifiedTopology:true,
      }).then(()=>{
         console.log("localhost connection succussfully ");
      }).catch((e)=>{
         console.log("connection failed");
      });

    
      //    userSchema 
              
    const  userSchema =    mongoose.Schema({
                name:{
                  type:String,
                  required:true
                   },
                   phone:{
                    type:Number,
                    required:true
                   },
                   email:{
                    type:String,
                    required:true
                   },                 
                   password:{
                    type:String,
                    required:true
                   }
      
                });


                // model 

                 const modell = new mongoose.model("Showdata",userSchema);

     


          // Routing 
           app.post("/user",async(req,res)=>{
                                  
                      try{
                      
                                      
            //       create collection      

            //    const collection = new modell({
            //     name:"bajarangdal",
            //     phone:1234567890,
            //     email:"bajarangdal@gmail.com",
            //     password:"bajarandal-password"   


            //   });

            //  in postman 
                const collection  = new modell(req.body);    
               
                //  async await data send 


                // const  senddata = await collection.save();
                // res.send("send data in database");
                //  console.log(senddata); 

               // Promise data send 
                  collection.save().then(()=>{
                    res.send(collection).status(201);
                  }).catch((e)=>{
                   console.log(e);
                  })



               // const promisereturn = await collection.save();
               //   console.log(promisereturn);

  
          
                      }catch(e){
                      throw e;
                      }
          
           
                });




//  listining port 
app.listen(port,()=>{
console.log("connected port no",port , "succssfully");
})

