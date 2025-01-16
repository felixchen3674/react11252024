const { usersService } = require("../services");

const getUsers = async (req, res) => {
  const users = await usersService.getUsers();

  res.send({
    success: true,
    message: "Users retrieved successfully",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getUserById(id);
  if (!user) {
    res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  res.send({
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
};

const deleteById = async (req, res) => {
  res.send("user");
};

module.exports = {
  getUserById,
  getUsers,
  deleteById,
};
