import Tooltip from '@mui/material/Tooltip';
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import cvicon from '../../../assets/images/cv.png';
import emailicon from '../../../assets/images/emailicon.png';
import giticon from '../../../assets/images/giticon.png';
import linkedinicon from '../../../assets/images/linkedinicon.png';
import me_square from '../../../assets/images/me_square.jpeg';
import phoneicon from '../../../assets/images/phoneicon.png';
import "./AboutPage.scss";
function AboutPage(): JSX.Element {

    const isFirstScroll = useRef(true);
    function handleScrollChange(): void {
        if (isFirstScroll.current) {
            isFirstScroll.current = false;
            window.scrollTo({ top: 840, behavior: "smooth" })
            window.removeEventListener('scroll', handleScrollChange);
        }
    }
    window.addEventListener('scroll', handleScrollChange);
    let hashlink = React.useRef();

    return (
        <div className="AboutPage">
            <div className="first-section">
                <h1 className="h1">About Me & This Project</h1>
                <div>
                    <NavLink
                        target="_blank"
                        to="https://www.linkedin.com/in/alexander-vasilenko-323a21299/">
                        <img
                            className="profile-pic"
                            src={me_square} />
                    </NavLink>
                </div>
                <h2>👋🏻Hi There! I'm</h2>
                <h3>
                    Alexander JR Vasilenko</h3>
                <h4>Full Stack Developer</h4>
                <h5>
                    <Tooltip arrow key={'git'} title={'https://github.com/AlexanderVasilenko99'}>
                        <NavLink to={'https://github.com/AlexanderVasilenko99'} target="_blank">
                            <img className="icon" src={giticon} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip arrow key={'linkedin'} title={'https://www.linkedin.com/in/alexander-vasilenko99/`'}>
                        <NavLink to={'https://www.linkedin.com/in/alexander-vasilenko99/'} target="_blank">
                            <img className="icon" src={linkedinicon} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip arrow key={'tel'} title={'050-814-5431'}>
                        <NavLink to={'tel:050-814-5431'} target="_blank">
                            <img className="icon" src={phoneicon} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip arrow key={'email'} title={'alexandervjr1@gmail.com'}>
                        <NavLink to={'mailto:alexandervjr1@gmail.com'} target="_blank">
                            <img className="icon" src={emailicon} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip title="My CV" arrow>
                        <a href="/Alexander Vasilenko CV 2024.pdf" download target="_blank">
                            <img className="icon" src={cvicon} />
                        </a>
                    </Tooltip>
                </h5>
                <div className="chevron-holder">
                    <HashLink smooth to="#about-grid-container" ref={hashlink}>
                        <div className="scroll-down"></div>
                    </HashLink>
                </div>
            </div>

            <div className="about-grid-container" id="about-grid-container">
                <div>
                    <h1>About Me</h1>
                    <p>Hi again and welcome! My name is <span>Alexander Vasilenko</span> and I am a full stack developer.
                        <br /><br />Besides studying and working, I spend most of my time constantly
                        learning new things, reading about new technologies and love exploring new fields. I am very into coding and
                        technology overall, a big fan of motorics who finds it very pleasing to work and wrench on motorcycles and
                        scooters and learning the mechanics of how they work. To say I am also a big fan of physical
                        activities and absolutely love hiking and working out would be an absolute understatement as I work out at least
                        five
                        times a week and take great pride in my physical achievements.
                        <br /><br />
                        The oldest child to two amazing parents, an older brother, a partner, your honest friend, a determined creator,
                        and an aspiring individual with vast interests fields and many dreams and milestones yet to be achieved. An
                        ambitious man with a unique personality constantly seeking to improve and better himself and his surrounding.
                    </p>
                    <div>
                        {/* <img src={thanks_for_reading} className="thanks_for_reading" /> */}
                    </div>
                </div>
                <div>
                    <h1>About This Project</h1><p>

                        <span>PBR Analytics</span> is my first full-scale full stack project, one of many web projects
                        overall over the past few years, and my third and final project as part of my studies at John Bryce to
                        become a full stack web developer.

                        <br /><br /><span>Frontend - </span>
                        the client side was written in <span>ReactTS</span> according to <span>OOP principals</span> while
                        integrating popular programming libraries and technologies such as <span> Redux, React-Router, and Axios
                        </span> just to name a few.<br /> The front-end was thought-over, written and styled with great emphasis
                        on self made and coded content - Almost everything regarding structure, features, style and functionality
                        was thought through, written and implemented by yours truly, me.😁 <br />

                        I also put much effort into 'clean' coding aiming to avoid unnecessary repetition of code, correct file
                        structuring and page responsiveness to mention a few.

                        <br /><br />This Project was completed March 2024 and took a week of part-time work to complete.</p><br />
                </div>
            </div>
        </div >
    );
}

export default AboutPage;
