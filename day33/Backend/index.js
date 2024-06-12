const express=require("express");
const app=express();
const port=3000;

app.get("/register",(req,res)=>{
    let  {user,password}=req.query;
    res.send(`Standard GET Response ${user}`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/register",(req,res)=>{
    console.log(req.body);
    let  {user,password}=req.body;
    res.send(`Standard POST Response ${user}`);
});

app.listen(port,()=>{

    console.log(`Server started on port ${port}`);
});