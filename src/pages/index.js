import * as React from "react"
import styled from 'styled-components';
import { Layout, Hero, About, Work, Code, Wood, Contact } from "./../components"

const StyledMainContainer = styled.main`
  background-color: var(--forest-green);
`;

const IndexPage = () => (
  <StyledMainContainer>
    <title>Sean Warren - Automation Engineer</title> 
  <Layout>
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
