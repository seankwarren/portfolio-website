import React, { useState } from "react";
import styled from 'styled-components';

const StyledWorkSection = styled.section`

    /* margin: 0px auto; */
    padding: calc(var(--nav-height) + 30px) 20px 100px;
    max-width: 640px;
    min-height: 400pt;

    .inner {
        display: flex;
        @media(max-width: 770px) {
            flex-direction: column;
        }
    }

    h3 {
        margin: 10px 0 40px 0;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--lightest-red);
        line-height: 0.9;
        ::before {
            content: '02.  ';
            font-family: var(--font-mono);
            font-size: var(--fz-lg);
        }
    }

    h2 {
        font-size: var(--fz-lg);
        color: var(--lightest-orange);
        padding: 0;
        margin: 0 0 5px 20px;
    }

    .company {
        color: var(--light-orange)
    }

    h4 {
        font-size: var(--fz-sm);
        font-weight: 400;
        color: var(--lightest-orange);
        margin: 0 0 15px 20px;
    }

    p {
        white-space: pre-wrap;
        margin: 0 0 10px 20px;
        /* max-width: clamp(200px, 600px, 800px); */
        /* @media (max-width: 515px) {
            max-width: 300px;
        } */
        color: var(--lightest-orange);
        font-size: var(--fz-lg);
    }
    #buttons {
        position: relative;
        z-index: 3;
        width: max-content;
        padding: 0 0 10px 0;
        margin: 0px;
        list-style: none;
        @media(max-width: 770px) {
            padding: 0 0 10px 20px;
        }
    }
    button {
        cursor: pointer;
        border: 0px none;
        border-radius: 0px;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: var(--transition);
        display: flex;
        -moz-box-align: center;
        align-items: center;
        width: 100%;
        height: var(--tab-height);
        padding: 0px 20px 2px;
        border-left: 2px solid var(--lightest-orange);
        background-color: var(--transparent);
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        text-align: left;
        white-space: nowrap;

        &.active {
            font-weight: 900;
            background-color: var(--trans-green);
            border-left: 2px solid var(--green);
        }
    }

    button:hover {
        background-color: var(--trans-green);
    }
    
`

const Work = (props) => {

    const workList = [
        {
            title: 'Undergraduate Researcher',
            company: 'MGSU',
            dates: 'August 2015 - May 2016' ,
            description: '\tI worked on research into photoactive azo-crown ether derivates for the selective capture of alkaline and alkali-earth metal ligands. The goal was to investigate materials for use in lead removal from potable water systems.',
        },
        {
            title: 'Undergraduate Researcher',
            company: 'BGSU - Argonne',
            dates: 'December 2016 - July 2017' ,
            description: '\tDuring my research experience at Bowling Green State University, in collaboration with Argonne National Lab, I explored the catalytic properties of doped graphene quantum dots in Oxygen Evolution and Reduction reactions. Through DFT simulations and material synthesis and characterization using cyclic voltammetry, I contributed to significant strides in characterizing these materials, which were being analyzed as models for graphene nanoribbons.\n\n\tAs part of this research, I tackled two main areas of focus. Firstly, I identified potential ways to reduce the high-performance computing (HPC) access costs for simulations, leading to faster and more cost-effective analyses of the data. Secondly, I leveraged extensive literature reviews and sythesis attempts to improve the reaction yields and overall quality of the synthesized materials, thus helping to pave the way for further more accurate measurements.',
        },
        {
            title: 'Test Engineer',
            company: 'Binergy Scientific',
            dates: 'May 2019 - January 2020' ,
            description: '\tAt Binergy, I tackled two challenging and distinct projects:\n\n\tIn one, I worked on the development of a Quartz Crystal Microbalance(QCM) device for the detection of toxins at ultra low concentrations. My focus was on improving reliability with automated fluid flow testing procedures, parameter optimization, and testing signal processing strategies.\n\n\tIn the second project, I leveraged my expertise in materials science to optimize the structural properties of the anode, cathode, and electrolyte in a thermal battery. This involved overseeing a large number of battery cell tests and ultimately resulted in the generation of significant experimental data. To streamline data analysis and storage, I created a robust database system that enabled company-wide access control, storage, and organization.',
        },
        {
            title: 'Technical Product Analyst',
            company: 'OMP',
            dates: 'July 2020 - April 2022' ,
            description: '\tDuring my time at OMP, I played an integral role in improving the efficiency and reliability of supply chain planning for top chemical companies such as Dow, Eastman, and BASF. I led the development of a production grouping framework, starting from foundations by creating the necessary database infrastructure and converting SAP data. Additionally, I designed intuitive dashboards that enabled end-users to perform data maintenance and access visualizations and analytics with ease. \n\n\tTo ensure the success of this project, I worked closely with clients in the industry to understand their specific needs and translate them into technical specifications and plans. My focus throughout the development process was to create a user-friendly experience that streamlined functionality and minimized user interaction.'
        },
        {
            title: 'Software Engineer',
            company: 'Mat3ra',
            dates: 'May 2023 - Present' ,
            description: '\tAt Mat3ra, I am working on the development of a fully featured cloud platform for the design and simulation of materials. My focus is on the development of a robust system design and infrastructure that enables future scalability and attracts talented engineers. Additionally, I am working to recreate the UI/UX from the ground up that enables novice and expert users alike to easily configure calculations and visualize results.'
        }
    ];

    const [selectedJob, setSelectedJob] = useState(workList[workList.length-1]);
    
    const handleClick = (e) => {

        const clickedJobCompany = e.target.innerText;

        if (clickedJobCompany === selectedJob.company) {
            return;
        }

        const [clickedJob] = workList.filter((job) => job.company === clickedJobCompany);
        if(clickedJob){
            setSelectedJob(clickedJob);
        }
    };

    return (
        <StyledWorkSection id='work'>
            <h3>Where I've worked</h3>
            <div class="inner">
            <div id='buttons'>
                {workList.map((job,key) => {
                    return (
                        (job.company === selectedJob?.company) ? 
                        <button 
                            className='active'
                            onClick={handleClick}
                            key={key}>
                            {job.company}
                        </button> 
                        :
                        <button 
                            className='inactive'
                            onClick={handleClick}
                            key={key}>
                            <span>{job.company}</span>
                        </button>
                    );
                })}
            </div>
            <div>
                <h2>
                    <span>{selectedJob?.title} </span>
                    <span class="company">@ {selectedJob?.company}</span>
                </h2>
                <h4>{selectedJob?.dates}</h4>
                <p>
                    {selectedJob?.description}
                </p>
            </div>
            </div>
        </StyledWorkSection>
    );
}

export default Work;
