const express = require("express");
const { usersRouter, todosRouter } = require("./routes");

const app = express();
const port = 3001;

app.use("/users", usersRouter);
app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
