const Koa = require('koa');
const app = new Koa;
const Router = require('koa-router');
const router = new Router();
const render = require('koa-art-template');
const path = require('path');
const static = require('koa-static');
render(app,{
    root: path.join(__dirname,"views"),
    extname: '.html',
    debug:process.env.NODE_ENV !== 'production',
})

app
.use(static(path.join(__dirname,"assets")))
.use(router.routes())
.use(router.allowedMethods())
.listen(8000,()=>{console.log('Koa Server is listening')});
app
.use(async(ctx,next)=>{
    console.log(`you have a permission to brosw the page`);
    next();
})
.use(async(ctx,next)=>{
    next();
    if(ctx.status === 404){
        ctx.body = `this is 404 Not Found Page`
    }
})
router
.get('/',async (ctx)=>{

    let msg = `home page`
    let arr = [1,2,3,4,5,6,7,8,9]
    let json = {
        str:`<h1>render about H5 tag in koa-template</h1>`
    }
    await ctx.render('index',{
        msg,
        arr,
        json
    })
})

