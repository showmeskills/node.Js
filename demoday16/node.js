const http = require('http');
const app = require('./model/express.route');
const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;
const DBurl = 'mongodb://localhost:27017/demodb';
const url = require('url')
const fs = require('fs')
const path = require('path')
http.createServer(app).listen(8080,()=>{console.log('Server is listening')})




app.get('/',(req,res)=>{
    let pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        fs.readFile(path.join(__dirname,'view','index.html'),(err,data)=>{
            if(err){
                console.log('there is an error')
            }
            res.write(data)
            res.end();
        })
    }
    
})

app.get('/add',(req,res)=>{
    mongodbClient.connect(DBurl,(err,db)=>{
        if(err){
            console.log(err);
            console.log('connect database is failed');
            return;
        }
        db.collection('demodb').insertOne({
            "name":"Terrance",
            "age":100,
        },(err,data)=>{
            if(err){
                console.log('data has not added');
                return;
            }
            res.send('data has been added');
            db.close();
        })
    })
     
})

app.get('/update',(req,res)=>{
    mongodbClient.connect(DBurl,(err,db)=>{
        if(err){
            console.log(err);
            console.log('connect database is failed');
            return;
        }
        db.collection('demodb').updateOne({
            "name":"Terrance"},
            {$set:{"age":150},
        },(err,data)=>{
            if(err){
                console.log('update has not added');
                return;
            }
            res.send('update has been added');
            db.close();
        })
    })
     
})

app.get('/delete',(req,res)=>{
    
    let query = url.parse(req.url,true).query;
    let name = query.name;
    mongodb.MongoClient.connect(DBurl,function(err,db){
        if(err){
            console.log(err);
            console.log('connect database is failed');
            return;
        }
        db.collection('demodb').deleteOne({
            'name':name,
        },(err,data)=>{
            if(err){
                console.log('delete database is failed');
                return;
            }
            res.send('delete is completed');
            db.close();
        })
    })
     
})