const express = require("express");
require("./connection");
const app  = express();
const port = process.env.PORT || 3000 ;
const Student = require("./students");
app.use(express.json());



app.post('/students', async(req,res)=>{

//   const user =  new Student({
//     name:"ajinkya",
//     email:"ajaj@gmail.com",
//     phone:1005057892,
//   });

// console.log(user);


  // user.save().then(()=>{
  //  res.status(201).send(user);
  // }).catch((e)=>{
  // res.status(400).send(e);
  // })

try{

      const user  = new  Student(req.body);
      const  data =   await  user.save().status(200);
      console.log(data);
      res.send("this is api"); 
}catch(e){
      res.send(e).status(404);
 console.log(e);
}
  
  


  });
 


app.listen(port,()=>{
    console.log("port connected",port);
});