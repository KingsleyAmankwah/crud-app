import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function UsersTable() {
  return (
    <div>
      <Table bordered className="mt-4">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Location</td>
            <td>Date</td>
            <td>
              <Button variant="info">Edit</Button>
              <Button className="ms-2" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
