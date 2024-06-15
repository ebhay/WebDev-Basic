const express =require("express");
const app= express();

const port=8080;
const path=require("path");

//POST Sided data ko samjh pai 
app.use(express.urlencoded({extended :true}));
//Connected Views folder for ejs template  folder
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//public folder for comman resources used by ejs
app.use(express.static(path.join(__dirname,"public")));
//Port Listener activator
app.listen(port,()=>{
    console.log("Server is running on port "+port);
});

const shortid = require('shortid'); 

//Starting With Routes
let post = [
  
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs", {posts : post});
;});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
;});

// Route to get a specific post by ID
app.get('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let postde = post.find((p) => p.id === postId);

    if (postde) {
        res.render("view.ejs", { post: postde });
    } else {
        res.status(404).send("Post not found");
    }
});

// Route Edit post by ID
app.get('/posts/:id/edit', (req, res) => {
    let postId = req.params.id;
    let postde = post.find((p) => p.id === postId);
    res.render("edit.ejs", { post: postde });
});
app.post('/posts/:id/edit', (req, res) => {
    let postId = req.params.id;
    // Assuming 'post' is your array or database collection
    let postde = post.find((p) => p.id === postId);
    
    // Update the post content based on form submission
    postde.content = {
        title: req.body.title,
        description: req.body.description
    };

    // Redirect to the posts page after editing
    res.redirect('/posts');
});

app.post('/posts', (req, res) => {
    console.log(req.body); // Log the entire body to debug
    
    let newPost = {
        id: shortid.generate(), // Generate unique ID for new post
        username: req.body.username,
        content: {
            title: req.body.title,
            description: req.body.description
        }
    };
    post.push(newPost);
    res.redirect('/posts');
    console.log(post);
});