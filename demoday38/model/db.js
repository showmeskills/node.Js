exports.query = (sql,data=null)=>{
    return new Promise((resolve,reject)=>{
        const mysql = require('mysql');

        const connection = mysql.createConnection({
            host: 'localhost',
            user:'root',
            password:'',
            database:'db_demo',
        });

        connection.connect();

        connection.query(sql,data,(err,result)=>{
            if(err){
                reject(err);
                console.log('the database is not connected');
                return;
            }
            resolve(result);
        })
    })
}