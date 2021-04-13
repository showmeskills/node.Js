class IndexController{
    constructor(){}
    actionES(){
        return async (ctx)=>{
            await ctx.render('module')
        }
    }
    actionEsNo(){
        return async (ctx)=>{
            await ctx.render('nomodule')
        }
    }
}
module.exports = IndexController;