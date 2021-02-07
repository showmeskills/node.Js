const Koa = require('koa');
const app = new Koa;
const Router = require('koa-router');
const router = new Router;
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const config = require('./config/config.js')
const render = require('koa-art-template');
/*koa-template-render */
render(app,{
    root: config.templateDir,
    extname: '.html',
})

app
.use(bodyParser())
.use(static(config.staticDir))
.use(router.routes())
.use(router.allowedMethods())
.listen(config.port,()=>{console.log('listening on')})

router
.get('/',async(ctx)=>{
    await ctx.render('index')
})
.get('/login',async(ctx)=>{
    await ctx.render('login')
})
.post('/doLogin',async (ctx)=>{
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
})

