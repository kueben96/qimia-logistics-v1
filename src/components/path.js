import '../styles/heroPath.css'
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import path from '../images/Path.png'
 

const HeroPath = () =>{
return(
    <div >
        <img className="path" src={path}></img>
    </div>

)
}

export default HeroPath;