import Post from "../models/Post";

export const getCreatePost = (req, res) => {
  res.render("createPost");
};

export const postCreatePost = async (req, res) => {
  const {
    body: { title, category, body },
  } = req;
  const writer = req.user.id;
  try {
    await Post.create({
      title,
      category,
      body,
      writer,
    });
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

export const getPostList = async (req, res) => {
  const posts = await Post.find({}).sort({ _id: -1 });
  res.render("postList", { posts });
};

export const getPostDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const post = await Post.findById(id);
    res.render("postDetail", { post });
  } catch (e) {
    console.log(e);
  }
};
