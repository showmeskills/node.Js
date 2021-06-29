import http from "http";
import path from "path";
import fs from 'fs';
import mime from 'mime';

function myReadFile(file: string) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, content) => {
            if (err) {
                return reject(err.message);
            } else {
                return resolve(content);
            }
        })
    })
}

async function readStaticFile(pathname: string) {
    let ext = path.parse(pathname).ext;
    let mimeType = mime.getType(ext) || "text/html";
    let data;
    if (fs.existsSync(pathname)) {
        if (ext) {
            data = await myReadFile(pathname)
            //.then(res => data = res)
            //.catch(err => data = err)
        } else {
            data = await myReadFile(path.join(__dirname, "index.html"))
            //.then(res => data = res)
            //.catch(err => data = err)
        }
    } else {
        data = 'file or directory not found';
    }
    return {
        mimeType,
        data
    };
}


const server = http.createServer(async (req, res) => {

    let urlString = req.url;
    let filePathName = path.join(__dirname, "public", urlString!);
    const data: any = await readStaticFile(filePathName);
    res.writeHead(200, {
        "Content-Type": `${data.mimeType};charset=utf-8`
    })
    res.write(data.data);
    res.end();
})

server.listen(8000, () => console.log("listening on 8000"));