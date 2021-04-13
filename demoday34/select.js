const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_demo',
    port:3306,
})

connection.connect();

connection.query(`select * FROM t_student`,(error, results, fields)=> {
    if (error) throw error;

    if(results.affectedRow==1){
        console.log('select all contents')
    };
    console.log(results);
   
    console.log(results[0].name);
  });



connection.end();