import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import { getUsers } from "./features/users/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UsersTable from "./components/UsersTable";

function App() {
  const { users } = useSelector((state) => ({ ...state.user }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());

    // return () => {
    //   dispatch(reset());
    // };
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <UsersForm />

        {/* {users &&
          users.map((index, item) => <UsersTable key={index} {...item} />)} */}

        <div>
          {users && users.length > 0 ? (
            <div>
              {users &&
                users.map((index, item) => (
                  <UsersTable key={index} {...item} />
                ))}
            </div>
          ) : (
            <h4 className="text-center">No data</h4>
          )}
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
