import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "./Navbar.css"
import { Link } from 'react-router-dom';


const ResNavbar = () => {
  return (
    <div>
     <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className='text-white' >Contact Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-button"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> {/* Align items to the right */}
            <Nav.Link as={Link} to="/add-contact">
              <Button variant="primary">Add Contact</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/all-contact">
              <Button variant="primary">All Contacts</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default ResNavbar
