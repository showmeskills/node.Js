const Koa = require('koa');
const app = new Koa;
const render = require('koa-art-template');
const path = require('path');

render(app,{ 
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug:process.env.NODE_ENV !== 'production'
})

//import router files
require('./controllers')(app);

app.listen(8080,()=>{
    console.log('Server listening')
})