const Koa = require('koa');
const app = new Koa;
const Router = require('koa-router');
const router = new Router;
const path = require('path');
const render = require('koa-art-template');
//post request uses koa-bodyparser
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const myMongodb = require('./model/mongodb.js');



render(app,{
    root: path.join(__dirname,"views"),
    extname: '.html',
    debug:process.env.NODE_ENV !== 'production',
})


app
.use(bodyParser())
.use(serve(path.join(__dirname,"assets")))
.use(router.routes())
.use(router.allowedMethods())
.listen(8000,()=>{console.log('Server is listening')});


router
.get('/',async(ctx)=>{
    let result = await myMongodb.find('demodb',{})
    await ctx.render('index',{
        result,
    })
})

.get('/add',async(ctx)=>{
    await ctx.render('add')
})

.post('/doAdd', async(ctx)=>{
    let data = await myMongodb.insert('demodb',ctx.request.body)
    if(data.result.ok ){
        await ctx.redirect('/')
    }else{
        await ctx.redirect('/add')
    }
})


.get('/editPage',async(ctx)=>{
    let id = ctx.request.query.editid;
    let data = await myMongodb.find('demodb',{
        "_id":myMongodb.getObjectId(id)
    })
    console.log(data)
    await ctx.render('editPage',{
        data
    })
}) 

.post('/doEdit',async(ctx)=>{
    //console.log(ctx.request.body)
    let {id,name,author,category,desc} = ctx.request.body;
    console.log(id,name,author,category,desc)
    let data = await myMongodb.update('demodb',{
        '_id':myMongodb.getObjectId(id)
    },{
        name,
        author,
        category,
        desc
    });
    // console.log(data.result)
    ctx.redirect('/')
})

.get('/delete',async(ctx)=>{
    let id = ctx.request.query.deleteid;
    //console.log(id)
    let data = await myMongodb.delete('demodb',{
        '_id':myMongodb.getObjectId(id)
    });
    await ctx.redirect('/')
})
