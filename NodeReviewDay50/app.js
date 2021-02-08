const Koa = require('koa');
const app = new Koa;
const Router = require('koa-router');
const router = new Router;
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const render = require('koa-art-template');
const path = require('path');
const myMongodb = require('./model/mongodb.js');

render(app,{
    root: path.join(__dirname,"views"),
    extname: '.html',
    debug:process.env.NODE_ENV !== 'production',
})

app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())
.listen(config.port,()=>{console.log('Server is listening')});


router
.get('/',async (ctx,next)=>{
    let msg = await myMongodb.find('demo',{})
    ctx.body = msg
})
.get('/insert',async(ctx)=>{
    let data = await myMongodb.insert('demo',{
        username:'Terrance',
        age:18,
        sex:'男',
        status:0
    });
    ctx.body = `insert successfully`
})

.get('/edit',async(ctx)=>{
    let data = await myMongodb.update('demo',{
        username:"Terrance",
    },{
        username:'Terrance555',
        age:25,
        sex:'男',
        status:1
    });
    console.log(data)
    ctx.body = `update successfully`
})

.get('/delete',async(ctx)=>{
    let data = await myMongodb.delete('demo',{
        username:"Terrance555",
    });
    console.log(data)
    ctx.body = `delete successfully`
})




