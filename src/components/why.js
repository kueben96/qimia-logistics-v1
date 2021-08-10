import * as React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col, Image, Container } from 'react-bootstrap'
import path from '../images/Path.png'
import '../styles/home.css'
import logo from '../images/Logo.png'
import easy from '../images/Easy to Integrate.png'
import practical from '../images/Practical Features.png'
import fast from '../images/Fast and Scalable.png'
import { useStaticQuery, graphql } from "gatsby"


const Why = () => {

    const data = useStaticQuery(graphql`
query whySection{
    sectionsJson(name: {eq: "Why"}) {
      name
      headline
      reasons {
        reason
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    site {
        siteMetadata {
          logo
        }
      }
  }
  `)
  const logo_src = data.site.siteMetadata.logo
  console.log(logo_src);
  const whyData = data.sectionsJson
  console.log(whyData)
  const reasons = whyData.reasons
  console.log(reasons)
    return (

        <section id="why">
            <Container>
                <div id="why-header">
                    <h1 className="text-orange">{whyData.headline}</h1>
                    <img id="h1-logo" src={logo}></img>
                </div>
                <Row >
                {reasons.map(reason => (
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <GatsbyImage image={getImage(reason.img)} alt={reason.reason} />
                            <span className="text-orange">{reason.reason}</span>
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>
    )
}

export default Why
