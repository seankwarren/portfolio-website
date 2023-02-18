import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import headshot from '/src/images/headshot.png'

const StyledAboutSection = styled.section`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
    align-items: flex-start;
    min-height: 140vh;
    padding: calc(var(--nav-height) + 30px) 20px 0;

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
    h3 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        /* text-decoration: dashed underline 2px; */
        ::before {
            content: '01.  ';
            font-family: var(--font-mono);
            font-size: var(--fz-lg);
        }
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
    .img-filter {}
`

const About = () => {
    const one = <h3 className="big-heading">About Me</h3>;
    const two = (
      <>
        <p>
        Hello! My name is Sean and I enjoy creating things, both on the internet, and in the woodshop. 
        My interest in web development started back in 2019 when I took a class at <a>Georgia Tech</a> that used javascript to run 
        physical simulations of complex systems - turns out hacking together some interactive web-based simulations taught 
        me alot about HTML & Javascript!
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
                Javascript (ES6+)
            </li>
            <li>
                React
            </li>
            <li>
                Node.js
            </li>
            <li>
                Typescript
            </li>
            <li>
                Django
            </li>
            <li>
                Postgres
            </li>
        </ul>
      </>
    );
  
    const items = [one, two];
  
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