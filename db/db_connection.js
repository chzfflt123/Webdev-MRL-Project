const mysql = require('mysql2')

const dbConfig = {
    host: "<hostname>",
    port: 3306,
    user: "<username>",
    password: "<password>",
    database: "<schema>",
    connectionTimeout: 10000
}

const connection = mysql.createConnection(dbConfig);

module.exports = connection;

