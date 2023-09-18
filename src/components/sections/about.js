import React/* , { useState, useEffect } */ from 'react';
import styled from 'styled-components';
import headshot from '/src/images/headshot.jpg'

const StyledAboutSection = styled.section`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
    a {
        align-item: center;
        position: relative;
        font-weight: 600;
        font-size: clamp(26px, 5vw, var(--fz-heading));
        color: var(--light-orange);
    }
    p {
        margin: 20px 0 0;
        color: var(--lightest-orange)
    }
    a {
        color: var(--green);
        text-decoration: none;
        :visited {
            color: var(--green);
        }
    }
    ul {
        padding-left: 0;
        display: inline-block;
        text-align: left;
        font-family: var(--monospace);
        color: var(--light-orange);
        font-size: var(--fz-md);
        columns: 2;
        
        li {
            margin: 0 25px 5px 25px;
            font-family: var(--font-mono);
            ::marker {
                display: none;
            }
        }
    }
    .headshot-container {
        margin-top: 20px;
        align-self: center;
        background-color: var(--green);
        border-radius: 10px;
    }
    img {
        transform: translate(-5px, -5px);
        border-radius: 10px;
        vertical-align: top;
        z-index: 1;
        width: 200px;
        height: 250px;
        height: auto;
        mix-blend-mode: hard-light;
        /* transform: scaleX(-1); */
        :hover {
            mix-blend-mode: normal;
        }
    }
`

const About = () => {
    const head = <a id="about" className="numbered-heading">About Me</a>;
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
        <p>
        Fast-forward to today, and I’ve had the privilege of studying electrochemistry with DFT calculations on a supercomputer and publishing my <a href="https://www.researchgate.net/publication/337302234_Electron_Transfer_Kinetics_at_Graphene_Quantum_Dot_Assembly_Electrodes">
            first paper
        </a>, developing battery manufacturing processes and automating lab work at an <a href="https://www.binergyscientific.com/">
            R&D start-up
        </a>, and solving supply chain challenges and automating workflows for the chemical industry at a <a href="https://omp.com/">
            large enterprise software company:
        </a>
        </p>

        <p>
            Here are a few technologies I've been working with recently:
        </p>

        <ul>
            <li>
                Typescript
            </li>
            <li>
                React
            </li>
            <li>
                Node.js
            </li>
            <li>
                Django
            </li>
            <li>
                Gatsby
            </li>
            <li>
                Pytorch
            </li>
        </ul>
      </>
    );
  
    const items = [head, body];
  
    return (
      <StyledAboutSection id="about">
        {items.map((item, i) => (
            <div key={i}>{item}</div>
        ))}
        <div className='headshot-container'>
            <div></div>
            <img alt="Headshot" src={headshot}/>
        </div>
      </StyledAboutSection>
    );
  };
  
  export default About;
