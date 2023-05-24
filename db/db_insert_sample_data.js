const db = require("./db_connection");

const insert_symptom_sql = `
    INSERT INTO symptoms 
        (symptom_id, name) 
    VALUES 
        (?, ?);
`

db.execute(insert_symptom_sql, [123456789, 'Comp Sci']);
