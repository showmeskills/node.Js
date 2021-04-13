const MongoClient = require('mongodb').MongoClient;
const Config = require('../config/index.js');
const ObjectID = require('mongodb').ObjectID;
class Mongodb{
    static getInstance(){
        if(!Mongodb.instance){
            Mongodb.instance = new Mongodb();
        }
        return Mongodb.instance
    }

    constructor(){
        console.log(`database is connect.....`);
        this.connectdb();
        this.dbClient = '';
    }
    connectdb(){
        return new Promise((resolve, reject) =>{
            if(this.dbClient){
                resolve(this.dbClient)
            }else{
                MongoClient.connect(Config.DBurl,(err,client)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    this.dbClient = client.db(Config.namedb)
                    try{
                        resolve(this.dbClient)                
                    }catch(e){
                        console.log(`database is inconnected`,e)
                    }
                })
            }
        })
    };

    find(collectionName,json){
        return new Promise((resolve, reject)=>{
            this.connectdb().then(db=>{
                let result = db.collection(collectionName).find(json)
                result.toArray((err,doc)=>{
                    if(err){
                        reject(err)
                        return;
                    }
                    resolve(doc)
                })
                db.close();
            })
        })
    };
    insert(collectionName,json){
        return new Promise((resolve, reject)=>{
            this.connectdb().then(db=>{
                db.collection(collectionName).insertOne(json,(err,result)=>{
                    if(err){
                        reject(err)
                        return;
                    }
                    resolve(result)
                })
                db.close();
            })
        })
    };
    
    update(collectionName,jsonOld,jsonNew){
        return new Promise((resolve, reject)=>{
            this.connectdb().then(db=>{
                db.collection(collectionName).updateOne(jsonOld,{
                    $set:jsonNew
                },(err,result)=>{
                    if(err){
                        reject(err)
                        return;
                    }
                    resolve(result)
                })
                db.close();
            })
        })
    };

    delete(collectionName,json){
        return new Promise((resolve, reject)=>{
            this.connectdb().then(db=>{
                db.collection(collectionName).deleteOne(json,(err,result)=>{
                    if(err){
                        reject(err)
                        return;
                    }
                    resolve(result)
                })
                db.close();
            })
        })
    }
    getObjectId(id){
        return new ObjectID(id)
    }
}
module.exports = Mongodb.getInstance()