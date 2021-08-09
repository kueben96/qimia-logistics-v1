import * as React from "react"
import Home from '../components/home'
import Why from '../components/why'
import Features from '../components/features'
import Products from '../components/product'
import Contact from '../components/contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'



import Layout from "../components/layout"



const IndexPage = () => (
  <Layout>

  <Home/>
  <Why/>
  <Features/>
  <Products/>
  <Contact/>
    
  </Layout>
)

export default IndexPage
