import React from 'react'
import { Card } from 'react-bootstrap'
import Navigation from './Navigation';

function HomePage() {
  return (
    <>
      <Navigation />
      <Card
        style={{ backgroundColor: "lightblue", width: "20rem", display: "flex", alignItems: "center", padding: "16px" }}
      >
        <Card.Img src="images/bank.png" variant="top" style={{ width: "15rem", backgroundColor: "lightblue" }} />
        <Card.Title>Welcome to BadBank</Card.Title>
        <Card.Text>Sorry about the Security</Card.Text>
      </Card>
    </>
  );
}

export default HomePage