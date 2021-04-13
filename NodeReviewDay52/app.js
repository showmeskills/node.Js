const Koa = require('koa');
const app = new Koa;
const render = require('koa-art-template');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const config = require('./config');
//import the centre of routes
require('./routes/index.js')(app);


//render html files
render(app,{
    root: config.templateDir,
    extname: '.html',
    debug:process.env.NODE_ENV !== 'production',
})


//read static files such less or javascript
app.use(static(config.staticDir));

//koa-session
app.keys = ['some secret hurr'];
//the configuration of koa-session 
const CONFIG = {
  key: 'koa.sess', 
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true, 
  signed: true, 
  rolling: true, 
  renew: false, 
};
//using post middleware
app.use(bodyParser());
//using koa-session middleware
app.use(session(CONFIG,app))
//running a server
app.listen(config.port,()=>{
    if(config.port===8080){
        console.log('the serve of development mode is listening')
    }else{
        console.log('the serve of production mode is listening')
    }
});