const { Router } = require("express");

const todosRouter = Router();

todosRouter.get("/", (req, res) => {
  res.send("todos");
});

todosRouter.get("/:id", (req, res) => {});
todosRouter.delete("/:id", (req, res) => {});

module.exports = todosRouter;
