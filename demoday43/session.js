const express = require('express');
const app = express();
const session = require('express-session')
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');

app.set('views',path.join(__dirname , 'views') );
app.engine('.html', ejs.__express);  
app.set('view engine', 'html')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
            maxAge: 60*1000,
        },
    rolling:true,
}))


app.get('/',(req,res) =>{
    let info = 'you do not have permissions to access next page,please. click down there to get permissions'
    if(req.session.userinfo){
        info = `welcome to ${req.session.userinfo}`
    }else{
        info = 'you do not have permissions to access next page,please. click down there to get permissions'
    }
    res.render('index',{
        info
    })
})

app.get('/permission',(req,res) =>{
    res.render('permission',{})
})

app.post('/permission/value',(req,res)=>{
    if(req.body.username){
        req.session.userinfo = req.body.username
        res.redirect('/')
    }else{
        res.send('you do not have permissions')
    }
})

app.listen(8000,()=>{console.log('Server is listening')})