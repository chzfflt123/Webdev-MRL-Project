const db = require("./db_connection");

/**** Delete *CONTENTS OF* existing tables (but not dropping tables themselves) ****/

const delete_patient_table_sql = "DELETE FROM patient;"

db.execute(delete_patient_table_sql);


/**** Create some sample subjects and assignments ****/

const insert_patient_sql = `
    INSERT INTO patient 
        (patient_id, age, dob, height, weight) 
    VALUES 
        (?, ?, ?, ?, ?);
`

db.execute(insert_patient_sql, [1, 14, 05-19-2008, "4", "100"]);

db.end();