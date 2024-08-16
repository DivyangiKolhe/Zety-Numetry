import React from "react";
import './footer(R).css';
import logo1 from '../images/footer/logo1.png'
import logo2 from '../images/footer/logo2.png'
import { NavLink } from "react-router-dom";
import Logo from '../images/nav/zety.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Footer(){
    return (
        <>
        <div className="footer-top">
            <p>*The names and logos of the companies referred to above are all trademarks of their respective holders. Unless specifically stated otherwise, such references are not intended to imply any affiliation or association with Zety.</p>
        </div>
            <div className="footer-container">
                <div className="sections">
                    {/* logo section */}
                    <div className="resume footer-logo">
                        <div className="footer-top-logo">
                            <img src={Logo} alt="Zety Logo" className="footer-logo" />
                        </div>
                    <div className="footer-text">
            <p>
              Zety is a career site fueled by the best career experts and a
              community of millions of readers yearly. We share knowledge, tips,
              and tools to help everyone find their dream job.
            </p>
            <NavLink to="/create-resume">
              <button className="create-resume-button">Create My Resume</button>
            </NavLink>
            <div className="footer-social-links">
              <a href="https://twitter.com/zety_com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.facebook.com/zety.your.resume.builder/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.linkedin.com/company/zety-your-resume-builder/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="footer-contact">
              <p>Call us: 800-985-7561</p>
              <p>Email: support@zety.com</p>
            </div>
          </div>
                    </div>
                    {/* resume section */}
                    <div className="resume">
                        <div className="head">
                            <p>Resume</p>
                        </div>
                        <div className="links">
                            <NavLink to={"/resume-builder"}>Resume Builder</NavLink>
                            <NavLink to={"/resume-templates"}>Resume Templates</NavLink>
                            <NavLink to={"/resume-example"}>Resume Examples</NavLink>
                            <NavLink to={"/resume-format"}>Resume Format</NavLink>
                            <NavLink to={"/how-to-write-a-resume"}>How to Write a Resume</NavLink>
                            <NavLink to={"resume-checker"}>Resume Checker</NavLink>
                            <NavLink to={"/resume-help"}>Resume Help</NavLink>
                            <NavLink to={"/best-resume-templates"}>Best Resume Templates</NavLink>
                        </div>
                    </div>
                    {/* CV section */}
                    <div className="resume">
                        <div className="head">
                            <p>CV</p>
                        </div>
                        <div className="links">
                            <NavLink to={"/cv-builder"}>CV Builder</NavLink>
                            <NavLink to={"/cv-templates"}>CV Templates</NavLink>
                            <NavLink to={"/cv-examples"}>CV Examples</NavLink>
                            <NavLink to={"/cv-format"}>CV Format</NavLink>
                            <NavLink to={"/how-to-write-a-cv"}>How to Write a CV</NavLink>
                        </div>
                    </div>
                    {/* cover letter section */}
                    {/* <div className="resume">
                        <div className="head">
                            <p>Cover letter</p>
                        </div>
                        <div className="links">
                            <NavLink to={""}>Cover Letter Builder</NavLink>
                            <NavLink to={""}>Cover Letter Templates</NavLink>
                            <NavLink to={""}>Cover Letter Examples</NavLink>
                            <NavLink to={""}>Cover Letter Format</NavLink>
                            <NavLink to={""}>How to Write a Cover Letter</NavLink>
                            <NavLink to={""}>Cover Letter Help</NavLink>
                        </div>
                    </div> */}
                    {/* support section */}
                    <div className="resume">
                        <div className="head">
                            <p>Support</p>
                        </div>
                        <div className="links">
                            <NavLink to={"/about"}>About</NavLink>
                            <NavLink to={"/contact"}>Contact</NavLink>
                            <NavLink to={""}>Frequently Asked Questions</NavLink>
                            <NavLink to={"/editorial-guidelines"}>Editorial Guidelines</NavLink>
                            <NavLink to={""}>Media Mentions</NavLink>
                            <NavLink to={""}>Privacy Policy</NavLink>
                            <NavLink to={""}>Terms of service</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        <div className="footer-bottom">
            <div className="copy">
                <p>© 2024 Works Limited. All Rights Reserved.</p>
            </div>
            <div className="logos-c">
                <div className="logo">
                    <img src={logo2} alt="" />
                </div>
                <div className="logo cprw">
                    <img src={logo1} alt="" />
                </div>
            </div>
        </div>
        </>

    )
}
export default Footer;