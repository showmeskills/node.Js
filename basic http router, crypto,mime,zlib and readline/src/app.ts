import http from "http";
import fs from "fs";
import path from "path";
// const server = http.createServer((req, res) => {
//     const urlString = req.url
//     console.log(urlString);
//     switch (urlString) {
//         case "/home":
//             res.write("hello home");
//             res.end();
//             return;
//         case "/about":
//             fs.readFile(path.join(__dirname, "file","about.html"),(err,contents) => {
//                 if(err){
//                     throw new Error(err.message);
//                 }
//                 res.write(contents);
//                 res.end();
//             })
//             return;
//         case "/app.js":
//             fs.readFile(path.join(__dirname, "file","app.js"),(err,contents) => {
//                 if(err){
//                     throw new Error(err.message);
//                 }
//                 res.write(contents);
//                 res.end();
//             })
//             return;
//         case "/images/100%.jpg":
//             fs.readFile(path.join(__dirname, "file","images","100%.jpg"),(err,contents) => {
//                 if(err){
//                     throw new Error(err.message);
//                 }
//                 res.write(contents);
//                 res.end();
//             })
//             return;
//         default:
//             res.end('404');
//             return;
//     }
// })
const mime = require('mime');
//一次性读取url 路径 
const server = http.createServer((req, res) => {
    const urlString = req.url
    const type = mime.getType(urlString?.split('.')[1]);
    console.log(type);
    res.writeHead(200,{
        "content-type":type
    })
    const file = fs.readFileSync(`.${urlString}`);
    res.write(file);
    res.end();

})
server.listen(8000,()=>console.log("listening on 8000"));