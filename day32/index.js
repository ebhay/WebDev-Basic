const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

//Now We Will Access data from data base
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    const instadata = require("./data.json");
    let data = instadata[username];
    if (data) {
        res.render("instagram.ejs", { data: data });
    }
    else {
        res.send("User Not Found");
    }
});

/*
app.get("/ig/:username/:verify", (req, res) => {
    let { username }= req.params;
    let { verify } = req.params;
    let followers=["Abhinash","Vikram","Shivam"];
    res.render("insta.ejs", { uid: username
        , verify:verify , followers: followers
     });
});*/

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let roll = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num: roll });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
