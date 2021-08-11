import * as React from "react"
import { Row, Col, Container } from 'react-bootstrap'
import '../styles/contact.css'
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "reakit/Button";




const Contact = () => {

    const data = useStaticQuery(graphql`
query contactSection{
    sectionsJson(name: {eq: "Contact"}) {
        name
        headline_1
        headline_2
        description_1
        description_2
        headline_form
      }
  }
  `)
    const contactData = data.sectionsJson

    return (
        <Container fluid={true} id="contact">
            <section id="contact" >
                <Container>
                    <div className="heading">
                        <h1 className="text-orange">{contactData.name}</h1>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <div className="wrap">
                                <h1 className="text-orange  h1-xx-large">{contactData.headline_1}</h1>
                                <h1 className="text-orange h1-xx-large">{contactData.headline_2}</h1>
                                <span className="text-white">{contactData.description_1} </span>
                                <span className="text-white">{contactData.description_2} </span>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="contact-form">
                                <h2 className="text-orange">{contactData.headline_form.toUpperCase()}</h2>
                                <form className="form-inputs" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input placeholder="Fullname" className="form-input" type="text" name="name" />
                                    <input placeholder="Email" className="form-input" type="email" name="email" />
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
