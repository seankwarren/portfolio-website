import * as React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Work, Code, Wood } from "./../components"

const StyledMainContainer = styled.main`
  counter-reset: section;
  background-color: var(--dark-forest-green);
`;

const IndexPage = () => (
  <>
  <Layout>
    <Hero />
    <About />
    <Work />
    <Code />
    <Wood />
  </Layout>
  </>
)

export default IndexPage
