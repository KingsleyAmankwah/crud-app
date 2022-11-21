import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/users/userSlice";

function UserTableData() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
              {users.map((user) => (
                <tr key={user._id}>
                  <td>1</td>
                  <td>{user.Name}</td>
                  <td>{user.Location}</td>
                  <td>
                    <Button variant="info">Edit</Button>
                    <Button className="ms-2" variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <div>No data </div>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTableData;
