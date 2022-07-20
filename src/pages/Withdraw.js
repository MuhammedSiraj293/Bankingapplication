import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import UserContext from "../context";
export default function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [cashback, setCashback] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(true);

  var len = ctx.users.length;
  var Avail;
  var bal = ctx.users[len - 1].balance;
  console.log(bal);
  const [availbalance, setAvailBalance] = React.useState(bal);

  function validate(field, label) {
    if (isNaN(field)) {
      setStatus("Error: " + label);
      alert("Please Enter Valid Number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) > bal) {
      setStatus("Error: " + label);
      alert("Insufficient Balance");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) <= 0) {
      setStatus("Error: " + label);
      alert(" Please Enter a Value greater than 0");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
  function handleCreate() {
    if (!validate(cashback, "cashback")) return;
    Avail = bal - parseInt(cashback);
    setAvailBalance(Avail);
    ctx.users[len - 1].balance = Avail;
    setShow(false);
    alert("Successfully Withdrawn $" + cashback);
  }
  function clearForm() {
    setCashback("");
    setShow(true);
  }
  return (
    <Card>
      <Card.Header className="bg-info">Withdraw from Account</Card.Header>
      <Card.Body>
        {" "}
        {show ? (
          <>
            Balance {availbalance} <br />
            <br />
            <br />
            WithDraw <br />
            <input
              type="input"
              className="form-control"
              id="cashback"
              placeholder="Enter Amount to be withdrawn"
              value={cashback}
              onChange={(e) => setCashback(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btnbtn-primary"
              disabled={!cashback}
              onClick={handleCreate}
            >
              Withdraw
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Successful Transaction</h5>
            Balance {availbalance}
            <br />
            <br />
            <button
              type="submit"
              className="btnbtn-primary"
              onClick={clearForm}
            >
              Add Another Withdraw
            </button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
