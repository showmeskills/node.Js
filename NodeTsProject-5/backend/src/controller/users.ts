import { Request, Response } from "express";
import { hash } from "../utils/tools";
import Userdb from "../model/Userdb";

interface User {
    _id: string;
    username: string;
    password: string;
    __v: number;
}
class Users {
    async signUp(req: Request, res: Response) {
        const { username, password } = req.body
        res.set("content-type", "application/json;charset=utf-8")
        try {
            const bcryptPassword = await hash(password)

            const user: User = await Userdb.findOne({ username })
            if (user) {
                return res.render('fail', {
                    data: JSON.stringify({
                        data: "用户名已经存在"
                    })
                })
            } else {
                try {
                    const newUser = new Userdb({
                        username,
                        password: bcryptPassword
                    })

                    const result = await newUser.save();
                    res.render("success", {
                        data: JSON.stringify({
                            data: result,
                            message: "注册成功"
                        })
                    });
                } catch (err) {
                    return res.status(500).json({
                        code: 1,
                        err,
                    })
                }
            }
        } catch (err) {
            return res.status(500).json({
                code: 1,
                err,
            })
        }
    }


    async userLists(req: Request, res: Response) {
        res.set("content-type", "application/json;charset=utf-8")
        try {
            const result = await Userdb.find().sort({ _id: -1 });
            res.render('success', {
                data: JSON.stringify(result)
            })
        } catch (err) {
            res.render('fail', {
                data: "程序异常"
            })
        }
    }

    async userRemove(req: Request, res: Response) {
        res.set("content-type", "application/json;charset=utf-8")
        const { _id } = req.body;
        try {
            const result = await Userdb.findByIdAndDelete({ _id })
            res.render('success', {
                data: JSON.stringify({
                    data: result,
                    message: "删除成功"
                })
            })
        } catch (err) {
            res.render('fail', {
                data: "程序异常"
            })
        }
    }
}

export default Users