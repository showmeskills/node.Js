const SafeRequest = require('../model/index');
const safeRequest = new SafeRequest();
class IndexController{
    constructor(){}
    //get data from database
    homePage(){
        return async(ctx)=>{
            let data = await safeRequest.getData()
            ctx.body = data;
        }
    }
    // add a new book
    actionAdd(){
        return async(ctx)=>{
            try{
                let msg = await safeRequest.addData(ctx.request.body)
                console.log("msg==>",msg)
                if(msg.code === 0){
                    ctx.body = msg;
                }else{
                    ctx.body = 'data has not been added'
                }
            }catch(e){
                console.log(e);
            }
        }
    }
    //get a book that is ready to edit
    actionEditPage(){
        return async(ctx)=>{
            let id = ctx.params.id
            console.log("CTXid==>",id)
            try{
                let msg = await safeRequest.getEditData(id)
                console.log("msg==>",msg)
                if(msg.code === 0){
                    ctx.body = msg;
                }else{
                    ctx.body = 'data has not been got'
                }
            }catch(e){
                console.log(e)
            }
        }
    }
    //edit book
    actionEdit(){
        return async(ctx)=>{
            let data = ctx.request.body
            try{
                let msg = await safeRequest.editData(data)
                console.log("msg==>",msg)
                if(msg.code === 0){
                    ctx.body = msg;
                }else{
                    ctx.body = 'data has not been edited'
                }
            }catch(e){
                console.log(e)
            }
        }
    }
    //delete book
    actionDelete(){
        return async(ctx)=>{
            let id = ctx.params.id
            try{
                let msg = await safeRequest.deleteData(id);
                console.log("msg==>",msg)
                if(msg.code === 0){
                    ctx.body = msg;
                }else{
                    ctx.body = 'data has not been deleted'
                }
            }catch(e){
                console.log(e)
            }
        }
    }
}

module.exports = IndexController;
