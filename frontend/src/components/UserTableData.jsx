import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
import {
  getUsers,
  getUser,
  deleteUser,
  reset,
} from "../features/users/userSlice";
import Spinner from "./Spinner";

function UserTableData() {
  // const { id } = useParams();

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

        {users.length > 0 ? (
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.Name}</td>
                <td>{user.Location}</td>
                <td>
                  <a href={`/${user._id}`}>
                    <Button
                      variant="info"
                      // onClick={() => dispatch(getUser(user._id))}
                    >
                      Edit
                    </Button>
                  </a>
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
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className="text-center" colSpan={5}>
                No data available{" "}
              </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default UserTableData;
