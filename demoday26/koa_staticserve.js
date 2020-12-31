const Koa = require('koa');
const app = new Koa;
const static = require('koa-static');
const path = require('path');
const router = require('koa-simple-router');
const fs = require('fs');


app.use(static(path.join(__dirname, 'static')));

app.use(router(_=>{
    _.get('/', (ctx,next) => {
        ctx.body = 'hello node!';
    })
    
    _.get('/index2',(ctx,next) => {
        ctx.body = fs.readFileSync(path.join(__dirname,'static/index2.html'))
        next();
    })

     //get 数据处理
     _.get('/index',(ctx,next) => {
        //http://localhost:8080/index?aaa=1111&bbb=222
        //拿到get数据 [Object: null prototype] { aaa: '1111', bbb: '222' }
        console.log(ctx.request.query);
        ctx.body = 'ok'
    })
}))
   
app.listen(8000,()=>{console.log('Server is listening')})


