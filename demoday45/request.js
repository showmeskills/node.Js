const http = require('http');
const https = require('https');
const url = require('url');

module.exports = (request_url)=>{
   
    let httpRequest = null;

    let { protocol } = url.parse(request_url);

    if (protocol == 'https:') {
        httpRequest = https
    } else if (protocol == 'http:') {
        httpRequest = http
    } else {
        throw new Error('Invalid protocol');
    }

    return new Promise((resolve, reject) => {
        let req = httpRequest.request(request_url, res => {
       
            if (res.statusCode >= 200 && res.statusCode < 300 || res.statusCode === 304) {
                let str = '';
                res.on('data', chunk => {
                    str += chunk;
                })
                res.on('end', () => {
                    //console.log('str===>', str)
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: str,
                    })
                })
            } else if (res.statusCode === 301 || res.statusCode === 302) {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: null,
                })
            }
        })

        req.on('error', err => {
            reject(`request failed`, err)
        })

        req.end();
    })
};