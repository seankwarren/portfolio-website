import React from 'react';
import styled from 'styled-components';

const StyledCodeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 1000pt;
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
            a {
                align-content: bottom;
                margin-right: 10px;
            }
        }
        li:hover {
            transform: translateY(-5px);
            background-color: var(--trans-green);

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

const ExternalLinkIcon = () => {
    return (
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ebcfb0" stroke-width="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z" fill="#ebcfb0" />
            </g>
        </svg>
    );
}

const GithubLinkIcon = () => {
    return (
        <svg width="25px" height="25px" viewBox="15 -15 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768" />
            <g id="SVGRepo_iconCarrier">
                <path stroke="#ebcfb0" stroke-linecap="round" stroke-linejoin="round" stroke-width="14.4" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />
            </g>
        </svg>
    );
}


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
