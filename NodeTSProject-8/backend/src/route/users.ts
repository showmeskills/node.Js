import express from 'express';
import Users from "../controller/users";
import {auth} from "../middlewares/auth";
const router = express.Router();
const users = new Users();

router.post('/users/signin',users.userSignIn);
//middlware to auth each api
router.get('/users',auth,users.userLists);
router.get("/users/signout",auth,users.userSingOut);
router.post('/users',auth,users.userSignUp);
router.delete('/users',auth,users.userRemove);
//首次页面打开判断判断是否有权限
router.get("/users/isAuth",users.isAuth);

export default router;