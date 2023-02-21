import React from 'react'
import styled from 'styled-components';
import ExternalLinkIcon from '@components/icons/external-link-icon.svg';
import GithubLinkIcon from '@components/icons/github-link-icon.svg';


const StyledCodeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 120vh;
    padding-top: calc(var(--nav-height) + 30px); 
    max-width: 75%;
    
    h2 {
        align-self: start;
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        padding-left: 10px;
        ::before {
            content: '03.  ';
            font-family var(--font-mono);
            font-size: var(--fz-lg);
        }
    }

    .highlight {
        color: var(--green);
    }

    header>span {
        font-size: var(--fz-sm);
    }

    h3 {
        padding-top: 5px;
    }

    h4 {
        display: flex;
        flex-wrap: wrap;
        color: var(--green);
        font-weight: 300;
        font-size: var(--fz-xs);
        line-height: 1.5em;
    }

    p {
        margin: 10px 0 10px;
        color: var(--lightest-orange)
    }

    .featured-projects {
        padding: 0;
        display: grid;
        text-align: left;
        font-family: var(--monospace);
        color: var(--light-orange);
        font-size: var(--fz-md);
        list-style: none;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 15px;
        position: relative;
        
        li {
            transition: var(--transition);
            border-radius: 7px;
            display: flex;
            flex-direction: column;
            background-color: var(--dark-forest-green);
            margin: 15px;
            font-family: var(--font-mono);
            padding: 25px;
            justify-content:space-between;
            :hover {
                /* margin: 5px; */
                transform: translateY(-5px);
                /* background-color: var(--trans-green); */
            }
            a {
                align-content: bottom;
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
            description: "A real-time .io multiplayer game based on the popular board game Splendor, utilizing React and WebSockets.",
            techs: ["Django", "React", "Typescript", "Redis", "RestAPI", "WebSockets"],
            github_link: "https://github.com/seankwarren/splndrIO",
        },
        {
            title: "JWT User Authentication",
            description: "A tutorial for JSON Web Token user authentication and api access between a Django backend utilizing the Django Rest Framework and React frontend.",
            techs: ["Django", "React", "RestAPI", "simple_jwt", "Node.js"],
            github_link: "https://github.com/seankwarren/Django-React-jwt-authentication",
            external_link: "https://medium.com/@seankwarren722",
        },
        {
            title: "Physical Modeling and Simulation",
            description: "A sampling of various analytical and numerical models and simulations, ranging from the newtonion physics of a slinky drop, to the simulation of 2D excitable systems with the FitzHugh-Nagumo Model.",
            techs: ["Jupyter", "Javascript", "HTML", "CSS", "Abubu.js", "WebGL", "GLSL"],
            github_link: "https://github.com/seankwarren/Modeling-and-Simulation-Samples",
            external_link: "https://seankwarren.github.io/Flocking/",
        },
        {
            title: "Portfolio Website 1.0",
            description: "A responsive, mobile-friendly webpage built in React using styled-components. ",
            techs: ["React", "styled-components", "Gatsby", "CSS", "GraphQL"],
            github_link: "https://github.com/seankwarren/Modeling-and-Simulation-Samples",
            external_link: "https://seankwarren.gatsbyjs.io/",
        },
        {
            title: "Water Quality Analysis",
            description: "An examination of water quality in the Atlanta watershed with a focus on identifying neglected areas and potential strategies for improving water quality monitoring ",
            techs: ["Jupyter", "Python", "Scipy", "Pandas", "Numpy", "TimeSeries", "GIS-data"],
            github_link: "https://github.com/seankwarren/Water-Quality-Analysis",
        },
        {
            title: "Metaballs",
            description: "A marching squares root finding algorithm for an artistic rendering of metaballs",
            techs: ["Javascript", "HTML", "CSS"],
            github_link: "https://github.com/seankwarren/react-metaballs",
            external_link: "https://seankwarren.github.io/metaballs/"
        },

    ]

    return (
        <StyledCodeSection id="code">
            <h2>Some things I've built</h2>
            <ul className='featured-projects'>
                { featured_projects.map((project) => {
                    return (
                        <li>
                            <header>
                                <span className="highlight">Featured Project</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </header>
                            <footer>
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
                            </footer>
                        </li>
                    )
                })}
            </ul>
            {children}
        </StyledCodeSection>
    )
}

export default Code