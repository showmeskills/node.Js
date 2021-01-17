const db = require('../database/db_Promise.js');
let result = {
    code:null,
    msg:'',
    data:[],
}
class indexController{
    constructor(){}

    login(){
        return async (ctx,next) =>{
            let name = ctx.request.body.name;
            let pwd = ctx.request.body.pass;
           try{
                let data = await db.query(`select * from t_user where name=? and pass=?`,[name,pwd]);

                if(data.length > 0){
                    result.code = 0;
                    result.msg = 'you have been logined';
                    result.data = data;
                    ctx.body = result;
                }else{
                    result.code = 1;
                    result.msg = 'your account or password is incorrect';
                    ctx.body = result;        
                }
           }catch(e){
            console.log(e)
            result.code = 1;
            result.msg = 'error code : 1';
           }
        }
    };

    register(){
        return async (ctx,next) =>{
            console.log(ctx.request.body)
            try{
                let data = await db.query(`insert into t_user set?`,{
                    name:ctx.request.body.name,
                    pass:ctx.request.body.pass
                })
                if(data.affectedRows){
                    result.message = 'you have been registered successfully'
                    result.code = 0;
                    result.data = data;
                    ctx.body = result
                }
            }catch(e){
                result.message = 'you have not registered please try again later'
                result.code = 1;
                ctx.body = result;
                console.log(e)
            }
        }
    }
}

module.exports = indexController;