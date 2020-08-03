import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import passport from "passport";
import mongoose from "mongoose";
import "./passport";
import postRouter from "./routers/postRouter";
import MongoStore from "connect-mongo";
import session from "express-session";
import dotenv from "dotenv";
import { localMiddleware } from "./middlewares";
const app = express();
const CookieStore = MongoStore(session);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
dotenv.config();
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/static", express.static("static"));
app.use("/resources", express.static("resources"));
app.use("/resources", express.static("resources"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.post, postRouter);

export default app;
