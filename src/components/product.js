import * as React from "react"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import { Row, Col,  Container } from 'react-bootstrap'
import '../styles/product.css'
import { useStaticQuery, graphql } from "gatsby"


const Products = () => {
    const data = useStaticQuery(graphql`
query productSection{
    sectionsJson(name: {eq: "Product"}) {
        name
        headline
        description
        points
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
  }
  `)

console.log(data)
const productsData = data.sectionsJson
const points = productsData.points
const listItems = points.map((point)=> 
<li className="text-orange">{point}</li>
);

    return (

        <Container fluid={true} id="products">
            <section id="products" >
                <Container>
                    <div className="heading">
                        <h1 className="text-orange">{productsData.headline}</h1>
                        <span className="text-white">{productsData.description}</span>
                    </div>
                    <Row>
                        <Col sm={8} md={6}>
                            <GatsbyImage image={getImage(productsData.img)} alt= {productsData.headline}/>
                        </Col>
                        <Col sm={4} md={6}>
                        <div className="bullet">
                        <ul>
                        {listItems}
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
