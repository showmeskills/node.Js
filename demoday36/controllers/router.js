const router = require('koa-simple-router');
const Method = require('./routerMethod.js');
const method = new Method;

module.exports = (app) =>{
    app.use(router(_=>{
        //home page
        _.get('/',method.homePage());
        //admin page
        _.get('/admin',method.admin());
        //register
        _.post('/reg',method.register());
        //login
        _.post('/login',method.login());
        //login successfully
        _.get('/book',method.book());
        //enter the page of adding
        _.get('/addpage',method.addPage());
        //the action of adding
        _.post('/add',method.actionAdd());
        //edit page
        _.get('/editpage',method.editPage());
        //action edit page
        _.post('/edit',method.actionEdit());
        //delete
        _.get('/delete',method.actionDelete());
    }))
}
