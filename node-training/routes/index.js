// this is like the router layer, it defines all the routes

const usersRouter = require("./usersRoutes");
const todosRouter = require("./todosRoutes");

module.exports = {
  usersRouter,
  todosRouter,
};
