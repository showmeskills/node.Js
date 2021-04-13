const router = require('koa-simple-router');
const IndexController = require('./indexController');
const indexController = new IndexController();

module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', indexController.actionES())
        _.get('/no',indexController.actionEsNo())
    }))
}