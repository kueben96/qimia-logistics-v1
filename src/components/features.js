import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Image, Container } from 'react-bootstrap'
import '../styles/features.css'
import item1 from '../images/Group 11.png'
import item2 from '../images/Group 7.png'
import item3 from '../images/Group 21.png'
import address from '../images/Group.png'
import opti from '../images/Group Copy.png'
import tasks from '../images/optimization.png'


const Features = () => {
    return (

        <Container fluid={true} id="features">
 <section id="features" >
           <Container>
           <div className="heading">
               <h1 className="text-grey"> Features</h1>
               <span>There are lots of reasons to have QLogistics!</span>    
           </div>

           <Row >


                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={opti} alt="" />
                            <span>Optimization of the Vehicle Routing Domain</span>
                        </div>
                    </Col>

                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={tasks} alt="" />
                            <span>Up to 30.000 tasks within minutes</span>
                        </div>
                    </Col>
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={address} alt="" />
                            <span>Instant Address Changes </span>
                        </div>
                    </Col>
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={item1} alt="" />
                            <span>Live Driver Tracking</span>
                        </div>
                    </Col>
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={item2} alt="" />
                            <span>Handling Capacities, time windows, priorities</span>
                        </div>
                    </Col>
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }}>
                        <div className="wrap-thumb">
                            <img src={item3} alt="" />
                            <span>Pickup and delivery Problems <br />(e.g. Ride sharing)</span>
                        </div>
                    </Col>

                  



                </Row>
           </Container>
            
           

          
       
   </section>

        </Container>
       





    )
}

export default Features
