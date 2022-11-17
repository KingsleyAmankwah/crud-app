import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import { getUsers, reset } from "./features/users/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UsersTable from "./components/UsersTable";

function App() {
  const { user } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <UsersForm />
        <UsersTable key={user._id} />
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
