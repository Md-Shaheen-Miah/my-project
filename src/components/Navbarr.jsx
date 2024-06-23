import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body"style={{position:'fixed',width:'100%'}}>
      <Container style={{}}>
        <Navbar.Brand style={{color:'#ffffff'}} href="#home">Pos Software</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'#ffffff'}} href="#features">Features</Nav.Link>
            <Nav.Link style={{color:'#ffffff'}} href="#pricing">Pricing</Nav.Link>
            <NavDropdown style={{color:'#ffffff'}} title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item style={{color:'#ffffff'}} href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'#ffffff'}} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{color:'#ffffff'}} href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link style={{color:'#ffffff'}} href="#deets">More deets</Nav.Link>
            <Nav.Link style={{color:'#ffffff'}} eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navbarr;