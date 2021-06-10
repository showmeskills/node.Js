//log config cheese.log;
import log4js from "log4js";
log4js.configure({
    appenders:{cheese:{type:"file",filename:"cheese.log"}},
    categories:{default:{appenders:["cheese"],level:"error"}}
})
const logger = log4js.getLogger("cheese");
logger.level = "debug";


import url, { URLSearchParams } from "url";
const urlString = "https://www.baidu.com:443/path/index.html?id=2&tag=3";

// logger.debug(url.parse(urlString));
// logger.debug(url.format(urlString));
// logger.debug(url.resolve("http:www.abc.com/a","/b"))
// logger.debug(url.resolve("http:www.abc.com/a","../"))

// const urlParams = new URLSearchParams(url.parse(urlString).search!);
// logger.debug(urlParams);
// logger.debug(urlParams.get("id"));
import http from "http";

const server = http.createServer((req, res) => {
    
    const url = req.url; //获取浏览器的路由 http://localhost:8080/api/list

    res.writeHead(200,{
        //"content-type": "text/html",//返回text/html格式
        "content-type":"application/json;charset-UTF-8",//返回json字符串
    });
    // res.write('<div style="font-size:50px">hello</div>');
    res.write(`{'url':${url}}`);//{'url':/api/list}
    res.end();
})

server.listen(8080, () => {
    console.log("8080 is listenning");
})
