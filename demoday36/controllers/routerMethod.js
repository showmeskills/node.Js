const SafeRequest = require('../models/database.js');
const safeRequest = new SafeRequest();

class Method {
    constructor(){}
    homePage(){
        return async(ctx)=>{
            await ctx.render('index')
        }
    };
    admin(){
        let data ='Admin login and register page'
        return async(ctx)=>{
            await ctx.render('admin',{
                data
            })
        }
    };
    register(){
        return async(ctx,next)=>{
            let name = ctx.request.body.name;
            let pass = ctx.request.body.pass;
            try{
                let data = await safeRequest.reg(name,pass)
                console.log(data);
                ctx.body = data;
            }catch(e){
                console.log(e)
            }
        }
    };
    login(){
        return async(ctx,next)=>{
            let name = ctx.request.body.name;
            let pass = ctx.request.body.pass;
            try {
               let data = await safeRequest.loginIn(name,pass)
               console.log(data)
               if(data.code === 0){
                   ctx.body = data
               }
            } catch (err) {
                 console.log(err)
            }
        }
    };
    book(){
        return async(ctx,next)=>{
            let data = await safeRequest.getData();
            await ctx.render('book',{
                data
            })
        }
    }
    addPage(){
        return async(ctx,next)=>{
            await ctx.render('addPage')
        }
    }
    actionAdd(){
        return async(ctx,next)=>{
            try{
                let data = await safeRequest.addData(ctx.request.body);
                if(data.code ===0){
                    ctx.redirect('/book')
                }else{
                    ctx.body='add failed'
                }
            }catch(e){
                console.log(e)
            }
        }
    }
    editPage(){
        return async(ctx,next)=>{
            let id = ctx.request.query.editid;
            try{
                let msg = await safeRequest.getEditData(id)
                console.log("msg====>",msg)
                ctx.render('editPage',{
                    data:msg.data,
                })
            }catch(err){
                console.log(err)
            }
        }
    }
    actionEdit(){
        return async(ctx,next)=>{
            try{
                let data = await safeRequest.editData(ctx.request.body);
                console.log(data)
                ctx.redirect('/book')
            }catch(e){
                console.log(e)
            }
        }
    }
    actionDelete(){
        return async(ctx,next)=>{
            let id = ctx.request.query.deleteid
            try{
                let data = await safeRequest.deleteData(id)
                console.log("data====>",data)
                ctx.redirect('/admin')
            }catch(e){
                console.log(e)
            }
        }
    }
};
module.exports = Method;