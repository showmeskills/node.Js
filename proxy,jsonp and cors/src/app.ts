import http from "http";

import {createProxyMiddleware} from "http-proxy-middleware";
const server = http.createServer((req, res) => {
    if(/^\/ajax/.test(req.url!)){
        const proxy:any = createProxyMiddleware("/ajax",{
            target:"https://lady.vip.com",
            changeOrigin:true,
        })
        proxy(req, res);

        res.end();
        //http://localhost:8080/api/listmore.json?pageNo=2&pageSize=15
    }else if(/^\/api/.test(req.url!)){
        const proxy:any = createProxyMiddleware("/api",{
            target:'https://m.lagou.com',
            changeOrigin:true,
            pathRewrite:{
                "/api":""
            }
        })
        proxy(req, res);
    }

})

server.listen(8080,()=>console.log("8080 is listening"));