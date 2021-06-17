import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello world!");
})

router.get("/router/api",(req, res) => {
    //获取get数据 http://localhost:8000/router/api?id=1
    const id = req.query.id;
    console.log(id);
    res.send("hello express router get data");
})

router.post('/router/post', (req, res) => {
    //需要添加 body-parser 中间件或者 express自带中间件
    const name = req.body.name;
    console.log(name);
    res.send("hello express router post data");
})

export default router;