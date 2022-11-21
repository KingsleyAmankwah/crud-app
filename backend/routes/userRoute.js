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
router.get("/:id", getUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
