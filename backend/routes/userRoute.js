const express = require("express");
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/getUsers", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
