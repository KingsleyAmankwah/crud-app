import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import Home from "./pages/Home";
import axios from "axios";
import NoInternet from "./components/NoInternet";
axios.defaults.withCredentials = true;

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return (
    <div className="App">
      {!isOnline && <NoInternet />}

      {isOnline && (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo-lists" element={<TodoLists />} />
              <Route path="/add-todo" element={<TodoForm />} />
            </Routes>
          </Router>
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
