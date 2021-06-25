import express from 'express';
import Users from "../controller/users"
const router = express.Router();
const users = new Users();

router.post('/users/signup',users.signUp);
router.get('/users/list',users.userLists);
export default router;