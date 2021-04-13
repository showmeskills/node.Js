const Koa = require('koa');
const app = new Koa;
const server = require('koa-static');
const koaBody = require('koa-body');

//setting up a config files to control port and path
const config = require('./config/index')
//transmit query value
app.use(koaBody());
//read static files
app.use(server(config.staticDir));
//router controller
require('./controllers/index')(app);




app.listen(config.port,()=>{console.log('The server is listening')})

