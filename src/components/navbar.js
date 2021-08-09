import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, Container} from 'react-bootstrap'
import logo from '../images/Logo.png'
import '../styles/navbar.css'

const NavbarComp = () =>{
return(
    <Navbar collapseOnSelect className="nav-fixed" expand="lg" variant="dark" >
    <Container>
    <Navbar.Brand className="ml-auto" href="#home">
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end " id="responsive-navbar-nav">
    <Nav className="mr-auto nav-components">
      <Nav.Link className="nav-element" href="#home">Home</Nav.Link>
      <Nav.Link href="#why">Why QLogistics?</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#product">Product</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
     
     
    </Nav>
  </Navbar.Collapse>
    </Container>
 
</Navbar>
)
}

export default NavbarComp