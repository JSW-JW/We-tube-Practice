import express from "express";
import { postJoin, getLogin, postLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.post("/", postJoin);
globalRouter.get("/login", getLogin);
globalRouter.post("/login", postLogin);

export default globalRouter;
