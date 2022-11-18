import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import { getUsers, reset } from "./features/users/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsersForm from "./components/UsersForm";
import UsersTable from "./components/UsersTable";

function App() {
  const { users } = useSelector((state) => state.user);

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
        <div>
          {users && users.length > 0 ? (
            <div>
              {users &&
                users.map((user) => (
                  <UsersTable
                    key={user._id}
                    Name={user.Name}
                    Location={user.Location}
                  />
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
