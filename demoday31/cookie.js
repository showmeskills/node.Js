const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(cookieParser("secret"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.render('home.ejs',{
        title:'home page you can set up cookies here'
    })
})
app.get('/set',(req,res,next)=>{
    res.cookie('Username','Terry',{
        maxAge:6*1000,
        domain:'.terry.com',
        signed:true
    })
    next()
})
app.get('/set',(req,res,next)=>{
    res.render('set.ejs',{
        title:'cookies have been set up, please check out in the Application, and cookie has been signed if you want to check original cookie to (use console.log(req.signedCookies))'
    })
})


app.listen(8000,()=>{console.log('Serve is listening')})