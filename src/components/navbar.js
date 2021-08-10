import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, Container} from 'react-bootstrap'
import logo from '../images/Logo.png'
import '../styles/navbar.css'
import { useStaticQuery, graphql } from "gatsby"

const NavbarComp = () =>{

  const data = useStaticQuery(graphql`
query sectionNames{
  allSectionsJson {
    nodes {
      name
    }
  }
}
  `)
  
  const names_obj = data.allSectionsJson.nodes
  console.log(names_obj)
  let names = names_obj.map(obj =>{ return (obj['name'])})
  console.log(names)

  const navItems = names.map((n) => 
  <Nav.Link className="nav-element" href="#home">{n}</Nav.Link>
  );

  
  
return(
    <Navbar collapseOnSelect className="nav-fixed" expand="lg" fixed="top" >
    <Container>
    <Navbar.Brand className="ml-auto" href="#home">
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav className="mr-auto nav-components">
      <Nav.Link className="nav-element" href="#home">Home</Nav.Link>
      <Nav.Link className="nav-element"  href="#why">Why QLogistics?</Nav.Link>
      <Nav.Link  className="nav-element" href="#features">Features</Nav.Link>
      <Nav.Link className="nav-element"  href="#products">Product</Nav.Link>
      <Nav.Link  className="nav-element" href="#contact">Contact</Nav.Link>
     
     
    </Nav>
  </Navbar.Collapse>
    </Container>
 
</Navbar>
)
}

export default NavbarComp