const asyncHandler = require("express-async-handler");
const Task = require("../models/todo");

const addTask = asyncHandler(async (req, res) => {
  const task = new Task({
    name: req.body.name,
    dueDate: req.body.dueDate,
    description: req.body.description,
  });

  await task.save((error) => {
    if (error) {
      return res.status(500).send({ message: error });
    } else {
      return res.send({ message: "Task added successfully!" });
    }
  });
});

const deleteTask = asyncHandler(async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    return res.send({ message: "Task deleted successfully!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  return res.send(tasks);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      description: req.body.description,
    },
    { new: true }
  );
  return res.send({ message: "Task updated successfully!", task });
});

module.exports = { addTask, deleteTask, getAllTasks, updateTask };
