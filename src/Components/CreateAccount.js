import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import Navigation from './Navigation';

function CreateAccount() {
  const [accountDetails, setAccountDetails] = useState({ name: "", email: "", password: "" });
  const [accountcreated, setAccountCreated] = useState(false);
  const [enteredAllDetails, setEnteredAllDetails] = useState(false)
  const [allAccounts, setAllAcounts] = useState(localStorage.getItem("allAccounts") ? JSON.parse(localStorage.getItem("allAccounts")) : [])

  const changeHandler = e => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (accountDetails.name && accountDetails.email && accountDetails.password) {
      setEnteredAllDetails(true)
    } else {
      setEnteredAllDetails(false)
    }
  }, [accountDetails])

  const submitHandler = e => {
    e.preventDefault();
    console.log(accountDetails);
    setAccountCreated(true)
    localStorage.setItem("AccountDetails", JSON.stringify(accountDetails));
    setAllAcounts([...allAccounts, accountDetails])
    alert("You're account has been created successfully!")
  }

  useEffect(() => {
    localStorage.setItem("allAccounts", JSON.stringify(allAccounts))
  }, [allAccounts])

  return (
    <>
      <Navigation />
      <Card style={{ backgroundColor: "lightblue", width: '18rem', marginTop: "2rem", margin: "auto" }}>
        <Card.Title>Create Account</Card.Title>
        <Form onSubmit={submitHandler} style={{ width: "90%", margin: "auto", paddingTop: "6rem" }} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required name="name" onChange={changeHandler} type="name" placeholder="Enter your Name" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required name="email" onChange={changeHandler} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll always share your email with everyone.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control minLength="8" required name="password" onChange={changeHandler} type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              Mother's Maiden name or First Pet's name here.
            </Form.Text>
          </Form.Group>

          <Button disabled={!enteredAllDetails} variant="primary" type="submit">
            Submit
          </Button>

          <br />

          <Button disabled={!accountcreated} onClick={() => window.location.reload()} variant='primary' style={{ marginTop: "10px" }} >
            Add another account
          </Button>



        </Form>
      </Card>
    </>
  )
}

export default CreateAccount