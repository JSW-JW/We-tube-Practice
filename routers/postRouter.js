import express from "express";
import routes from "../routes";
import {
  getCreatePost,
  postCreatePost,
  getPostDetail,
  getPostList,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get(routes.home, getCreatePost);

postRouter.post(routes.home, postCreatePost);
postRouter.get(routes.postList, getPostList);
postRouter.get("/:id/postList", getPostDetail);

export default postRouter;
