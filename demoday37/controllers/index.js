const render = require('koa-simple-router')
const IndexController = require('./indexController.js');
const indexController = new IndexController();

module.exports = (app)=>{
    app.use(render(_=>{
        //set up ajax the router of getting the data from the database
        _.get('/getData',indexController.homePage())
        //set up the ajax of adding function
        _.post('/add', indexController.actionAdd())
        // editpage through id value to get relative book
        _.get('/editpage',indexController.actionEditPage())
        //the action of editing a book
        _.post('/edit', indexController.actionEdit())
        //delete a book
        _.get('/delete', indexController.actionDelete())
    }))
}