import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UsersTable from "./components/UsersTable";

function App() {
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
