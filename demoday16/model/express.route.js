const url = require('url');
const path = require('path');
let mime = require('../public/mime.json');

function changeRes(res,req) {
    res.send = function(data){  
        let mimeType = 'text/plain';
        let ext = path.extname(req.url);
        mimeType = mime[ext];
        mimeType = mimeType+';charset=utf8;';
        res.writeHead(200,{"Content-Type":mimeType});
        res.end(data);
    }
}

let Server = function(){
    let G = this;
    this._get = {};
    this._post = {};

    const app = function(req,res){
        changeRes(res,req);
        
        let{pathname,query:{id}} = url.parse(req.url,true);
        
        if(!pathname.endsWith('/')){
            pathname = pathname +'/';
        }

        const method = req.method.toLowerCase();

        if(G['_'+method][pathname]){
            if(method === 'post'){/*execute post  */
                let postStr = '';
                req.on('data',chunk => postStr += chunk);
                req.on('end',chunk =>{
                    req.body = postStr;
                    console.log(postStr);
                    G['_'+method][pathname](req,res);
                })
            }else{/*execute get  */
                G['_'+method][pathname](req,res)
            }
        }else{/*execute get */
            res.end('no router')
        }
    }

    app.get=function(string,callback){
        if(!string.endsWith('/')){
            string=string+'/';
        }
        if(!string.startsWith('/')){
            string = '/'+string;
        }

        G._get[string] = callback;
    }

    app.post = function(string,callback){
        if(!string.endsWith('/')){
            string=string+'/';
        }
        if(!string.startsWith('/')){
            string = '/'+string;
        }

        G._post[string] = callback;
    }
    return app
}

module.exports = Server();