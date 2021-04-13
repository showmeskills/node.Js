const Koa = require('koa');
const app = new Koa;
const static = require('koa-static');
const koaBody = require('koa-body');
const render = require('koa-art-template');
const config = require('./config/index.js');

app.use(koaBody());
app.use(static(config.staticDir))
render(app, {
    root: config.viewsDir,
    extname: '.html',
});
require('./controllers/index')(app);
app.listen(config.port,()=>{console.log('listening on port')})