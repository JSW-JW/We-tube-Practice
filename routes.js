const HOME = "/";
const POST = "/post";
const POSTLIST = "/postList";
const POSTDETAIL = "/:id/postList";
const USER = "/user";
const LOGIN = "/login";
const CAT = "/cat";
const JOIN = "/join";

const routes = {
  home: HOME,
  post: POST,
  postList: POSTLIST,
  postDetail: (id) => {
    if (id) {
      return `/${id}/postList`;
    } else {
      return POSTDETAIL;
    }
  },
  user: USER,
  login: LOGIN,
  join: JOIN,
  cat: CAT,
};

export default routes;
