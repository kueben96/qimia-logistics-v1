import * as React from "react"
import {  GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col, Image, Container } from 'react-bootstrap'
import '../styles/features.css'
import { useStaticQuery, graphql } from "gatsby"

const Features = () => {

    const data = useStaticQuery(graphql`
query featuresSection{
    sectionsJson(name: {eq: "Features"}) {
        name
        headline
        description
        features {
          feature
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
}
  `)
    const featData = data.sectionsJson
    const features = featData.features
    console.log(features)
    return (

        <Container fluid={true} id="features">
 <section id="features" >
           <Container>
           <div className="heading">
               <h1 className="text-grey">{featData.headline}</h1>
               <span>{featData.description}</span>    
           </div>
           <Row >
           {features.map(feature => (
            <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <GatsbyImage image={getImage(feature.img)} alt={feature.feature} />
                            <span>{feature.feature}</span>
                        </div>
                    </Col>
           ))}
                </Row>
           </Container>  
   </section>
        </Container>
    )
}

export default Features
