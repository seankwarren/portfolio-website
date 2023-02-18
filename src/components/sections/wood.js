import React from 'react'
import styled from 'styled-components';

const StyledWoodSection = styled.section`
    padding: calc(var(--nav-height) + 30px) 20px 100px;
    margin-top: 100px;
    max-width: 640px;
    min-height: 80vh;
    
    h2 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        ::before {
            content: '04.  ';
            font-family: var(--font-mono);
            font-size: var(--fz-lg);
        }
    }

    .highlight {
        color: var(--green);
    }

    header>span {
        font-size: var(--fz-sm);
    }
`


const Wood = ({ children }) => {

    return (
        <StyledWoodSection id="wood">
            <h2>Some <span className="highlight">other</span> things I've built</h2>
            {children}
        </StyledWoodSection>
    )
}

export default Wood