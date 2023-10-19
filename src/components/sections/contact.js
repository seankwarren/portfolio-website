import { email } from '@config';
import React from 'react';
import styled from 'styled-components';


const StyledContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40vh;
    padding: calc(var(--nav-height) + 30px) 20px 0;

    h3 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        /* text-decoration: dashed underline 2px; */
        ::before {
            content: '04.  ';
            font-family: var(--font-mono);
            font-size: var(--fz-lg);
        }
    }
    p {
        font-size: var(--fz-lg);
        text-align: center;
        margin: 20px 0 0;
        color: var(--lightest-orange)
    }
    a {
        display: flex;
        align-self: center;
        color: var(--green);
        background-color: transparent;
        border: 1px solid var(--green);
        border-radius: var(--border-radius);
        padding: 0.75rem 1rem;
        font-size: var(--fz-xs);
        font-family: var(--font-mono);
        line-height: 1;
        margin-top: 20px;
        text-decoration: none;
        cursor: pointer;
        font-size: var(--fz-xs);
    }
`

const Contact = () => {
  return (
    <StyledContactSection id="contact">
        <h3>Get In Touch</h3>
        <p>I’m am currently open to new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a href={`mailto:${email}`}>Say Hello!</a>
    </StyledContactSection>
    
  )
}

export default Contact
