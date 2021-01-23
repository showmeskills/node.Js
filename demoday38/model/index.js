const db = require('./db.js');
let result = {
    code: '',
    msg: '',
    data:[]
}
class SafeRequest{
    constructor(){}
    //request data
    getData(){
        return db.query(`select * from t_book`)
    }
    //add data
     addData(opt){
         //console.log("opt===>",opt)
       return new Promise(async (resolve, reject) =>{
            try{
                let data = await db.query(`insert into t_book set?`,opt);
                if(data.affectedRows > 0){
                    result.code = 0;
                    result.msg = 'data adds successfully';
                    result.data = data;
                    resolve(result);
                }else{
                    result.code = 1;
                    result.msg = 'data adds failed';
                    result.data = data;
                    reject(result);
                }
            }catch(e){
                result.code = 1;
                result.msg = 'data adds failed';
                result.data = data;
                reject(result);
                console.log('catch the error in add data')
            }
       })
    }
    //get edit data
    getEditData(id){
        //console.log("id==>",id);
        return new Promise(async (resolve, reject)=>{
            try{
                let data = await db.query(`select * from t_book where id=?`,[id]);
                if(data.length > 0){
                    result.code = 0;
                    result.msg = 'data get edit data successfully';
                    result.data = data;
                    resolve(result);
                }else{
                    result.code = 1;
                    result.msg = 'data get edit data failed';
                    result.data = data;
                    reject(result);
                }
            }catch(e){
                result.code = 1;
                result.msg = 'data get edit data failed';
                result.data = data;
                reject(result);
                console.log(e)
            }
        })
    }
    //edit data
    editData(opt){
        console.log("opt==>",opt);
        return new Promise(async (resolve, reject)=>{
            try{
                let data = await db.query(`update t_book set name=?,author=?,category=?,description=? where id = ?`,[opt.name,opt.author,opt.category,opt.description,opt.id]);
                if(data.affectedRows > 0){
                    result.code = 0;
                    result.msg = 'data edits successfully';
                    result.data = data;
                    resolve(result);
                }else{
                    result.code = 1;
                    result.msg = 'data edits 555failed';
                    result.data = data;
                    reject(result);
                }
            }catch(e){
                result.code = 1;
                result.msg = 'data edits failed';
                result.data = data;
                reject(result);
                console.log('catch the error in edit data')
            }
        })
    }
    //delete data 
    deleteData(id){
        return new Promise(async(resolve, reject) =>{
            try{
                let data = await db.query(`delete from t_book where id=?`,[id]);
                if(data.affectedRows > 0){
                    result.code = 0;
                    result.msg = 'data delete successfully';
                    result.data = data;
                    resolve(result);
                }else{
                    result.code = 1;
                    result.msg = 'data delete 555failed';
                    result.data = data;
                    reject(result);
                }
            }catch(e){
                result.code = 1;
                result.msg = 'data edelete failed';
                result.data = data;
                reject(result);
                console.log('catch the error in delete data')
            }
        })
    }
}
module.exports = SafeRequest;