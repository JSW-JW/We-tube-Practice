import User from "../models/User";
import passport from "passport";

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, verifyPassword },
  } = req;
  if (password !== verifyPassword) {
    alert("비밀번호가 일치하지 않습니다");
    res.status(400);
    res.render("/");
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      console.log("Registered to DB!");
      res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: "/login",
  successRedirect: "/",
});
