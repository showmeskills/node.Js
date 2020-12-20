const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');
const user = require('./user.json');
//console.log(user)
http.createServer((req, res) => {
    let {pathname,query:{id}} = url.parse(req.url,true)
     
    if(req.url === '/favicon.ico'){
        res.end();
        return
    }

    if(pathname === '/search'){
        let readStream = fs.createReadStream(path.join(__dirname,'view','search.html'));
        readStream.pipe(res);
    }
    if(pathname === '/result'){
        let readStream = fs.createReadStream(path.join(__dirname,'view','result.html'));
        let str = '';
        readStream.on('data',chunk => {
            str += chunk
        });
        readStream.on('end',chunk =>{
            let user_id = user[id];
            console.log(user_id);
            str = str.replace('{{name}}',user_id.name);
            str = str.replace('{{age}}',user_id.age);
            str = str.replace('{{job}}',user_id.job);
            res.end(str);
        })
    }
}).listen(8080,()=>{
    console.log('Running')
})
