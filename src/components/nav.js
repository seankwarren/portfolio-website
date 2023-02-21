import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '@config';
import Menu from './menu';
import Icon from '@components/icons/icon.svg';
import ResumePDF from '/src/resume.pdf'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: var(--forest-green);
    opacity: 90%;
    transition: var(--transition);
    box-sizing: border-box;
    box-shadow: 0 0 10px var(--dark-forest-green);
    
    @media (max-width: 1080px) {
        padding: 0 40px;
    }
    @media (max-width: 770px) 
        padding: 0 25px;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        a {
            color: var(--green);
            width: 42px;
            height: 42px;
            &:hover,
            &:focus {
                svg {
                fill: var(--green-tint);
                }
            }
            svg {
                fill: none;
                transition: var(--transition);
                user-select: none;
            }
        }
    }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 770px) {
    display: none;
  }
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-sm);
      transition: var(--transition);
        a {
            
            padding: 10px;
            text-decoration: none;
            color: var(--lightest-orange);
            &:before {
            content: '0' counter(item) '.';
            margin-right: 5px;
            color: var(--green);
            font-size: var(--fz-xs);
            text-align: right;
            }
        }
        &:hover {
            transform: translateY(-3px);
        }
    }
  }
  .resume-button {
    display: flex;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    margin-left: 15px;
    font-size: var(--fz-xs);
    &:hover {
        background-color: var(--trans-green);
    }
  }
`;

const Nav = () => {

  return (
    <StyledHeader>
        <StyledNav>
            <div className="logo" tabIndex="-1">
                <Icon />
            </div>
            <StyledLinks>
            <ol>
                {navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                        <Link to={url}>{name}</Link>
                    </li>
                ))}
            </ol>
            <div>
                <a className="resume-button" download href={ResumePDF} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
            </StyledLinks>
            <Menu />
        </StyledNav>
    </StyledHeader>
  );
};

export default Nav;