import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UserTableData from "./components/UserTableData";

function App() {
  return (
    <div className="App">
      <Container>
        <UsersForm />
        <UserTableData />
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
