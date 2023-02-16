import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import Spinner from "./Spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TodoListForm = () => {
  const location = useLocation();
  const todo = location.state?.todo;

  const [formData, setFormData] = useState({
    name: todo?.name || "",
    dueDate: todo?.dueDate || "",
    description: todo?.description || "",
  });

  const [isLoading, setLoading] = useState(false);
  const [isEdit, setEdit] = useState(!!todo);

  useEffect(() => {
    setEdit(!!todo);
  }, [todo]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const todoData = {
      name: formData.name,
      dueDate: formData.dueDate,
      description: formData.description,
    };

    if (isEdit) {
      dispatch(updateTodo({ id: todo._id, todoData }));
      navigate("/todo-lists");
    } else {
      dispatch(addTodo(todoData));
      navigate("/todo-lists");
    }

    // dispatch(addTodo(todoData));
    setLoading(false);
    // props.addTask(formData);
    setFormData({ name: "", dueDate: "", description: "" });
  };

  if (isLoading)
    return (
      <>
        <Spinner />
      </>
    );

  return (
    <>
      <div className="mt-3">
        <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Back Home
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-2 text-center">Add Todo</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-xl"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="dueDate"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="5"
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
        >
          {isEdit ? "Update Task" : "Add Task"}
        </button>
      </form>
    </>
  );
};

export default TodoListForm;
