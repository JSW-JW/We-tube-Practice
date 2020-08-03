import mongoose, { Schema } from "mongoose";

const PostSchema = mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // 2
  updatedAt: { type: Date },
  writer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
