import express from 'express';
import Users from "../controller/users"
const router = express.Router();
const users = new Users();

router.post('/users/signup',users.signUp)

export default router;