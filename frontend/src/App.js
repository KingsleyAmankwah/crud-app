import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UsersTable from "./components/UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // if (isLoading) {
  //   return <div>...isLoading</div>;
  // }

  return (
    <div className="App">
      <Container>
        <UsersForm />
        {users.length > 0 ? (
          <div>
            {" "}
            <UsersTable user={users} />{" "}
          </div>
        ) : (
          <div>No data</div>
        )}
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
