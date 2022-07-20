import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useContext } from "react";
import UserContext from "../context";
export default function Deposit() {
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState("");
  const [status, setStatus] = React.useState("");
  var len = ctx.users.length;
  var bal = ctx.users[len - 1].balance;
  const [availbalance, setAvailBalance] = React.useState(bal);
  const [show, setShow] = React.useState(true);
  function validate(field, label) {
    if (isNaN(field)) {
      setStatus("Error: " + label);
      alert("Please Enter Valid Number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) <= 0) {
      setStatus("Error: " + label);
      alert(" Please Enter a Value greater than");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Avail;

    Avail = bal + parseInt(deposit);
    setAvailBalance(Avail);
    ctx.users[len - 1].balance = Avail;
    setShow(false);
    alert("Successfully Deposited $" + deposit);
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }
  return (
    <Card>
      <Card.Header className="bg-info">Deposit in your Account</Card.Header>
      <Card.Body>
        {" "}
        {show ? (
          <>
            Balance {availbalance} <br />
            <br />
            <br />
            Deposit <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Enter Amount to be deposited"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btnbtn-primary"
              disabled={!deposit}
              onClick={handleCreate}
            >
              Deposit
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
              Add Another Deposit
            </button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
