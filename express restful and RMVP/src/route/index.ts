import express from 'express';
import RouteController from "../controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello world!");
})

router.get("/router/api",RouteController.getData)

router.post('/router/post', (req, res) => {
    //需要添加 body-parser 中间件或者 express自带中间件
    const name = req.body.name;
    console.log(name);
    res.send("hello express router post data");
})
//json字符串接受
router.post('/router/index', (req, res) => {
    //需要添加 body-parser 中间件或者 express自带中间件
    const name = req.body.name;
    const pwd = req.body.pwd;
    console.log(name);
    console.log(pwd);
    res.send("hello express router post data");
})

//put
router.put('/router/index', (req,res) => {
    const id = req.body.id;
    
    res.send(`put response id:${id}`)
})

//patch
router.patch('/router/index', (req,res) => {
    const id = req.body.id;
    
    res.send(`put response id:${id}`)
})

//delete
router.delete('/router/index', (req,res) => {
    const id = req.body.id;
    
    res.send(`put response id:${id}`)
})

router.all("/index",(req, res)=>{

    res.send("hello");
})
export default router;