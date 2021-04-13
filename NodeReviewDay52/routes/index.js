const Router = require('koa-router');
const router = new Router();
const IndexController = require('./IndexController');
const indexController = new IndexController();
const APIController = require('./APIController');
const api = new APIController();

module.exports = (app) =>{
    app.use(router.allowedMethods())
    app.use(router.routes())
    //home page
    router.get('/',indexController.home())
    //admin page
    router.get('/admin',indexController.admin())
    //login and register page


    
}