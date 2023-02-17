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
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 640px) and (min-height: 200vh) {
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
        color: var(--lightest-orange);
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
  const h1 = <h1>Hi, my name is</h1>;
  const h2 = <h2 className="big-heading">Sean Warren.</h2>;
  const h3 = <h3 className="big-heading">I build things from code and wood.</h3>;
  const h4 = (
    <>
      <p>
        I’m a chemical and software engineer specializing in scientific computing, building tools for data interaction and automation. 
        Recently, I’m focused on exploring modeling, simulation, data visualization and machine learning in full-stack web applications.
        I am currently open to new opportunities.
      </p>
    </>
  );

  const items = [h1, h2, h3, h4];

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