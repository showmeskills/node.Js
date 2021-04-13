const Koa = require('koa');
const app = new Koa;
const path = require('path');
const router = require('koa-simple-router');
const render = require('koa-art-template');



render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug: process.env.NODE_ENV !== 'production'
})

app.use(router(_=>{

    _.get('/', async (ctx,next)=>{
        await ctx.render('index',{
            msg: 'koa-art-template',
            hint:'click up'
        })
    })
}))


app.listen(8080,()=>{console.log('Sever is listening')})