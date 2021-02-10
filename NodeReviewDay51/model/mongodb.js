const MongoClient = require('mongodb').MongoClient;
const Config = require('./config.db.js');
//引入对应模块
const ObjectID = require('mongodb').ObjectID;
class Mongodb{
    //单例模式
    static getInstance(){
        if(!Mongodb.instance){
            Mongodb.instance = new Mongodb();
        }
        return Mongodb.instance
    }

    constructor(){
        console.log(`链接数据库.....`);
        this.connectdb();
        this.dbClient = '';
    }
    connectdb(){
        //Promise 接收到返回的值,为后期调用指的时候,可以使用async,await,then 解决异步代码问题
        return new Promise((resolve, reject) =>{
            //判断第一次有没有链接,如果么有链接的话,进行链接
            if(this.dbClient){
                //第一已经链接了,只需要进行调用即可
                resolve(this.dbClient)
            }else{
                MongoClient.connect(Config.DBurl,(err,client)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    this.dbClient = client.db(Config.namedb)
                    try{
                        //执行成功的时候返回对象
                        resolve(this.dbClient)                
                    }catch(e){
                        console.log(`数据库链接失败`,e)
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
            })
        })
    }

    //封装获取到ID的内容 (调用固定的写法用于获取_id值)
    getObjectId(id){
        return new ObjectID(id)
    }
}
//暴露出封装好的模块
module.exports = Mongodb.getInstance()

//let myDb = Mongodb.getInstance();

//时间方面需要错开,因为每次链接数据库时间是不同的
// setTimeout(()=>{
//     console.time('connectTime')
//     myDb.find('demo',{}).then((data)=>{
//         console.log(data);
//     });
//     console.timeEnd('connectTime')
// },3000)


// setTimeout(()=>{
//     console.time('connectTime1')
//     myDb.find('demo',{}).then((data)=>{
//         console.log(data);
//     });
//     console.timeEnd('connectTime1')
// },4000)

// console.time('connectTime')
// myDb.find('demo',{}).then((data)=>{
//     console.log(data);
// });
// console.timeEnd('connectTime')

