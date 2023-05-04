const db = require("./db_connection")

db.execute('SELECT 1 + 1 AS solution', (erorr, results) => {
    if (error) throw error;
    console.log(results);
})

db.end();

//terminal > node db/db_test.js