let config = require("./db_connection"); 

let sql = `SELECT * FROM symptoms`;
config.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

localStorage.setItem('symptoms', JSON.stringify(results));

config.end(); 