const createUser = async (req, res) => {
  res.status(200).json({ message: `Create a user` });
};
const getUser = async (req, res) => {
  res.status(200).json({ message: `Get users` });
};
const updateUser = async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
};
const deleteUser = async (req, res) => {
  res.status(200).json({ message: `Delete s user ${req.params.id}` });
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
