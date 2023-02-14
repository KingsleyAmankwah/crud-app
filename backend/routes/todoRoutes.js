const express = require("express");
const asyncHandler = require("express-async-handler");
const {
  addTask,
  getAllTasks,
  deleteTask,
  updateTask,
} = require("../controllers/todoControllers");

const router = express.Router();

router.get("/", asyncHandler(getAllTasks));
router.post("/add", asyncHandler(addTask));
router.delete("/:id", asyncHandler(deleteTask));
router.put("/:id", asyncHandler(updateTask));

module.exports = router;
