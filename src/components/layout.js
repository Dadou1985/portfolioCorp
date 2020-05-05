import React from "react"
import PropTypes from "prop-types"
import GoogleFontLoader from 'react-google-font-loader'
import "./css/layout.css"

const Layout = ({ children }) => {

  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
