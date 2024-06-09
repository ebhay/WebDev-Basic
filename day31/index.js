const express=require("express");
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});
//How to Send Request
/*
app.use((req,res)=>{
    
    res.send({
        name:"John",
        age:30,
    });
    res.send("<h1>Hello Guys</h1>");
    console.log("Hello World");
});
*/
app.use(express.static(__dirname + '/public'));

app.get('/:username/:id', (req, res) => {
    console.log(req.params);
    res.send(`Hello UserID: ${req.params.username}<br> Status: ${req.params.id} <br><img src="/image">`);
    
  });
/*
app.get("/",(req,res)=>{
    console.log("Home Page");
   res.send("Home Page") ;
});
app.get("/apple",(req,res)=>{
    res.send("Apple Page");
});
//Query Search
app.get("/search",(req,res)=>{
    let q=req.query;  
    res.send(`Query Request for ${q[0]}`);
});*/