import express from 'express';
import Controller from '../controller'
const routes = express.Router();
const controller = new Controller();

routes.get('/index',controller.index)
routes.get("/token",controller.token)

export default routes;