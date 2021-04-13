//this is render routes controllers
class IndexController{
    constructor(){}
    home(){
        return async(ctx,next)=>{
            let title = 'library home page'
            await ctx.render('index',{
                title
            })
        }
    }
    admin(){
        return async(ctx,next)=>{
            await ctx.render('admin/index')
        }
    }
}

module.exports = IndexController;