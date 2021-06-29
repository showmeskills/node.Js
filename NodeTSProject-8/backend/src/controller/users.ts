import { Request, Response, NextFunction } from "express";
import { hash, compare, token, tokenDecode } from "../utils/tools";

import Userdb from "../model/Userdb";


interface User {
    _id: string;
    username: string;
    password: string;
    __v: number;
}

class Users {
    async userSignUp(req: Request, res: Response) {
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
    async userSignIn(req: Request, res: Response, next: NextFunction) {
        res.set("content-type", "application/json;charset=utf-8");
        const { username, password } = req.body
        try {
            const user: User = await Userdb.findOne({
                username,
            })
            //用户登陆验证用户是否合法
            if (user.username) {
                const { username, password: hash } = user;
                const result = await compare(password, hash)
                if (result) {
                    //set up cookie-session
                    // req.session!.username = username;
                    //use token
                    const setToken = token(username);
                    //将setToken 放在自定义守护字段 需要以x-开头
                    res.set("X-Access-Token", setToken)
                    res.render("success", {
                        data: JSON.stringify({
                            username,
                            message: "login successfully",
                            setToken
                        })
                    })
                } else {
                    res.render("fail", {
                        data: JSON.stringify({
                            message: "用户或密码错误1"
                        })
                    })
                }
            } else {
                res.render("fail", {
                    data: JSON.stringify({
                        message: "用户或密码错误2"
                    })
                })
            }
        } catch (err) {
            res.render("fail", {
                data: JSON.stringify({
                    message: err
                })
            })
        }
    }
    userSingOut(req: Request, res: Response) {
        req.session = null;
        res.render("success", {
            data: JSON.stringify({
                message: "sign out successfully"
            })
        })

    }
    isAuth(req: Request, res: Response) {
        // if(req.session!.username){
        //     res.render("success",{
        //         data:JSON.stringify({
        //             username:req.session!.username
        //         })
        //     })
        // }else{
        //     res.render("fail",{
        //         data:JSON.stringify({
        //             message:"没有权限请登录"
        //         })
        //     })
        // }
        const token = req.get("X-Access-Token");
        try {
            if (token) {
                const result:any = tokenDecode(token);
                res.render("success", {
                    data: JSON.stringify({
                        username: result.username
                    })
                })
            }else{
                res.render("fail", {
                    data: JSON.stringify({
                        message: "没有权限请登录"
                    })
                })
            }

        } catch (e) {
            res.render("fail", {
                data: JSON.stringify({
                    message: "没有权限请登录"
                })
            })
        }
    }
}

export default Users