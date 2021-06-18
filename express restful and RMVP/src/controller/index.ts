import {Request,Response} from "express";
class RouteController{
     static getData(req:Request, res:Response){
        //获取get数据 http://localhost:8000/router/api?id=1
        const id = req.query.id;
        console.log(id);
        res.send("hello express router get data");
    }
}

export default RouteController;