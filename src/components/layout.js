import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './layout.css'
import '../../node_modules/normalize.css/normalize.css'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.ico'
import Footer from '../components/footer'

const ChildrenContainer = styled.div`
  margin-top: ${props => (props.isIndex ? 0 : '105px')};
`

const Layout = ({
  children,
  isIndex,
  isBlog = false,
  shouldShowNextDestination = false,
}) => (
  <>
    <Header
      isIndex={isIndex}
      isBlog={isBlog}
      shouldShowNextDestination={shouldShowNextDestination}
    />
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <meta name="2fdeccbcacfeee9" content="f0069a37446db760e09735e27c0e157c" />
    </Helmet>
    <ChildrenContainer isIndex={isIndex}>{children}</ChildrenContainer>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool.isRequired,
}

export default Layout
