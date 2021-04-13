const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_demo',
    port:3306
})

connection.connect();

let data = {
    name: 'haha',
    birthdate:'1995-01-01',
    gender:'1',
    class_id:'2',
}

connection.query('insert into t_student set?',data, (error,results) => {
    if(error) {
        console.log('there are something wrong');
    }
    if(results.affectedRow == 1){
        console.log('insert has been successfully')
    }
    console.log(results)
})

connection.end();