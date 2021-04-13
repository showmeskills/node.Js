const router = require('koa-simple-router');
const IndexController = require('./indexController')
const indexController = new IndexController();
module.exports = (app)=>{
    app.use(router(_=>{
        _.post('/reg',indexController.register());
        _.post('/login',indexController.login());

    }))
}
