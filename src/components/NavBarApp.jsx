import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

const NavBarApp = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        
        <LinkContainer to='/'>
        <Navbar.Brand >Client-Contact</Navbar.Brand>
        </LinkContainer>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to='/'>
          <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/adduser'>
          <Nav.Link href="#link">Add Client</Nav.Link>
          </LinkContainer>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarApp