const express = require('express');
let app = express();
const template = require('express-art-template');
const path = require('path');
app.listen(8080,() => {console.log('running on port')});


app.set('views',path.join(__dirname,'views'))
app.set('view engine','art')
app.engine('art',template);
app.get('/',(req,res) => {
    res.render('index.art',{
        title:'hello art-template in express',
        user:{
            name:'terry',
            age:100,
            jobs:'web',
        }
    })
})

 
