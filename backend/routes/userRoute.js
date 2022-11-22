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
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
