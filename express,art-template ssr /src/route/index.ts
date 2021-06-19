import express from 'express';
import Controllers from "../controller"
const router = express.Router();
const controllers = new Controllers();
router.get("/getData",controllers.getData)
router.get("/list",controllers.list)

export default router;