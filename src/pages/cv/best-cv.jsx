import React from "react";
import './cv.css';
import AcademicCV from '../../images/cv-example/academic-cv.png';
import GraduateCV from '../../images/cv-example/graduate-cv.png';
import ArtistCV from '../../images/cv-example/artist-cv.png';
import ProfessorCV from '../../images/cv-example/professor-cv.png';
import GraduateSchoolCV from '../../images/cv-example/graduate-school.png';
import FunctionalCV from '../../images/cv-example/functional-cv.png';


function BestCV(){
    return<>
    <div className="all-container">
        <div className="name-cv">
            <p>Examples of CV Templates</p>
        </div>

        <div className="cv1">
            <div className="cv-content">
                <div className="cv-img-example">
                    <img src={AcademicCV} alt="" />
                </div>
                <div className="cv-text-example">
                    <p className="cv-example-name">Academic CV</p>
                    <p className="cv-example-desc">Whether you’re applying for a graduate research program or aiming at a permanent academic contract, you need the perfect academic CV. Show you’re an asset to the educational institution you’re looking to join by following our expert tips straight from our CV samples.</p>
                    
                <div className="cv-example-btn">
                    <button>See This Sample</button>
                </div>
                </div>
            </div>
        </div>

        <div className="cv2">
            <div className="cv-content2">
                <div className="cv-img-example2">
                    <img src={GraduateCV} alt="" />
                </div>
                <div className="cv-text-example2">
                    <p className="cv-example-name">Graduate CV</p>
                    <p className="cv-example-desc">As a fresh graduate entering the market, writing a CV is difficult. What you show and how you leverage your skills is the key to landing a great job. Learn how to tailor your experience the right way with our graduate CV examples and guides.</p>
                    
                <div className="cv-example-btn">
                    <button>See This Sample</button>
                </div>
                </div>
            </div>
        </div>

        <div className="cv1">
            <div className="cv-content">
                <div className="cv-img-example">
                    <img src={ArtistCV} alt="" />
                </div>
                <div className="cv-text-example">
                    <p className="cv-example-name">Artist CV</p>
                    <p className="cv-example-desc">As a fresh graduate entering the market, writing a CV is difficult. What you show and how you leverage your skills is the key to landing a great job. Learn how to tailor your experience the right way with our graduate CV examples and guides.</p>
                    
                <div className="cv-example-btn">
                    <button>See This Sample</button>
                </div>
                </div>
            </div>
        </div>

        <div className="cv2">
            <div className="cv-content2">
                <div className="cv-img-example2">
                    <img src={FunctionalCV} alt="" />
                </div>
                <div className="cv-text-example2">
                    <p className="cv-example-name">Professor CV</p>
                    <p className="cv-example-desc">Less than 3 percent of Ph.D. holders become professors—you need every boost to land the coveted tenure track position. Don’t brush over your CV to only add publications. Detail your CV with sections from this guide to improve your chances of getting hired.</p>
                    
                <div className="cv-example-btn">
                    <button>See This Sample</button>
                </div>
                </div>
            </div>
        </div>
        
        <div className="cv1">
            <div className="cv-content">
                <div className="cv-img-example">
                    <img src={ProfessorCV} alt="" />
                </div>
                <div className="cv-text-example">
                    <p className="cv-example-name">Graduate School CV</p>
                    <p className="cv-example-desc">Applying to grad school is hard on its own—prepping for the GRE, tedious paperwork, references. Undervaluing a graduate school curriculum vitae will only make it more difficult. Focus on highlighting your educational accomplishments and background above all.</p>
                    
                <div className="cv-example-btn">
                    <button>See This Sample</button>
                </div>
                </div>
            </div>
        </div>

        <div className="cv2">
            <div className="cv-content2">
                <div className="cv-img-example2">
                    <img src={GraduateSchoolCV} alt="" />
                </div>
                <div className="cv-text-example2">
                    <p className="cv-example-name">Functional CV</p>
                    <p className="cv-example-desc">If you’re a career changer, a highly specialized worker, or in the creative industry with lots of freelance experience, your best bet is a skills-based CV. Rather than focus on work experience, highlight your skills and qualifications based on our tested sample CVs.</p>
                    
                <div className="cv-example-btn">
                    <button>See This Sample</button>
                </div>
                </div>
            </div>
        </div>

    </div>
    </>
}
export default BestCV;