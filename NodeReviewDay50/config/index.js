const path = require('path');
const _ = require('lodash')
config = {
    staticDir:path.join(__dirname, '..','assets'),
    DBurl:'mongodb://localhost:27017/',
    namedb :'demodb',
}

if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port: 8000
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