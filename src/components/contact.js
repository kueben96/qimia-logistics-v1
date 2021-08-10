import * as React from "react"
import { Row, Col, Image, Container } from 'react-bootstrap'
import '../styles/contact.css'
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";




const Contact = () => {
    return (
        <Container fluid={true} id="contact">
            <section id="contact" >
                <Container>
                    <div className="heading">
                        <h1 className="text-orange">Contact</h1>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <div className="wrap">
                                <h1 className="text-orange">So Simple,<br />So Powerful! </h1>
                                <div>
                                    <span className="text-white">Got a question? We are here to help!<br /></span>
                                    <span className="text-white">Fill up the form to get in touch with us on your enquiries</span>
                                </div>

                            </div>

                        </Col>
                        <Col sm={6}>
                            <div className="contact-form">
                                <h2 className="text-orange">CONTACT US</h2>
                                <form className="form-inputs" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input placeholder="Fullname" className="form-input" type="email" name="email" />
                                    <input placeholder="Email" className="form-input" type="text" name="name" />
                                    <textarea placeholder="Describe your project" className="form-input" type="text" name="message" />
                                    <Button type="submit" className="btn-yellow">Send</Button>
                                </form>
                                
                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>
        </Container>






    )
}

export default Contact
