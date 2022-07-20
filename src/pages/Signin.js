import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import UserContext from "../context";

export default function Signin() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      alert("Please enter " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "password" && password.length < 8) {
      setStatus("Error: " + label);
      alert("Please enter minimum 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "name") {
      if (!isNaN(field)) {
        setStatus("Error: " + label);
        alert("Please Enter Valid Name");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }

    if (label === "email") {
      //setStatus("Error: " + label);
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        alert("Please enter a valid email address");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
    alert("Successfully Created");
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }
  return (
    <Card>
      <Card.Header className="bg-info">Create User Account</Card.Header>
      <Card.Body>
        {" "}
        {show ? (
          <>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                disabled={!name && !email && !password}
                onClick={handleCreate}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </>
        ) : (
          <>
            <h5>Successfully Account Created</h5>
            <button
              type="submit"
              className="btnbtn-primary"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
