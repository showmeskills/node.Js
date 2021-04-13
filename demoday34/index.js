const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'db_demo', 
    port:3306
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields)=> {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

connection.end();