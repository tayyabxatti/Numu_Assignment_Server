const express= require("express");
const mysqlConnection=require("../connection");

const router=express.Router();

//get all users
router.get("/all_users",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  mysqlConnection.query("SELECT * from users",(err,rows,fields)=>{
    if(!err){
      res.send(rows);
    }else{
      console.log(err);
    }
  })
});

//specific user 
router.get("/users/:id",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  mysqlConnection.query("SELECT * FROM users where userId=?",[req.params.id],(err,rows,fields)=>{
    if(!err){
      res.send(rows);
    }else{
      console.log(err);
    }
  })
});



//remove specific user
router.post("/remove_user/:id",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  mysqlConnection.query("DELETE users where userId=?",[req.params.id],(err,rows,fields)=>{
    if(!err){
      res.send("User Removed Successfully");
    }else{
      console.log(err);
    }
  })
});

//specific user hobbies
router.get("/user_hobbies/:id",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  mysqlConnection.query("SELECT * FROM hobbies where userId=?",[req.params.id],(err,rows,fields)=>{
    if(!err){
      res.send(rows);
    }else{
      console.log(err);
    }
  })
});


//remove specific user
router.post("/remove_hobby/:id",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  mysqlConnection.query("DELETE from hobbies where HobbyId=?",[req.params.id],(err,rows,fields)=>{
    if(!err){
      res.send("Hobby Removed Successfully");
    }else{
      console.log(err);
    }
  })
});

//add user 
router.post("/add_user",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  var req=req.body;
  mysqlConnection.query("INSERT INTO users (UserName) VALUES (?)",[req.UserName],(err,rows,fields)=>{
    if(!err){
      
      res.send("User Inserted Successfully");
    }else{
      console.log(err);
    }
  });
});

//add specific user hobbies 
router.post("/add_hobbies",(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  var req=req.body;
  mysqlConnection.query("INSERT INTO hobbies (HobbyName,Passion,Hobby_Year,UserId) VALUES (?,?,?,?)",[req.HobbyName,req.Passion,req.HobbyYear,req.UserId],(err,rows,fields)=>{
    if(!err){
      res.send("Hobby Inserted Successfully");
    }else{
      console.log(err);
    }
  });
});



//get all users done
//add user done
//get specific user hobbies done
//add specific user hobbies done
//delete specific user hobbies done

module.exports=router;