import * as React from "react"
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Hero, About } from "./../components"

// const StyledMainContainer = styled.main`
//   counter-reset: section;
// `;
const IndexPage = ({ location }) => (
  <>
  <Layout location={location}>
    <Hero />
    <About />
    <Work />
    <Code />
    {/* <Wood /> */}
    <Contact />
  </Layout>
  </StyledMainContainer>
)

export default IndexPage
