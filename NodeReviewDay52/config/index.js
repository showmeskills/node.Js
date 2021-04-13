const path = require('path');
const _ = require('lodash');
const md5 = require('md5');

config = {
    staticDir:path.join(__dirname, '..','public'),
    templateDir:path.join(__dirname,'..','views'),
    md5(str){
        return md5(str);
    }
}

if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port: 8080,
        DBurl:'mongodb://localhost:27017/',
        namedb :'koa',
    };
    _.assignIn(config, localPort)
}
if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port: 80
    };

    _.assignIn(config, prodPort)
}
module.exports = config;