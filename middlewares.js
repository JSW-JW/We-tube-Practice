import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.loggedUser = req.user;
  res.locals.routes = routes;
  next();
};
