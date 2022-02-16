import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 0;
    @media (max-width: 640px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }
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
    }
    h3 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
    }
    p {
        margin: 20px 0 0;
        max-width: 640px;
        color: var(--lightest-orange)
    }
`;

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sean Warren.</h2>;
  const three = <h3 className="big-heading">I build things from code and wood.</h3>;
  const four = (
    <>
      <p>
        I’m a software engineer specializing in building scientific computing and data visualization tools
        and experiences. Currently, I’m focused on building accessible, user-centered products.
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
    </StyledHeroSection>
  );
};

export default Hero;