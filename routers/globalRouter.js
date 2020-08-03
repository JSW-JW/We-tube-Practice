import express from "express";
import routes from "../routes";
import { postJoin, getLogin, postLogin } from "../controllers/userController";
import { getCatImage, getJoin, getHome } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.cat, getCatImage);
globalRouter.get(routes.join, getJoin);

export default globalRouter;
