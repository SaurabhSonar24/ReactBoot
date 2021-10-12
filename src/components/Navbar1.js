import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button,Container,Row,Col,NavDropdown,Navbar,Nav} from 'react-bootstrap'

export class Navbar1 extends Component {
   

    render() {
        return (
            <div>
                   {/* <Button variant="primary">Primary</Button> */}
                   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" style={{paddingLeft:"300px"}}>Home</Nav.Link>
        <Nav.Link href="#link"style={{paddingLeft:"30px"}}>About US</Nav.Link>
        <Nav.Link href="#home"style={{paddingLeft:"30px"}}>Gallery</Nav.Link>
        <Nav.Link href="#home"style={{paddingLeft:"30px"}}>Contact Us</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}

export default Navbar1
