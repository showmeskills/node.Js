const _ = require('lodash');
const path = require('path');

let config = { 
    "staticDir":path.join(__dirname,'..','views'),
}

if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port:8000,
    }
    _.assignIn(config , localPort)
}

if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port:8080,
    }
    _.assignIn(config,prodPort)
}

module.exports = config