const http = require('http');
const path = require('path');
const user_data = require('./user.json');
const template = require('art-template');
const url = require('url');

template.defaults.imports.map = function (attri){
    switch (attri){
        case 'name': 
            return 'NAME';
        case 'age': 
            return 'AGE';
        case 'job': 
            return 'JOB';
    }   
}   


http.createServer((req, res) => {
    let{pathname,query:{id}} = url.parse(req.url,true);

    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }
    if(pathname === '/search'){
        let html = template(path.join(__dirname,'view','search.art'),{});
        res.end(html);
    }
    if(pathname ==='/result'){
        let user = user_data[id];
        let html = template(path.join(__dirname,'view','result.art'),{
            user
        });
        res.end(html);
    }
    if(pathname === '/all'){
        let arr =[];
        for(key in user_data){
            arr.push(user_data[key])
        }
        let html = template(path.join(__dirname,'view','all.art'),{
            arr
        });
        res.end(html);
    }

}).listen(8080,()=>{
    console.log('Running')
})
