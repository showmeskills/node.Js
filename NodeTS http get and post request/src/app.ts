import log4js from "log4js";
import http from "http";
import queryString from "querystring";
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level = "debug";

const postData = queryString.stringify({
    province: "上海",
    city: "上海",
    dustrict: "宝山区",
    address: "统计质量199",
    latitude: 43.0,
    longitude: 160.0,
    message: "求购一条小鱼",
    contract: "12312312",
    type: "sell",
    time: 1571217561
})

const options = {
    protocol: "http:",
    hostname: "localhost",
    method: "post",
    port: 3000,
    path: "/data",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(postData)
    }
}


const server = http.createServer((req, res) => {
    const request = http.request(options, (result) => {})
    request.write(postData)
    request.end();

    res.end("ok app.ts");
})



server.listen(8080, () => console.log("8080 2is listening"))