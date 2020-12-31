const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
const router = require('koa-simple-router');
const koaBody = require('koa-better-body');
const convert = require('koa-convert');

app.use(static(path.join(__dirname, 'static')))

app.use(convert(koaBody({
    uploadDir:path.join(__dirname, 'upload'),
    keepExtensions:true,
})))

app.use(router(_=>{
    _.get('/', (ctx,next) => {
        ctx.body = 'hello node!';
    })
    
    //post 数据处理 http://localhost:8080/post.html
    _.post('/index',(ctx,next) => {
        //post 数据又2种 1.普通的2.文件
        console.log(ctx.request.files);
        console.log(ctx.request.fields);
        ctx.body = 'post ok'
    })
}))


app.listen(8080,()=>{console.log('Server is listening')})