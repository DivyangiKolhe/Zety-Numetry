import React from "react";
import './cv.css';
import Navbar from "../../components/navbar";
import IntroImg from '../../images/cv-example/resume-builder.png';
import Logos from '../../images/cv-example/logos.png'
import Combo from '../../images/cv-example/combo.jpg'
import Resume_example from '../../images/cv-example/resume-examples.png';
import Button from "./button";
import BestCV from "./best-cv";
import Line from "./line";

function CvExample(){
    return<>
    <Navbar/>
    <div className="main">
        <div className="cv-example-container">
            <div className="cv-text">
                <h2>CV Examples</h2>
                <p>Scroll down to see CV examples for 500+ professions grouped by industry. You'll get a breakdown of a perfect sample and suggestions for CV designs.</p>
            </div>
            <div className="cv-img">
                <div className="cv-image">
                    <img src={IntroImg} alt="" />
                </div>
            </div>
        </div>

        <div className="logos">
            <img src={Logos} alt="" />
        </div>

        <div className="create-cv">
            <p className="que"><span className="b">Want to save time and have your CV ready in 5 minutes?</span> Try our CV builder. It’s fast and easy to use.</p>
            <p className="text-create">Plus, you’ll get ready-made content to add with one click. <span className="blue">See 18 CV templates and create your CV here.</span></p>
            <Button/>
        </div>

        <div className="combo">
            <img src={Combo} alt="" />
        </div>

        <div className="gray-text">
            <div className="border-text">
                 <p>Sample CV made with our builder—See more templates and  <span className="blue">create your CV here.</span></p>
            </div>

            <div className="b m-t">
                <p>One of our users, Nikos, had this to say:</p>
            </div>
            
            <div className="yellow">
                <p>[I used] a nice template I found on Zety. My CV is now one page long, not <i>three</i>. With the same stuff.</p>
            </div>
        </div>

    </div>
        <BestCV/>
    <div className="main">
        <div className="name-cv">
            <p>Perfect Curriculum Vitae Example</p>
        </div>

        <div className="main-cv margin-side">
            <div className="main-cv-img">
                <img src={Resume_example} alt="" />
            </div>
            <div className="main-cv-desc">
                <div className="lines">
                <div className="line-item contact-ex">
                <div className="cv-example-text">
                        <p>List your <span className="blue">contact details on the CV </span>the right way.</p>
                    </div>
                    <Line className="line" />
                </div>
                <div className="line-item summary">
                    <div className="cv-example-text">
                        <p>Choose a <span className="blue">professional summary </span>or <span className="blue">career objective</span> for the personal statement.</p>
                    </div>
                    <Line className="line" />
                </div>
                <div className="line-item kw">
                    <div className="cv-example-text">
                        <p><span className="blue">Tailor your CV template </span>for the job in your <span className="blue">work experience</span> section with the right <span className="blue">CV keywords.</span></p>
                    </div>
                    <Line className="line" />
                </div>
                <div className="line-item education">
                    <div className="cv-example-text">
                        <p>Show off your <span className="blue">education</span> and <span className="blue">skills.</span> </p>
                    </div>
                    <Line className="line" />
                </div>
                <div className="line-item certification">
                    <div className="cv-example-text">
                        <p>Prove your worth with <span className="blue">certifications</span> and <span className="blue">volunteer experience</span> in the <span className="blue">extra sections.</span></p>
                    </div>
                    <Line className="line" />
                </div>
            </div>
        </div>

        </div>
    </div>
    </>
}
export default CvExample;