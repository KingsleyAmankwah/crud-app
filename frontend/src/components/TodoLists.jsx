import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodo } from "../features/todo/todoSlice";
import Spinner from "./Spinner";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const { _id, name, dueDate, description } = todo;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/add-todo", { state: { todo } });
  };

  const handleDelete = () => {
    dispatch(deleteTodo(_id))
      .then(() => {
        // Successful deletion
        dispatch(getAllTodo());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr className="sm:text-xs lg:text-base" key={_id}>
      <td className="px-4 py-2 sm:px-6 sm:py-3">{name}</td>
      <td className="px-4 py-2 sm:px-6 sm:py-3">{dueDate}</td>
      <td className="px-4 py-2 sm:px-6 sm:py-3">{description}</td>
      <td className="px-4 py-2 sm:px-6 sm:py-3 flex justify-center">
        <button
          className="text-red-600 hover:text-red-800 mx-1"
          onClick={handleDelete}
        >
          <FaTrashAlt />
        </button>
        <button
          className="text-blue-600 hover:text-blue-800 mx-1"
          onClick={handleEdit}
        >
          <FaEdit />
        </button>
      </td>
    </tr>
  );
};

const TodoLists = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Due Date",
      accessor: "dueDate",
    },
    {
      Header: "Description",
      accessor: "description",
    },

    {
      Header: "Actions",
      accessor: "actions",
    },
  ];

  const { todos, isLoading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  if (isLoading)
    return (
      <>
        {" "}
        <Spinner />{" "}
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
      <h2 className="text-xl font-bold mb-2 text-center">Todo Lists</h2>

      <table className="table-auto w-full">
        <thead>
          <tr className="text-left">
            {columns.map((column) => (
              <th className="px-4 py-2 sm:px-6 sm:py-3" key={column.Header}>
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => <TodoItem key={index} todo={todo} />)
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No todos available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TodoLists;
