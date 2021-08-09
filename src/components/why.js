import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Image, Container } from 'react-bootstrap'
import path from '../images/Path.png'
import '../styles/home.css'
import logo from '../images/Logo.png'
import easy from '../images/Easy to Integrate.png'
import practical from '../images/Practical Features.png'
import fast from '../images/Fast and Scalable.png'


const Why = () => {
    return (

        <section id="why">
            <Container>
                <div id="why-header">
                    <h1 className="text-orange">Why</h1>
                    <img id="h1-logo" src={logo}></img>
                </div>


                <Row >


                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={fast} alt="Fast and Scalable" />
                            <span className="text-orange">Fast and Scalable</span>
                        </div>

                    </Col>

                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={easy} alt="Easy to Integrate" />
                            <span className="text-orange">Easy to Integrate</span>
                        </div>

                    </Col>
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={practical} alt="Cost Efficient" />
                            <span className="text-orange">Cost Efficient</span>
                        </div>

                    </Col>



                </Row>
            </Container>


        </section>






    )
}

export default Why
