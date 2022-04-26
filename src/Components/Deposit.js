import { isInteger } from 'formik';
import React, { useEffect, useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";
import Navigation from './Navigation';

function Deposit() {

  const [balance, setBalance] = useState(localStorage.getItem("Balance") ? parseInt(localStorage.getItem("Balance")) : 100);
  const [depositAmount, setDepositAmmount] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("AccountDetails")) {
      alert("You need an account to view the page");
      window.location.href = "/"
    }
  }, [])

  const deposit = () => {

    if (isInteger(depositAmount) && depositAmount > 0) {

      const da = parseInt(depositAmount);
      setBalance(balance + da);

      alert(`You've deposited $${depositAmount} into your account`);
      setDepositAmmount(0)
    } else {
      alert("Error : Only positive numbers are allowed ")
    }
  }

  useEffect(() => localStorage.setItem('Balance', balance), [balance])

  useEffect(() => {
    if (depositAmount > 0) {
      setEntered(true)
    } else {
      setEntered(false)
    }
  }, [depositAmount])

  return (
    <>
      <Navigation />
      <Card style={{ backgroundColor: "lightblue", width: '18rem', marginTop: "8rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>Deposit</Card.Title>
          <Card.Text style={{ fontSize: "20px", paddingTop: "18px", fontWeight: "bolder", textAlign: "center" }} >
            Balance : ${balance}
          </Card.Text>
          <Form.Group className="mb-3">
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control min="0" value={depositAmount} required name="deposit" onChange={e => setDepositAmmount(e.target.value)} type="number" placeholder="Enter Deposit Amount" />

          </Form.Group>

          <Button disabled={!entered} onClick={deposit} variant="primary">Deposit</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Deposit