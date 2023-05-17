// set up the server
const express = require("express");
const logger = require("morgan");
const app = express()
const port = 3031;


app.use(logger("dev"));
app.use(express.static(__dirname+'/public'));

// start the server
app.listen(port, () => {
    console.log(`App server listening on ${port}`);
})


// define a route for the default home page
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
});
app.get("/signup", (req, res) => {
    res.sendFile(__dirname+"/views/signup.html");
});
app.get("/abstract",(req,res)=>{
    res.sendFile(__dirname+"/views/abstract.html");
});

app.get("/credits",(req,res)=>{
    res.sendFile(__dirname+"/views/credits.html");
});

app.get("/ourteam",(req,res)=>{
    res.sendFile(__dirname+"/views/ourteam.html");
});

app.get("/intro",(req,res)=>{
    res.sendFile(__dirname+"/views/intro.html");
});

app.get("/intro/riskconditions",(req,res)=>{
    res.sendFile(__dirname+"/views/riskconditions.html");
});

app.get("/intro/riskconditions/confirmrisk",(req,res)=>{
    res.sendFile(__dirname+"/views/confirmrisk.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms",(req,res)=>{
    res.sendFile(__dirname+"/views/symptoms.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms",(req,res)=>{
    res.sendFile(__dirname+"/views/confirmsymptoms.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms/results",(req,res)=>{
    res.sendFile(__dirname+"/views/results.html");
});

app.get("/database",(req,res)=>{
    res.sendFile(__dirname+"/views/database.html");
});

app.get("/database/details",(req,res)=>{
    res.sendFile(__dirname+"/views/details.html");
});


// hi