import * as React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col, Container } from 'react-bootstrap'
import path from '../images/Path.png'
import '../styles/home.css'
import { useStaticQuery, graphql } from "gatsby"


const Home = () => {

  const data = useStaticQuery(graphql`
query homeSection{
  sectionsJson(name: {eq: "Home"}) {
    id
    name
    description
    headline
    img{
			childImageSharp{
				gatsbyImageData
      }
    }
  }
}
  `)
//<StaticImage id="hero-laptop" src={data.sectionsJson.img.childImageSharp} alt="A dinosaur" />

console.log(data.sectionsJson.img.absolutePath)
  return (

    <section className="hide">
      <Container>
        <Row id="home">
          <Col sm={4}>
            <div className="wrapper">
              <h1 className="text-orange h1-xx-large">{data.sectionsJson.headline}</h1>
              <p> {data.sectionsJson.description}</p>
            </div>

          </Col>
          <Col sm={8}>
          <GatsbyImage image={getImage(data.sectionsJson.img)} alt="Hero Image"></GatsbyImage>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <img id="path" src={path}></img>
      </Container>



    </section>






  )
}

export default Home
