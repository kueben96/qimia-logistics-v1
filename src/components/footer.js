import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'
import {Container, Image} from 'react-bootstrap'
import imgfooter from '../images/Footer Logo.png'


const Footer = () =>{
return(
    <footer>
         <Container>
         <div className="footer">
            <Image className="footer-logo" src={imgfooter} alt="Footer Logo"></Image>
            <span className="footer-copy">© 2019 Copyright Qimia GmbH</span>
         </div>
       
 
       

           
      
    </Container>
    </footer>
   
)
}

export default Footer