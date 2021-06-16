import http from "http";
import path from "path";
import {readStaticFile} from "./readStaticFile";

 http.createServer(async(req, res) => {
    const urlString = req.url;
    const pathFileName = path.join(__dirname,"public",urlString!);
    const data = await readStaticFile(pathFileName);
    res.writeHead(200,{
        "content-type":`${data.mimeType};charset=uft=8`
    })
    res.write(data.data);
    res.end();

}).listen(8080,()=>console.log("8080 is listening"))