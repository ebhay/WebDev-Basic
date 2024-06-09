const express=require("express");
const app=express();
const port=3000;

app.get("/register",(req,res)=>{
    let  {user,password}=req.query;
    res.send(`Standard GET Response ${user}`);
});


app.post("/register",(req,res)=>{
    let  {user,pass}=req.query;
    res.send(`Standard POST Response ${user}`);
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});