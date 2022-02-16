import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 0;
    h1 {
        margin: 0 0 10px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;
        @media (max-width: 640px) {
        margin: 0 0 20px 2px;
        }
    }
    h2 {
        font-weight: 600;
        color: var(--light-orange);
        text-decoration: wavy underline 2px;
    }
    h3 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        text-decoration: dashed underline 2px;
    }
    p {
        margin: 20px 0 0;
        max-width: 640px;
        color: var(--lightest-orange)
    }
`

const About = () => {
    const one = <h1>Now for the 2nd section</h1>;
    const two = <h2 className="big-heading">haha</h2>;
    const three = <h3 className="big-heading">poopy butthole</h3>;
    const four = (
      <>
        <p>
          I’m a poopy butthole focused on building poopy, butt-centered experiences.
        </p>
      </>
    );
  
    const items = [one, two, three, four];
  
    return (
      <StyledAboutSection>
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
      </StyledAboutSection>
    );
  };
  
  export default About;