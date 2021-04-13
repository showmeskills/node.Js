const path = require('path');
const _ = require('lodash');
config = {
    staticDir:path.join(__dirname,'..','assets'),
    templateDir:path.join(__dirname,'..','views')
}
if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port: 8088
    };
    _.assignIn(config, localPort)
}
if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port: 88
    };
    _.assignIn(config, prodPort)
}
module.exports = config;

