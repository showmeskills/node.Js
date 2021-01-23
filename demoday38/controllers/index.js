const render = require('koa-simple-router')
const IndexController = require('./indexController.js');
const indexController = new IndexController();

module.exports = (app)=>{
    app.use(render(_=>{
        /*
        there use RESTful API to complete ajax request
        router design main router http://localhost:8080/
        getData method:get rouert+ /books
        addData method:post rouert+/books/book
        get editData method:get rouert+/books/book/:id;
        action editData method:put rouert+books/book;
        delete method:delete rouert+ books/book/:id;
        */
        //set up ajax the router of getting the data from the database
        _.get('/books',indexController.homePage())
        //set up the ajax of adding function
        _.post('/books/book', indexController.actionAdd())
        // editpage through id value to get relative book
        _.get('/books/book/:id',indexController.actionEditPage())
        //the action of editing a book
        _.put('/books/book', indexController.actionEdit())
        //delete a book
        _.delete('/books/book/:id', indexController.actionDelete())
    }))
}