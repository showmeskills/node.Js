import http from "http";
import https from "https";
import cheerio from "cheerio";

function filterData (data:any){
    const $ = cheerio.load(data);
    $(".onlive-server span").each((idx,val)=>{
        console.log($(val).text());
    })
}

const server = http.createServer((req, res) => {
    let data = ""
    https.get("https://www.meizu.com/",(result)=>{
        result.on("data",(chunk) =>{
            data+=chunk;
        })
        result.on("end",()=>{
            filterData(data)
        })
    })
    res.end();
})

server.listen(8080,()=>console.log('listening on port'))