import * as React from "react"
import PropTypes from "prop-types"
import NavbarComp from './navbar'
import '../styles/header.css'


const Header = ({ siteTitle }) => (
  <header>

  <NavbarComp/>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
