import React/* , { useState, useEffect } */ from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
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
        align-item: center;
        position: relative;
        font-weight: 600;
        font-size: clamp(26px, 5vw, var(--fz-heading));
        color: var(--light-orange);
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
    const head = <h2 className="numbered-heading">About Me</h2>;
    const body = (
      <>
        <p>
          Hello! My name is Sean and I enjoy building things with my hands, on a keyboard, in a lab, or with a chiesel. 
          My interest in web development started in 2019 when I took a class utilizing javascript and html for 
          building and displaying simulations as research and education tools -- turns out hacking together a 
          version of Craig Reynolds's flocking simulation taught me a lot about HTML, CSS, and Javascript. 
        </p>
        <p>
          Fast forward to today, and I've been afforded the opportunity of working at a startup military R&D lab and a leader in the 
          supply chain planning industry. My main focus these days is building custom tools for engineers and 
          scientists to do more effective work, from lab and manufacturing automation to enabling faster and more effective
          data visualization and analysis. 
        </p>
        <p>
          When I'm not behind a screen, I like to build classy furniture 
          and hike anywhere the sun shines and my two feet can carry me.
        </p>
      </>
    );
  
    const items = [head, body];
  
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