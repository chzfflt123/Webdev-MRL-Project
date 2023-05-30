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



// start the server
app.listen(port, () => {
    console.log(`App server listening on ${port}`);
})

const query_select_symptom = `SELECT * FROM symptoms`;

app.get('/intro/riskconditions/confirmrisk/symptoms', (req, res, next) => {
    db.query(query_select_symptom, (error, results) => {
        if (DEBUG)
            console.log(error ? error : results);

        if (error)
            res.status(500).send(error);
        else if (results.length == 0)
            res.status(404).send(`No symptom found with id = "${1}"`);
        else {
            let data = { symptoms: results }; // Pass all the symptoms as an array
            res.render('symptoms', data);
        }
    });
});

// define a route for the default home page
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/signup", (req, res) => {
    res.sendFile("signup");
});
app.get("/abstract",(req,res)=>{
    res.sendFile("abstract");
});

app.get("/credits",(req,res)=>{
    res.sendFile("credits");
});

app.get("/ourteam",(req,res)=>{
    res.sendFile("ourteam");
});

app.get("/intro",(req,res)=>{
    res.sendFile("intro");
});

app.get("/intro/riskconditions",(req,res)=>{
    res.sendFile("riskconditions");
});

app.get("/intro/riskconditions/confirmrisk",(req,res)=>{
    res.sendFile("confirmrisk");
});


app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms", (req, res) => {
    res.render("confirmsymptoms");
});


app.get("/intro/riskconditions/confirmrisk/symptoms/confirmsymptoms/results",(req,res)=>{
    res.sendFile("results");
});

app.get("/database",(req,res)=>{
    res.sendFile("database");
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


