import React, { useState, useEffect } from "react";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUser } from "../features/users/userSlice";

function UsersForm() {
  const dispatch = useDispatch();

  const { id } = useParams();
  // console.log(id);

  const [userData, setUserData] = useState({
    Name: "",
    Location: "",
  });

  const { Name, Location } = userData;

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // const [Name, setNameInput] = useState("");
  // const [Location, setLocationInput] = useState("");

  const { users } = useSelector((state) => ({ ...state.user }));

  useEffect(() => {
    // if (id) {
    //   // const getSingleUser = users.find((user) => user._id === id);
    //   // console.log(getSingleUser);
    //   // setUserData({ ...getSingleUser });
    // }
  }, [id, users, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      Name,
      Location,
    };

    dispatch(createUser(formData));
    // userData("");
    // setNameInput("");
    // setLocationInput("");
    handleClear();
  };

  const handleClear = () => {
    setUserData({ Name: "", Location: "" });
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
            onChange={onChange}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
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
          {id ? "Update" : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default UsersForm;
