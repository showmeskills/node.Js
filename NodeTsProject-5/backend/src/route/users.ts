import express from 'express';
import Users from "../controller/users"
const router = express.Router();
const users = new Users();

router.post('/users',users.signUp);
router.get('/users',users.userLists);
router.delete('/users',users.userRemove)

export default router;