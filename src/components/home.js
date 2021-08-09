import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Container } from 'react-bootstrap'
import path from '../images/Path.png'
import '../styles/home.css'


const Home = () => {
  return (

    <section className="hide">
       <Container>
      <Row id="home">
        <Col sm={4}>
        <div  className="wrapper">
        <h1 className="text-orange h1-xx-large">Powerful Logistics Platform!</h1>
        <p >QLogistics is the next generations logistics platform.</p>
        </div>
        
        </Col>
        <Col sm={8}><StaticImage id="hero-laptop" src="../images/Promo Mockup.png" alt="A dinosaur" /></Col>
      </Row>
    </Container>
    <Container fluid={true}>
    <img id="path" src={path}></img>
    </Container>
    

        
    </section>
   
     
    



  )
}

export default Home
