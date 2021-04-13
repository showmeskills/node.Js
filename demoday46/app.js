const Koa = require('koa');
const app = new Koa;
const Router = require('koa-router');
const router = new Router();
const static = require('koa-static');
const path = require('path');
const render = require('koa-art-template');

render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html',
})


router
.get('/',async (ctx)=>{
    await ctx.render('index',{
        title:'Home page'
    })
})
.get('/login', async (ctx)=>{
    try{
        let obj = {
            name:ctx.query.name,
            pass:ctx.query.pass,
            querystring:ctx.query.querystring,
            request_url:ctx.request.url,
            request_query:ctx.request.query
        };
        obj[Symbol.iterator] = function() {
            return {
                next(){
                    let objArr = Reflect.ownKeys(obj)
                    if (this.index < objArr.length-1) {
                        let key = objArr[this.index];
                        this.index++;
                        return { value: obj[key] };
                    } else {
                        return { done: true };
                    }
                },
                index:0
            }
        };
        ctx.body = await obj;
    }catch(e){
        console.log(e)
    }
})

.get('/vip/:money', async (ctx)=>{
    console.log(ctx.params)
    ctx.body=`${ctx.params.money}`
})

.get('/vip/:money/:membership', async (ctx)=>{
    console.log(ctx.params)
    ctx.body=`${ctx.params.membership}`
});

app
.use(static(path.join(__dirname,'views','index.html')))
.use(router.routes())
.use(router.allowedMethods())
.listen(8000,()=>{console.log('koa: listening 8000')})