import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to my Todo App
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          This is a simple app to help you stay organized and get things done.
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Todo Lists</h2>
          <Link
            to="/todo-lists"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Todo Lists
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Add New Todo List</h2>
          <Link
            to="/add-todo"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Todo List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
