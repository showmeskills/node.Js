const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_demo',
    port:3306
})

connection.connect();

let data = ['Erick','1995-06-30',13]

connection.query('update t_student set name = ?, birthdate = ? where id = ?',data, (error,results) => {
    if(error) {
        console.log('there are something wrong');
    }
    if(results.affectedRow == 1){
        console.log('update has been successfully')
    }
    console.log(results)
})

connection.end();