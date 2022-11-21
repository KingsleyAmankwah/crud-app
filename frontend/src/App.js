import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UsersTable from "./components/UsersTable";
import { useDispatch } from "react-redux";
import { getUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <UsersForm />
        <UsersTable />
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
