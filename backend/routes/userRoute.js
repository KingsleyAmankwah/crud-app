const express = require("express");
const {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/getUser/:id", getUser);
router.get("/getUsers", getUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
