import React from "react";
import Cards from "./cards"
import Button from "./button";
import Step1 from '../../images/cv-template/step1.webp'
import Step2 from '../../images/cv-template/step2.webp'
import Step3 from '../../images/cv-template/step3.webp'
import Step4 from '../../images/cv-template/step4.webp'
import Step5 from '../../images/cv-template/step5.webp'
import Step6 from '../../images/cv-template/step6.webp'
import Navbar from "../../components/navbar";

import './cv.css';
 
function CvTemplates(){
    return<>
    <Navbar/>
    <div className="main">
        <div className="cv-container">
            <div className="heading">
                <p>CV Templates</p>
            </div>
            <div className="desc">
                <p>Choose a CV template, fill it out, and download in seconds. Create a <span className="para-text">professional curriculum vitae in a few clicks.</span> Just pick one of 18+ CV templates below, add ready-to-use suggestions, and get the job.</p>
            </div>
            <Button/>
            
        </div>
    <Cards/>

      {/* cv sample */}
      <div className="sample-container">
        <div className="left-text">
            <p className="strong-bold s-font">Free CV Template to Copy and Use</p>
            <p className="sample-text2">Want more free CV templates with content prepared for you by Certified Professional Resume Writers?</p>
            <p className="sample">With the Zety free plan, you can create and download as many customized CVs as you need. Simply log in to the Zety builder, upload your existing CV, or start from scratch by selecting any of our free CV templates. The wizard will guide you step by step, and within a few clicks, your CV will be ready to download for free as a .txt file.</p>
            <p className="list-head">With our paid plan, you can do even more:</p>
            <ul className="sample-list">
                <li>Improve your existing CV to enhance your hiring prospects.</li>
                <li>Style your CV to make it visually appealing.</li>
                <li>Publish your CV online and monitor profile visits.</li>
                <li>Search and apply for jobs with your CV sent directly from the builder.</li>
                <li>Download your CV as a PDF or Word document.</li>
                <li>Create a matching cover letter in minutes using ready-made content.</li>
            </ul>
            <div className="create-btn">
                <Button/>
            </div>
            
        </div>
        <div className="right-text">
            <p className="contact">Contact Information</p>
            <p className="inf">[Your Name]</p>
            <p className="inf">[Your Job Title]</p>
            <p className="inf">[Email Address]</p>
            <p className="inf">[Phone Number]</p>
            <p className="inf">[LinkedIn]</p>
            <p className="inf">[Optional: Personal Website, Twitter, Other Relevant Links]</p>

            <p className="contact margin">Resume Summary Statement</p>
            <p className="inf line-space">Dependable/Detail-oriented/Creative[Your Job Title] with [X] years of experience in [Your Industry/Niche]. Helped [increase revenue/cut costs/train employees/other achievements] by [X]%. Looking to join [Company Name] to ensure[highest customer happiness scores/a steady boost in ROI/prompt project delivery/other metrics and KPIs you hope to deliver for the prospective employer].</p>

            <p className="contact margin">Work Experience/Job Description</p>
            <p className="inf">[Your Job Title]</p>
            <p className="inf">[Company Name]</p>
            <p className="inf">[2012–2019]</p>

            <ul className="workList">
                <li className="work">Use bullet points to describe your work history.</li>
                <li className="work">Add up to 6 bullet points. Focus on what applies to the job you're trying to land, don't cram your resume with unnecessary details.</li>
                <li className="work">Don't just list your responsibilities. Focus on your achievements!</li>
                <li className="work">Maybe you saved your company money? Boosted sales? Optimized processes? Trained new employees? Show it off! Have a look:</li>
                <li className="work">Responsible for [your responsibilities].</li>
                <li className="work">[Boosted sales/cut costs] by [X]% through implementing a new system of [invoicing/project management/procurement, etc.]</li>
            </ul>

            <p className="inf">[Your Previous Job Title]</p>
            <p className="inf">[Previous Company Name]</p>
            <p className="inf">[2008–2012]</p>

            <ul>
                <li className="work">List your jobs in reverse-chronological order. Start with your current or most recent position, then follow it with the one before it, and so on.</li>
                <li className="work">As you go back in time, limit the number of bullet points under each entry. Employers are more interested in what you've been doing in the last few years, not in the dim and distant past.</li>
                <li className="work">Don't list over 15 years of relevant work experience on your resume.</li>
            </ul>

            <p className="contact margin">Education</p>
            <p className="inf">[BA/MA in Your Major]</p>
            <p className="inf">[University Name]</p>
            <p className="inf">[Graduation Year]</p>

            <ul>
                <li className="work">Not much experience? Leverage your academic achievements. Include your GPA if it's higher than 3.5, mention extracurricular activities.</li>
                <li className="work">If you have a lot of professional experience, limit your education section to your highest degree.</li>
            </ul>

            <p className="contact margin">Skills</p>
            <p className="inf">[Skill #1: Advanced]</p>
            <p className="inf">[Skill #2: Advanced]</p>
            <p className="inf">[Skill #3: Basic]</p>

            <p className="contact margin">Additional Resume Sections</p>
            <p className="inf">[Certifications]</p>
            <p className="inf">[Volunteer Experience]</p>
            <p className="inf">[Conference Participation]</p>
            <p className="inf">[Hobbies and Interests]</p>
        </div>
    </div>


    {/* other samples */}
    <div className="sample-text">
        <p className="bit-bold">Need text samples of CV templates for specific jobs?</p>
        <Button/>
        <p className="strong-bold">More then Just CV Templates</p>
    </div>

    {/* process */}
    <div className="step-container">
        {/* first */}
        <div className="step-cv">
            <div className="image">
                <img src={Step1} alt="" />
            </div>
            <div className="text">
                <p className="name">Professional CV templates
                for any situation</p>
                <div className="para">A curriculum vitae is a document that varies in use around the world. A US CV is used mostly in academia and government. But in the UK it’s a standard document for all job seekers. No matter your situation, a curriculum vitae template needs to be professional, simple, but unique enough to be memorable. Enter Zety CV templates—</div>
            </div>
        </div> 

        <div className="border"></div>

        {/* second */}
        <div className="step-cv">
            <div className="text">
                <p className="name">Professional design</p>
                <div className="para">Each CV format template balances the classic with the modern. Add a personal profile to draw the reader in. Sprinkle in a few simple icons to highlight what matters. Pick two columns to save space or a single column layout for a traditional application. And don’t worry—all templates were created by CV experts and professional designers.</div>
            </div>
            <div className="image">
                <img src={Step2} alt="" />
            </div>
        </div>  

        <div className="border"></div>

        {/* third */}
        <div className="step-cv">
            <div className="image">
                <img src={Step3} alt="" />
            </div>
            <div className="text">
                <p className="name">Ease of use</p>
                <div className="para">Remember how you downloaded a CV template in a few seconds...and wasted hours trying to fix it? Never again. Simply pick a CV layout and let the Zety CV wizard format the perfect CV example for you Zety CV examples come with ready-made content you can add to your CV easier than an online shopping cart.</div>
            </div>
        </div> 

        <div className="border"></div>

        {/* fourth */}
        <div className="step-cv">
            <div className="text">
                <p className="name">Speed</p>
                <div className="para">These user-friendly templates will save you hours of gruelling work. Pick a sample CV template on Zety and fill it out in a few clicks. Pick and choose what you like. Stop struggling to come up with the right word. We have entire sections ready for your finishing touch. It’s never been easier.</div>
            </div>
            <div className="image">
                <img src={Step4} alt="" />
            </div>
        </div> 

        <div className="border"></div>

        {/* fifth */}
        <div className="step-cv">
            <div className="image">
                <img src={Step5} alt="" />
            </div>
            <div className="text">
                <p className="name">Confidence boost</p>
                <div className="para">Don’t let your old CV kill your chances of landing a job you actually want. Create a whole new CV or upload your previous curriculum vitae and reignite it within minutes. Update your template, optimize its contents with pre-written bullet points, and get hired faster than anyone else.</div>
            </div>
        </div> 

        <div className="border"></div>

        {/* sixth */}
        <div className="step-cv">
            <div className="text">
                <p className="name">Proven effectiveness</p>
                <div className="para">Don’t just improve your CV. Improve your entire life. A job-winning professional CV format is one that goes beyond looks. And Zety curriculum vitae templates have helped thousands of people get into the right school, build a career in academia and any industry around the world. Recruiters are looking for you. Use Zety, be found.</div>
            </div>
            <div className="image">
                <img src={Step6} alt="" />
            </div>
            
        </div> 
    </div>

    <div className="cv-maker">
        <p>Transform your career today and <br /> join thousands of satisfied users
        </p>

        <div className="cv-btn">
            <button>Try Our CV Maker</button>
        </div>
    </div>

    </div>



    </>
}
export default CvTemplates;