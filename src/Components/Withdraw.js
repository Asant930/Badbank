import { isInteger } from 'formik';
import React, { useEffect, useState } from 'react'
import { Card, Button, Form } from "react-bootstrap";
import Navigation from './Navigation';

function Withdraw() {

  const [balance, setBalance] = useState(parseInt(localStorage.getItem('Balance')));
  const [withDrawAmount, setDepositAmmount] = useState(0);
  const [entered, setEntered] = useState(false)

  const deposit = () => {

    if (isInteger(withDrawAmount) && withDrawAmount > 0) {
      if (withDrawAmount <= balance) {

        const da = parseInt(withDrawAmount);
        setBalance(balance - da);
        alert(`You've withdrawn $${withDrawAmount} from your account`);
        setDepositAmmount(0)
      } else {
        alert("What are you doing?? You don't have enough Money!")
      }
    } else {
      alert("Error : Only positive numbers are allowed ")
    }
  }

  useEffect(() => localStorage.setItem('Balance', balance), [balance])

  useEffect(() => {
    if (withDrawAmount > 0) {
      setEntered(true)
    } else {
      setEntered(false)
    }
  }, [withDrawAmount]);

  useEffect(() => {
    if (!localStorage.getItem("AccountDetails")) {
      alert("You need an account to view the page");
      window.location.href = "/"
    }
  }, [])

  return (
    <>
      <Navigation />
      <Card style={{ backgroundColor: "lightblue", width: '18rem', marginTop: "8rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>Withdraw</Card.Title>
          <Card.Text style={{ fontSize: "20px", paddingTop: "18px", fontWeight: "bolder", textAlign: "center" }} >
            Balance : ${balance}
          </Card.Text>
          <Form.Group className="mb-3">
            <Form.Label>Withdraw Amount</Form.Label>
            <Form.Control min="0" value={withDrawAmount} required name="deposit" onChange={e => setDepositAmmount(e.target.value)} type="number" placeholder="Enter Deposit Amount" />

          </Form.Group>

          <Button disabled={!entered} onClick={deposit} variant="primary">Withdraw</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Withdraw