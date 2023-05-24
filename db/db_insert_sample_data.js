const db = require("./db_connection");

const insert_symptom_sql = `
    INSERT INTO symptoms 
        (symptom_id, name) 
    VALUES 
        (?, ?);
`

db.execute(insert_symptom_sql, ['1657849302', 'Comp Sci']);