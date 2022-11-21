import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createUser } from "../features/users/userSlice";

function UsersForm() {
  const [Name, setNameInput] = useState("");
  const [Location, setLocationInput] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Name,
      Location,
    };

    dispatch(createUser(userData));
    setNameInput("");
    setLocationInput("");
  };

  return (
    <div>
      <h2 className="text-center display-4">Details of People</h2>
      <Form method="POST" onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Names</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="Location"
            value={Location}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="Location"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UsersForm;
