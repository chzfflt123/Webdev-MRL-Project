const db=require("./db_connection");

const drop_patient_table_sql = "DROP TABLE IF EXISTS patient;"

db.execute(drop_patient_table_sql);

const create_patient_table_sql = `
    CREATE TABLE patient (
        patient_id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        PRIMARY KEY (patient_id));
`
db.execute(create_patient_table_sql);

db.end();