const router = require('koa-simple-router');
const model = require('../models/index');
let controller = (app)=>{
    app.use(router(_=>{
        _.get('/',(ctx,next)=>{
            ctx.render('view')
        })
    
        _.get('/index1',async (ctx,next)=>{
            let data = await model.db();
            ctx.render('index1',{
                data
            })
        })
        _.get('/index2',async (ctx,next)=>{
            let data = await model.db1();
            ctx.render('index2',{
                data
            })
        })
    }))
}

module.exports = controller