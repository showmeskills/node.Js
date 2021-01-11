const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const ejs = require('ejs')

app.set('views',path.join(__dirname , 'views') );
app.engine('.html', ejs.__express);  
app.set('view engine', 'html')

app.use(cookieParser('secret'))

app.get('/',(req, res) =>{
let good = req.cookies.product || 'you do not have browsed anything'
    res.render(path.join(__dirname, 'views','index.html'),{
        good
    });
})

app.get('/web',(req, res) =>{
    console.log(req.query.product)
   
    let good = req.query.product
    
    let cookProducts = req.cookies.product
    console.log(cookProducts)
    
    if(cookProducts){
     
        cookProducts.push(good)
    }else{
       
        cookProducts = [];
        cookProducts.push(good)
    }


    res.cookie('product',cookProducts,{
        maxAge:60*1000,
    })
    res.send('你现在正在浏览---'+req.query.product)
})

app.listen(8000,()=>{console.log('listening')})
