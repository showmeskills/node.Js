exports.query = (sql,data=null)=>{

    return new Promise((resolve,reject)=>{
        const mysql = require('mysql');
        
        const connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'db_demo'
        });
    
        connection.connect();
        
        connection.query(sql,data,function (error, results, fields) {
            if(error){
              reject();
              return;
            }
            resolve(results);
        });  
        connection.end();      
    })
    
}