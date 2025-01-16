const { Router } = require("express");
const { usersController } = require("../controller");

const usersRouter = Router();

usersRouter.get("/", usersController.getUsers);
// usersRouter.get("/:id", usersController.getUserById);
usersRouter.get("/:id", usersController.getUserById);
usersRouter.delete("/:id", usersController.deleteById);

module.exports = usersRouter;
