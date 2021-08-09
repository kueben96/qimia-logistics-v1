import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Image, Container } from 'react-bootstrap'
import '../styles/product.css'
import dash from '../images/Group 2.png'
import oval from '../images/Oval Copy 3.png'



const Products = () => {
    return (

        <Container fluid={true} id="products">
            <section >
                <Container>
                    <div className="heading">
                        <h1 className="text-orange">Product</h1>
                        <span className="text-white">Easy to use dashboard supporting every step of delivery process</span>
                    </div>

                    <Row>
                        <Col sm={8}>
                            <StaticImage id="hero-laptop" src="../images/Group 2.png" alt="A dinosaur" />

                        </Col>
                        <Col sm={4}>
                        <div className="bullet">
                        <ul>
                        <li className="text-orange">Operator, Driver and Customer Interfaces</li>
                        <li className="text-orange">Realtime tracking of delivery cars</li>
                        <li className="text-orange">Developed for iOS and Android</li>
                        </ul>
                        </div>
                       

                        </Col>
                    </Row>


                </Container>

            </section>

        </Container>






    )
}

export default Products
