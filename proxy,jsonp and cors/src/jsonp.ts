import http from "http";
import url from "url";
const server = http.createServer((req, res) => {
    let urlString = req.url
    let urlObj = url.parse(urlString!,true);
    console.log(urlObj)
    switch(urlObj.pathname){
        case "/api/data":
                res.write(`${urlObj.query.cb}("hello")`);//jsonp
                res.end();
            return ;
        default:
                res.write("page not found"); 
                res.end();
            return;
    }
})

server.listen(8080,()=>console.log("8080 is listening"));