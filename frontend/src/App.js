import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { createUser } from "./features/users/userSlice";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser({ nameInput, locationInput }));
    setNameInput("");
    setLocationInput("");
  };

  return (
    <div className="App">
      <Container>
        <h2 className="text-center display-4">Details of People</h2>
        <Form method="POST" onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Names</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="Location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="Location"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>@mdo</td>
              <td>
                <Button variant="info">Edit</Button>
                <Button className="ms-2" variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
