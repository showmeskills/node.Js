const db = require('./db.js');
let result = {
    code:0,
    message:'',
    data:[]
}
class SafeRequest{
    constructor(){}
    //get book data
    getData(){
        return db.query(`select * from t_book`)
    };
    //add book
    async addData(opt){
        try{
            let data = await db.query(`insert into t_book set?`,opt)
            if(data.affectedRows > 0){
                result.message = 'add successfully'
                return Promise.resolve(result)
               }else{
                result.message = 'add fail'
                result.code = 1;
                return Promise.reject(result)
               }
        }catch(e){
            result.message = 'add failed'
            result.code = 1;
            result.status = 500;
            return Promise.reject(result)
        }
    }
    //get ready edit book
    async getEditData(id){
        try{
            let data = await db.query(`select * from t_book where id= ?`,[id]);
            //console.log(data);//获取的是数组
            if(data.length > 0){
             result.message = 'get book'
             result.data = data[0]
             return Promise.resolve(result)
            }else{
             result.message = 'can not get book'
             result.code = 1;
             return Promise.reject(result)
            }
            //console.log(data)
        }catch(e){
          //console.log(err)
          result.message = 'can not get book'
          result.code = 1;
          result.status = 500;
          return Promise.reject(result)
        }
    }
    //edit book
    async editData(opt){
        try{
            let data = await db.query(`update t_book set name=?,author=?,category=?,description=? where id=?`,[opt.name,opt.author,opt.category,opt.description,opt.id]);
            //console.log(data);//获取的是数组
            if(data.affectedRows > 0){
                result.message = 'edit successfully'
                return Promise.resolve(result)
                }else{
                result.message = 'edit failed'
                result.code = 1;
                return Promise.reject(result)
                }
            //console.log(data)
        }catch(e){
          //console.log(err)
          result.message = 'edit failed'
          result.code = 1;
          result.status = 500;
          return Promise.reject(result)
        }
    }
    //delete data
    async deleteData(id){
        try{
            let data = await db.query(`delete from t_book where id=?`,[id]);
            //console.log(data);//获取的是数组
            if(data.affectedRows > 0){
                result.message = 'delete successfully'
                return Promise.resolve(result)
                }else{
                result.message = 'delete failed'
                result.code = 1;
                return Promise.reject(result)
                }
            //console.log(data)
        }catch(e){
          //console.log(err)
          result.message = 'delete failed'
          result.code = 1;
          result.status = 500;
          return Promise.reject(result)
        }
    }
    async loginIn(name,pass){
        try {
            let data = await db.query(`SELECT * FROM t_user WHERE name=? AND pass=? `, [name,pass]);   
            if(data.length > 0){
                result.message = 'login successfully'
                result.data =data;
                return Promise.resolve(result)
                }else{
                result.message = 'login failed';
                result.data =data;
                result.code = 1;
                return Promise.reject(result)
                }
            //console.log(data)
        }catch(e){
          //console.log(err)
          result.message = 'login failed'
          result.code = 1;
          result.status = 500;
          return Promise.reject(result)
        }
    }
    async reg(name,pass){
        try{
            let data = await db.query(`insert into t_user set?`,{
                name,
                pass,
            })
            if(data.affectedRows){
                result.message = 'you have been registered successfully'
                result.code = 0;
                result.data = data;
                return Promise.resolve(result)
            }
        }catch(e){
            result.message = 'you have not registered please try again later'
            result.code = 1;
            console.log(e)
            return Promise.reject(result)
        }
    }
}

module.exports = SafeRequest