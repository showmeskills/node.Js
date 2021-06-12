import http from "http";
import url from "url";
import queryString from "querystring";
const server = http.createServer((req, res) => {
    let urlString = req.url
    let urlObj = url.parse(urlString!,true);
    switch(urlObj.pathname){
        case "/api/data":
                res.writeHead(200,{
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin':"*"
                })
                res.write(`{"ret":true,"data":"hello"}`);
                res.end();
            return ;
        default:
                res.write("page not found"); 
                res.end();
            return;
    }
})

server.listen(8080,()=>console.log("8080 is listening"));