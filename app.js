//npx nodemon -e js,ejs,sql,env app.js
//npm run start
//npm run devstart

// set up the server
const express = require("express");
const logger = require("morgan");
const app = express()
const port = 3031;
const DEBUG = true;
const db = require("./db/db_connection");

// Configure Express to use EJS
app.set( "views",  __dirname + "/views");
app.set( "view engine", "ejs" );

app.use(logger("dev"));
app.use(express.static(__dirname+'/public'));

const query_select_symptom = `SELECT * FROM symptoms`;

app.get('/symptoms/:id', (req, res, next) => {
    db.execute(query_select_symptom, [req.params.id], (error, results) => {
        if(DEBUG)
            console.log(error ? error : results);
        
        if(error)
            res.status(500).send(error);
        else if (results.length == 0)
            res.status(404).send(`No assignment found with id = "${req.params.id}"` ); // NOT FOUND
        else
            res.send(results[0]);
    });
});


// start the server
app.listen(port, () => {
    console.log(`App server listening on ${port}`);
})

const read_symptoms_all_sql = 'SELECT * FROM symptoms';
app.get("/intro/riskconditions/confirmrisk/symptoms",(req,res)=>{
    
    db.execute(read_symptoms_all_sql, (error, results) => {
        if (DEBUG)
            console.log(error ? error : results);
        if (error)
            res.status(500).send(error); //Internal Server Error
        else if (results.length == 0)
            res.status(404).send(`No assignment found with id = "${req.params.id}"` ); // NOT FOUND    
        else
            res.send(results);
    });
});


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


app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms",(req,res)=>{
    res.sendFile(__dirname+"/views/confirmsymptoms.html");
});

app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms/results",(req,res)=>{
    res.sendFile(__dirname+"/views/results.html");
});

app.get("/database",(req,res)=>{
    res.sendFile(__dirname+"/views/database.html");
});


const database_detail_sql = `
    SELECT * from patient
`

app.get("/database/:id",(req,res,next)=>{
    db.execute(database_detail_sql, [res.params.id], (error, results) => {
        if (DEBUG)
            console.log(error ? error : results);
        if (error)
            res.status(500).send(error)
        else if (results.length == 0)
            res.status(404).send(`No assignment found with id = "${req.params.id}"` ); // NOT FOUND
        else   
            res.send(results[0]);
    })
});


