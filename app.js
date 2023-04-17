// set up the server
const express = require("express");
const app = express()
const port = 3000;

// define a route for the default home page
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

// start the server
app.listen(port, () => {
    console.log(`App server listening on ${port}`);
})

// define a route for the assignment list page 
app.get("/assignments",(req,res)=>{
    res.send("<h1>This is the assignments page</h1>");
})

// define a route for the assignment detail page 
app.get("/assignments/details",(req,res)=>{
    res.send("<h1>This is the assignment detail page</h1>");
})

