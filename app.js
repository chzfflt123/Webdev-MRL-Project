// set up the server
const express = require("express");
const app = express()
const port = 3000;

// define a route for the default home page
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});
app.get("/abstract",(req,res)=>{
    res.sendFile(__dirname+"/abstract.html");
});

app.get("/credits",(req,res)=>{
    res.sendFile(__dirname+"/credits.html");
});

app.get("/intro",(req,res)=>{
    res.sendFile(__dirname+"/intro.html");
});

app.get("/intro/riskconditions",(req,res)=>{
    res.sendFile(__dirname+"/riskconditions.html");
});

app.get("/intro/riskconditions/confirmrisk",(req,res)=>{
    res.sendFile(__dirname+"/confirmrisk.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms",(req,res)=>{
    res.sendFile(__dirname+"/symptoms.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms",(req,res)=>{
    res.sendFile(__dirname+"/contirmsymptoms.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms/results",(req,res)=>{
    res.sendFile(__dirname+"/results.html");
});







// start the server
app.listen(port, () => {
    console.log(`App server listening on ${port}`);
})
