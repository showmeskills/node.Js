const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/',(req,res) =>{
    let title = 'welcome to login page'
    res.render('login.ejs',{
        title,
    })
})

app.post('/login_in',(req,res) =>{
    console.log(req.body)
    res.send(`welcome ${req.body.username} page`)
})


app.listen(8000,()=>{console.log('Server is listening')})