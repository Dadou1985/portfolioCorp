import React from "react"
import PropTypes from "prop-types"
import GoogleFontLoader from 'react-google-font-loader'
import "./css/layout.css"

const Layout = ({ children }) => {

  return (
    <>
    <GoogleFontLoader
      fonts={[
        {
          font: 'CormorantGaramond',
          weights: [400, '400i'],
        },
        {
          font: 'Roboto Mono',
          weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
