import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signUpUserAction } from "../features/user/userAction";
import { useDispatch } from "react-redux";

const initialState = {
  fName: null,
  lName: null,
  dob: null,
  email: null,
  phone: null,
  password: null,
  confirmPassword: null,
};

export const Register = () => {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return window.alert("password do not match");
    }
    dispatch(signUpUserAction(rest, navigate));
  };
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ maxHeight: "100vh" }}
      >
        <Form
          className="mt-3 custom-form"
          style={{ fontWeight: "bolder" }}
          onSubmit={handleOnSubmit}
        >
          <h1 className="text-center mt-5" style={{ fontWeight: "bolder" }}>
            Wine Collector Registration Form
          </h1>
          <Form.Group
            className="mb-3 text-center "
            controlId="formGroupFirstName"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fName"
              placeholder="Enter your First Name"
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupLastName"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lName"
              placeholder="Enter your Last Name"
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formGroupDOB">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Enter your Date of Birth"
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your Email address"
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formGroupPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Enter your Phone Number"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your Password "
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-center"
            controlId="formGroupConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password "
              required
              onChange={handleOnChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="btn-custom ">
              Register Me
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
