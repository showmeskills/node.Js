import {Request,Response} from "express";
import template from "art-template";
import path from "path";
import fs from "fs";
import {dataArray} from "../modules/list"
class Controllers{

    public getData(req:Request,res:Response){
        res.send("hello world");
    }
    public list(req:Request,res:Response){
        //前端渲染
        // let dataObject:any = {
        //     ret:true,
        //     data:[]
        // }
        // for(let i = 0; i < 100; i++){
        //     dataObject.data.push("line"+i);
        // }
        //res.send(dataObject)

        //后端渲染
        // let dataArray:any = []
        // for(let i = 0; i < 100; i++){
        //     dataArray.push("line abc"+i);
        // }
        // res.set("content-type","application/json;charset=utf-8");
        // res.render('list', {
        //    data:JSON.stringify(dataArray)
        // });
        res.render('list-html',{
            data:dataArray
        })
        // let html = template(path.join(__dirname+".."+"/views/list-html.art"),{
        //     data:dataArray
        // })
        // fs.writeFileSync(path.join(__dirname+"../public/list.html"),html)
        // res.send("pages have been compiled");
    }

}

export default Controllers