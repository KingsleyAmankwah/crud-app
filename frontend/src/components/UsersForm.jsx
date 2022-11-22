import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUser, selectUser } from "../features/users/userSlice";

function UsersForm() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [Name, setNameInput] = useState("");
  const [Location, setLocationInput] = useState("");

  const userEdit = useSelector(selectUser);
  const [user, setUser] = useState(userEdit);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUser(userEdit);
    console.log(userEdit);
  }, [userEdit]);

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
      <h2 className="text-center display-5">MERN Stack CRUD-APP</h2>
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
