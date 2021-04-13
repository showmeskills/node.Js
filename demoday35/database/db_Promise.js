exports.query = (sql,data=null)=>{
    
    return new Promise((resolve,reject)=>{
        const mysql = require('mysql');

        const connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'', 
            database:'db_demo'
        })

        connection.connect();

        connection.query(sql,data, (error,results)=>{
            if(error){
                console.log('you have not connected to database');
                reject(error);
                return;
            }
            resolve(results);
        })
    })
}