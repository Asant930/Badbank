import React from 'react'
import { Navbar, Container, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">BadBank</Navbar.Brand>
          <Nav className="me-auto">

            <OverlayTrigger placement='bottom' overlay={<Tooltip >Create account here!</Tooltip>}>

              <Nav.Link href="/createaccount">Create Account</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip >Deposit your well earned money!</Tooltip>}>

              <Nav.Link href="/deposit">Deposit</Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger placement='bottom' overlay={<Tooltip >Treat yourself!</Tooltip>}>


              <Nav.Link href="/withdraw">Withdraw</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip >Account Details</Tooltip>}>

              <Nav.Link href="/alldata">All Data</Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation