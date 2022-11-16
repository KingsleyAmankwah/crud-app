import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    Location: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { Name, Location } = formData;
  return (
    <div className="App">
      <Container>
        <h2 classname="text-center display-4">Details of People</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Names</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={Name}
              onChange={onChange}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="Location"
              value={Location}
              onChange={onChange}
              placeholder="Location"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Table bordered Stripped className="mt-4">
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
