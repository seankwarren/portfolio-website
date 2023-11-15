import { Analytics } from '@vercel/analytics/react';
import React from "react";
import styled from 'styled-components';
import { About, Code, Contact, Hero, Layout, Work } from "./../components";

const StyledMainContainer = styled.main`
  counter-reset: section;
  background-color: var(--dark-forest-green);
`;

const IndexPage = () => (
  <>
  <Analytics />
  <Layout>
    <Hero />
    <About />
    <Work />
    <Code />
    {/* <Wood /> */}
    <Contact />
  </Layout>
  </>
)

export default IndexPage
