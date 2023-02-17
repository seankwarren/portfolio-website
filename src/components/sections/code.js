import React from 'react'
import styled from 'styled-components';
import ExternalLinkIcon from '@components/icons/external-link-icon.svg';
import GithubLinkIcon from '@components/icons/github-link-icon.svg';


const StyledCodeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: calc(var(--nav-height) + 30px) 20px 0;
    
    h2 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        ::before {
            content: '03.  ';
            font-family: var(--font-mono);
            font-size: var(--fz-lg);
        }
    }

    .highlight {
        color: var(--green);
        font-size: var(--fz-sm);
    }

    h3 {
        padding-top: 5px;
    }

    h4 {
        color: var(--lightest-orange);
        font-weight: 300;
        font-size: var(--fz-xs);
    }

    p {
        margin: 10px 0 10px;
        color: var(--lightest-orange)
    }

    ul {
        display: inline-block;
        text-align: left;
        font-family: var(--monospace);
        color: var(--light-orange);
        font-size: var(--fz-md);
        list-style: none;
        
        li {
            background-color: var(--dark-forest-green);
            margin: 30px 10px 30px;
            font-family: var(--font-mono);
            padding: 25px;
            :hover {
                background-color: var(--trans-green);
            }
            a {
                margin-right: 10px;
            }
        }
    }
    svg:hover {
        stroke: var(--green);
        g {
            stroke: var(--green);
            path {
                fill: var(--green);
                stroke: var(--green);
            }
        }
    }
`


const Code = ({ children, isHome }) => {

    const featured_projects = [
        {
            title: "Multiplayer .io Game",
            description: "A websocket-based .io multiplayer game based on the popular board game Splendor.",
            techs: ["Django", "React", "Typescript", "Redis", "RestAPI", "WebSockets"],
            github_link: "https://github.com/seankwarren/splndrIO",
        },
        {
            title: "JWT User Authentication",
            description: "A tutorial for JWT user authentication and api access between a Django backend utilizing the Django Rest Framework and React frontend.",
            techs: ["Django", "React", "RestAPI", "simple_jwt"],
            github_link: "https://github.com/seankwarren/Django-React-jwt-authentication",
            external_link: "https://medium.com/@seankwarren722",
        },
        {
            title: "Physical Modeling and Simulation",
            description: "A sampling of various analytical and numerical models and simulations, ranging from the newtonion physics of a slinky drop, to the simulation of 2D excitable systems with the FitzHugh-Nagumo Model.",
            techs: ["Javascript", "HTML", "CSS", "Abubu.js", "WebGL", "GLSL"],
            github_link: "https://github.com/seankwarren/Modeling-and-Simulation-Samples",
            external_link: "https://seankwarren.github.io/Flocking/",
        }
    ]

    const other_projects = [
        {
            title: "Multiplayer .io Game",
            description: "A websocket-based .io multiplayer game based on the popular board game Splendor.",
            techs: ["Django", "React", "Typescript", "Redis", "RestAPI", "WebSockets"],
            github_link: "https://github.com/seankwarren/splndrIO",
        },
        {
            title: "JWT User Authentication",
            description: "A tutorial for JWT user authentication and api access between a Django backend utilizing the Django Rest Framework and React frontend.",
            techs: ["Django", "React", "RestAPI", "simple_jwt"],
            github_link: "https://github.com/seankwarren/Django-React-jwt-authentication",
            external_link: "https://medium.com/@seankwarren722",
        },
        {
            title: "Physical Modeling and Simulation",
            description: "A sampling of various analytical and numerical models and simulations, ranging from the newtonion physics of a slinky drop, to the simulation of 2D excitable systems with the FitzHugh-Nagumo Model.",
            techs: ["Javascript", "HTML", "CSS", "Abubu.js", "WebGL", "GLSL"],
            github_link: "https://github.com/seankwarren/Modeling-and-Simulation-Samples",
            external_link: "https://seankwarren.github.io/Flocking/",
        }
    ]

    return (
        <StyledCodeSection id="code">
            <h2>Some things I've built</h2>
            <ul>
                { featured_projects.map((project) => {
                    return (
                        <li>
                            <span className="highlight">Featured Project</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <h4>{project.techs.map((tech) => {
                                return (
                                    <span>{tech}&nbsp;&nbsp;</span>
                                )
                            })}</h4>
                            {project.external_link && 
                            <a href={project.external_link} target='_blank'>
                                <ExternalLinkIcon />
                            </a>}
                            {project.github_link &&
                            <a href={project.github_link} target='_blank'>
                                <GithubLinkIcon />
                            </a>}
                        </li>
                    )
                })}
            </ul>
            {children}
        </StyledCodeSection>
    )
}

export default Code