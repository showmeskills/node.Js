import log4js from "log4js";
import http from "http";
import queryString from "querystring";
import https from "https";
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";


const server = http.createServer((req, res) => {

    // let data = "";
    // req.on("data",(chunk)=>{
    //     data += chunk
    // })
    // req.on("end",()=>{
    //     res.writeHead(200,{
    //         "content-type": "application/json;charset=utf-8",
    //     })
    //     logger.debug(data);
    //     res.write(JSON.stringify(queryString.parse(data)));
    //     res.end();
    // });

    // https.get("https://www.xiaomiyoupin.com/mtop/mf/resource/data/list", (result) => {
    //     let data = "";
    //     result.on("data", (chunk) => {
    //         data += chunk
    //     })
    //     result.on("end", () => {
    //         res.writeHead(200, {
    //             "content-type": "application/json;charset=utf-8",
    //         })
    //         res.write(data);
    //         res.end();
    //     })
    // })

    
})



server.listen(8080, () => console.log("8080 is listening"))