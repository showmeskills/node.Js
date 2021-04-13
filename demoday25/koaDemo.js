const Koa = require('koa');
const router = require('koa-simple-router');
const path = require('path');
const fs = require('fs');
let count = 0;
let app = new Koa;

app.listen(8080,()=>{console.log('Server is listening')})

app.use(router(_=>{
    _.get('/',(ctx,next)=>{
        ctx.type = 'html';
        ctx.body = fs.readFileSync(path.join(__dirname,'static','request.html'));
    })
    _.get('/index',async (ctx,next)=>{
        if(count >= 3){
            ctx.status = 500;
            ctx.body = 'the request time is more';
            return
        }
        console.log(1)
        await next()
        console.log(2)

        if(ctx.bool){
            count++
        }
    })
    _.get('/index',async (ctx,next)=>{
        let random = Math.random()*10;
        await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(random > 5){
                    console.log(3)
                    ctx.body = `request${random}>5`;
                    ctx.bool = true;
                    resolve();
                }else{
                    console.log(3)
                    ctx.body = `request${random}<5`;
                    resolve();
                }
            })
        })
    })
}))