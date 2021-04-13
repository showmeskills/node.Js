const Koa = require('koa');
const app = new Koa;
const config = require('./config');
const static = require('koa-static');
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });
const logger = log4js.getLogger("cheese"); 

const koaBody = require('koa-body');

app.use(koaBody());

app.use(static(config.staticDir))
//import router and transmit app
require('./controllers')(app);
//error processing
require('./middleware').error(app,logger);

app.listen(config.port,()=>{console.log('listening on port')});


