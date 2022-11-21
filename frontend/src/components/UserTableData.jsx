import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser, reset } from "../features/users/userSlice";
import Spinner from "./Spinner";

function UserTableData() {
  const dispatch = useDispatch();

  const { users, isLoading, isSuccess } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());

    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Table bordered className="mt-4">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            <>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.Name}</td>
                  <td>{user.Location}</td>
                  <td>
                    <Button variant="info">Edit</Button>
                    <Button
                      className="ms-2"
                      variant="danger"
                      onClick={() => dispatch(deleteUser(user._id))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <td className="text-center" colSpan={5}>
              No data available{" "}
            </td>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTableData;
