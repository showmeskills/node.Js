const { connect } = require('http2');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_demo',
    port:3306
})

connection.connect();
let data = [12];
connection.query('delete from t_student where id = ?',data,(error, results)=>{
    if(error){
        console.log('there are some errors')
    }
    if(results.affectedRows == 1){
        console.log('you have been deleted successfully')
    }
    console.log(results)
})

connection.end()