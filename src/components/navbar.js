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
  const names_obj = data.allSectionsJson.nodes;
  console.log(names_obj)
  let names = names_obj.map(obj =>{ return (obj['name'])})
  console.log(names)
 
return(
    <Navbar collapseOnSelect className="nav-fixed" expand="lg" fixed="top" >
    <Container>
    <Navbar.Brand className="ml-auto" href="#">
      <img
        src={logo}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav className="mr-auto nav-components">    
    {names.map(item => (<Nav.Link className="nav-element" href="#home">{item}</Nav.Link>))}
    </Nav>
  </Navbar.Collapse>
    </Container>
 
</Navbar>
)
}
export default NavbarComp