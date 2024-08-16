import React from "react";
import './cv.css';
import Button from "./button";
import Owner from '../../images/cv-format/blog-owner.jpg';
import Reviewer from '../../images/cv-format/review-by.jpg';
import Logos from '../../images/cv-format/format-logo.png'
import Wrong from '../../images/cv-format/wrong resume image.jpg'
import Right from '../../images/cv-format/resume correct image.jpg'
import Zety from '../../images/cv-format/zety-logo.svg'
import Tick from '../../images/cv-format/tick.svg'
import Cross from '../../images/cv-format/cross.svg'
import Format from '../../images/cv-format/format.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../../components/navbar";

function CvFormat(){
    return<>
    <Navbar/>
    <div className="blue-card">
        <div className="format-card">
            <div className="blog-head">
                <p>Curriculum Vitae (CV) Format: Tips & Templates in 2024</p>
                <Button/>
            </div>
            <div className="blog-det">
                <div className="blog-profile">
                    <div className="blog-img">
                        <img src={Owner} alt="" />
                    </div>
                    <div className="blogger">
                        <p className="blogger-name">Maciej Tomaszewicz, CPRW</p>
                        <p><i>Career Expert</i></p>
                        <p>Updated: 01 August 2024</p>
                    </div>
                </div>
                <div className="dates">
                     
                    <div className="review">
                    <p>Reviewed by:</p>
                        <div className="blog-img reviewer">
                            <img src={Reviewer} alt="" />
                        </div>
                        <p>Dominika Kowalska, CPRW</p>
                    </div>
                    
                    <div className="rating">
                        <div className="rate">
                            <p>Article Helpfulness: 4.45</p>
                        </div>
                        <div className="stars">
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", marginRight: "0.2rem"}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", marginRight: "0.2rem"}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", marginRight: "0.2rem"}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", marginRight: "0.2rem"}}/>
                        <FontAwesomeIcon icon={faStarRegular} style={{color: "#FFD43B",}}/>
                        </div>
                    </div>
                    <div className="social">
                        <div className="share">
                            <FontAwesomeIcon  icon={faShareNodes} style={{ color: "#fcfcfd" }} />
                        </div>
                        <span>Share:</span>
                        <div className="icon">
                            <FontAwesomeIcon  icon={faXTwitter} style={{ color: "#fcfcfd" }}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon  icon={faFacebook} style={{ color: "#fcfcfd" }}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon  icon={faLinkedin} style={{ color: "#fcfcfd" }}/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon  icon={faWhatsapp} style={{ color: "#fcfcfd" }}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="format-main">
        <div className="format-logo">
            <img src={Logos} alt="" />
        </div>

        <div className="content">
            <div className="content1">
                <p>Choosing the right CV format is how you help your recruiter from the top. It makes their job easier and lets them see your expertise at a glance. So let’s start working on your curriculum vitae right away.</p>
                <p className="content-bold">In this article, I’ll show you how to format a CV so that it suits your needs and boost your chances of getting hired. Let’s begin!</p>
                <p><span className="content-bold">Want to save time and have your CV ready in 5 minutes?</span> Try our CV builder. It’s fast and easy to use. Plus, you’ll get ready-made content to add with one click. <span className="blue">See 20+ CV templates and create your CV here.</span></p>
                <Button className ="center-button"/>
            </div>

            {/* combo */}
            <div className="content2">
                <div className="combo-format-img">
                    <div className="wrong">
                        <img src={Wrong} alt="" />
                        <img src={Cross} alt="" className="cross"/>
                    </div>
                    <div className="right">
                        <img src={Right} alt="" />
                        <img src={Tick} alt="" className="tick"/>
                    </div>
                </div>
                <div className="zety-logo">
                    <img src={Zety} alt="" />
                </div>
            </div>

            {/* gray text */}
            <div className="content3">
            <div className="gray-text w-full">
            <div className="border-text">
                 <p>Sample CV made with our builder—  <span className="blue">See more CV examples here.</span></p>
            </div>

            <div className="b m-t">
                <p>One of our users, Colette, had this to say:</p>
            </div>
            
            <div className="yellow">
                <p>Excellent service! Great platform that took all the stress out of CV writing. Would definitely use again.</p>
            </div>
            <div className="m-t l-h">
                <p>Based on an <span className="b">in-depth analysis of 11 million resumes created in our builder</span>, we’ve gathered valuable insights from a diverse range of users across various industries and experience levels. Here are our top findings to help you craft a more effective resume:</p>
            </div>
        </div>
            </div>

            {/* orange */}
            <div className="orange">
                <p className="b-format">Data-Driven Insights From Real-Life Resumes</p>
                <ul className="format">
                    <li>57.84% of resumes created in our builder are longer than 300 words, 28.23% have between 101 and 300 words, while 5.35% have less than 100 words.</li>
                    <li>3.59% of our users have no work experience, while 28.86% declare less than 3 years of work experience.</li>
                    <li>The average number of skills added to resumes is 12.56.</li>
                    <li>The average job count in the work experience section per resume is 2.61.</li>
                </ul>
                
            </div>
            <div className="b-orange">
                <p className="b-format m-t">This article explains how to format a CV for a job in the UK or other European countries. If you’re more interested in formatting a US resume, switch over to the article about a <span className="blue">resume format. </span></p>
            </div>

            {/* what is CV */}
            <div className="cv">
                <div className="que">
                    <p>What Is a CV?</p>
                </div>
                <div className="ans">
                    <p>A <i>curriculum vitae</i>, also called a CV, is a short, usually one-page document describing your professional qualifications. It shows your work experience, educational background, skills, interests, and other things that might convince the hiring manager you’re the perfect fit for the job.</p>
                    <p>CV format on the other hand is the structure that you build your CV on. It’s what your document looks like and how you showcase all the important information in it. </p>
                    <p>Formatting your CV is necessary to properly highlight your experience, skills, accomplishments, and other things that might impress your recruiter. To make it right, your curriculum vitae must be highly readable and <span className="blue">optimized for ATS.</span> </p>
                    <p>That said, let’s see what to include in your CV.</p>
                </div>
                
                <div className="border-text font-l blue-box">
                <p><span className="content-bold"> Pro tip:</span> What’s the <span className="blue"> difference between a CV and a resume</span>? A resume is a one- to two-page document showing the most relevant info about your professional experience, educational background, and skills. A CV (Curriculum Vitae) is longer and details your career's whole course. </p>
                </div>
                
            </div>

            {/* cv format */}
            <div className="cv-struct">
                <div className="que">
                    <p>CV Format: How to Structure Your CV</p>
                </div>
                <div className="ans">
                    <p> A standard curriculum vitae format should include the following sections:</p>
                    <ol className="struct">
                        <li>Contact Information</li>
                        <li>Personal Statement</li>
                        <li>Professional Experience</li>
                        <li>Academic History</li>
                        <li>Key Skills and Qualifications</li>
                        <li>Additional Information</li>
                    </ol>
                    <p>Let's walk through them step by step:</p>

                    {/* contact information */}
                    <div className="contact-info">
                        <p className="struct-head">1. Contact Information</p>
                        <p>That’s the part you don’t want your recruiter to miss. Your <span className="blue">contact information </span>should include the following information:</p>

                        <ul className="struct">
                            <li>Full name</li>
                            <li><span className="blue">Professional title</span></li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li><span className="blue">LinkedIn profile</span></li>
                            <li>Home address</li>
                        </ul>
                        <p>Put them in your <span className="blue"> CV header </span>to make them as visible as possible.</p>
                    </div>

                    {/* personal information */}
                    <div className="contact-info">
                        <p className="struct-head">2. Personal Statement</p>
                        <p>A CV <span className="blue">personal statement</span> is a brief (100 words tops) paragraph at the top of your CV format that provides an overview of your qualifications and skills. Fill it with <span className="blue">relevant keywords </span>and <span className="blue">action words </span>to better explain why you’re the perfect candidate.</p>

                        <ul className="struct">
                            <li>If you have years of relevant experience, write your <span className="blue">personal statement</span> as a <span className="blue">CV summary</span>, to highlight your best professional achievements.</li>
                            <li>If you don’t have much experience yet, go for a <span className="blue">CV objective</span> to summarise what skills you’ve mastered so far and how well you’d fit in.</li>
                        </ul>
                        <p>Put them in your <span className="blue"> CV header </span>to make them as visible as possible.</p>
                    </div>

                    {/* professional experience */}
                    <div className="contact-info">
                        <p className="struct-head">3. Professional Experience </p>
                        <p>That’s probably the most important part of your CV. And since <span className="blue"> your recruiter might spend only 7 seconds looking at your document</span>, you have to make it right.</p>
                        <p className="font-w-600">Here’s how to describe your <span className="blue">professional experience</span> on a CV:</p>
                        <ul className="struct">
                            <li>Start with your current or most recent job.</li>
                            <li>List your previous jobs chronologically descending.</li>
                            <li>Include your job title, the company's name, and dates worked at each entry.</li>
                            <li>Add up to 5 bullet points explaining your responsibilities and most impressive achievements.</li>
                            <li>Quantify whenever possible. Numbers pop!</li>
                        </ul>
                        <p>Put them in your <span className="blue"> CV header </span>to make them as visible as possible.</p>
                    </div>

                    {/* education system */}
                    <div className="contact-info">
                        <p className="struct-head">4. Education Section</p>
                        <p>If you’ve got any post-secondary education, I recommend you limit the CV education section in your curriculum vitae format to just that. Don’t mention your high school unless it’s your highest education degree.</p>
                        <p className="font-w-600">Format your CV <span className="blue"> education section </span>the following way:</p>
                        <ul className="struct">
                            <li>Graduation Year (if you’re <span className="blue">still studying</span>, enter your <span className="blue">expected graduation date</span>)</li>
                            <li><span className="blue">Education Degree</span></li>
                            <li>Institution Name</li>
                            <li><span className="blue">Cum Laude</span></li>
                        </ul>
                        <p>Don’t have a wealth of job experience? Place your education section in the CV format above your work history, and mention <span className="blue"> coursework you’ve completed </span>and <span className="blue">extracurricular academic achievements</span>.</p>
                    </div>

                    {/* skill section */}
                    <div className="contact-info">
                        <p className="struct-head">5. Skills Section</p>
                        <p>The next section should combine your <span className="blue">hard skills</span> with your <span className="blue">soft skills</span>. Plus, I strongly advise you not to forget about your <span className="blue">transferable skills</span>.They are, according to <span className="blue">The Future of Jobs Report</span> from 2020, the essential emerging skills.</p>
                        <p className="font-w-600">Here’s how to create a perfect <span className="blue">CV skills section:</span></p>
                        <ul className="struct">
                            <li>Start with a master list of all the <span className="blue">professional skills</span> you’ve developed.</li>
                            <li>Read the job ad carefully and look for skill-related keywords.</li>
                            <li>Add the skills from your list that match the job description to your CV.</li>
                            <li>Choose a combination of both your <span className="blue">hard and soft skills</span>.</li>
                            <li>Don’t just list your skills in a separate skills section, mention them in your CV personal statement and in the work history section.</li>
                        </ul>
                        <p>Don’t have a wealth of job experience? Place your education section in the CV format above your work history, and mention <span className="blue"> coursework you’ve completed </span>and <span className="blue">extracurricular academic achievements</span>.</p>
                    </div>

                    <div className="orange">
                        <p className="b-format">From our analysis of 11 million documents crafted with our builder, here are the top 10 most frequently added skills:</p>
                        <ul className="format">
                            <li>Teamwork and Collaboration</li>
                            <li>Problem-solving</li>
                            <li>Excellent Communication</li>
                            <li>Multitasking</li>
                            <li>Attention to Detail</li>
                            <li>MS Office</li>
                            <li>Analytical and Critical Thinking</li>
                            <li>Data Entry</li>
                            <li>Project Management</li>
                            <li>Team Management</li>
                        </ul>
                        
                    </div>

                    {/* additional section */}
                    <div className="contact-info">
                        <p className="struct-head">6. Additional Sections</p>
                        <p>If you’ve participated in any activities relevant to your career that don’t fit into any of the above sections, list them as <span className="blue">extra sections</span> in the CV format. </p>
                        <p className="font-w-600">Some CV examples of such sections include:</p>
                        <ul className="struct">
                            <li>Industry Awards</li>
                            <li><span className="blue">Professional Certifications and Licenses</span></li>
                            <li>Professional Affiliations</li>
                            <li>Conferences Attended</li>
                            <li>Additional Training</li>
                            <li><span className="blue">Relevant Publications</span></li>
                            <li><span className="blue">Hobbies and Interests</span></li>
                            <li><span className="blue">Language Skills </span></li>
                            <li><span className="blue">Volunteer Work</span></li>
                        </ul>
                        <p>Don’t have a wealth of job experience? Place your education section in the CV format above your work history, and mention <span className="blue"> coursework you’ve completed </span>and <span className="blue">extracurricular academic achievements</span>.</p>
                    </div>

                    {/* standard format img  */}
                    <div className="standard">
                        <img src={Format} alt="" />
                    </div>

                    {/* blue box */}
                    <div className="border-text l-pad blue-box">
                    <p>Learn more about what should you put in your CV. Read our guide: <span className="blue"> Parts of a CV</span></p>
                    </div>
                </div>
            </div>

            {/* how to format a cv */}
            <div className="how-to-format-cv">
                <div className="que">
                    <p>How to Format a CV?</p>
                </div>
                <div className="ans">
                    <p>A <span className="blue">well-organized layout </span>will be appreciated by your recruiters and you’ll give yourself a good chance of passing the Applicant Tracking Software (ATS) CV scan. According to the <span className="blue">worldwide report on recruiting automation trends</span>, 75% of talent acquisition professionals claim that AI-based technology will play a larger role in their hiring processes.</p>

                    <div className="contact-info">
                        <p>Here's how you should format your CV in 2024:</p>

                        <ul className="struct">
                            <li><span className="blue">Set one-inch CV margins</span> on all sides.</li>
                            <li>Use 1.0 or 1.15 line spacing.</li>
                            <li>Pick a <span className="blue">good font for a CV</span> and stick to it on the whole document.</li>
                            <li>Create a professional CV header format for your contact details.</li>
                            <li>Divide your CV into <span className="blue"> legible sections</span>: </li>
                            <div className="list-list">
                                <ul>
                                    <li>Contact Information</li>
                                    <li>Personal Statement</li>
                                    <li>Work Experience</li>
                                    <li>Education, Skills</li>
                                    <li>Additional Information</li>
                                </ul>
                            </div>
                            <li>Make section headings slightly larger than the rest of the contents.</li>
                            <li>Add a blank line before and after each heading.</li>
                            <li><span className="blue">Name your CV file </span>correctly.</li>
                            <li><span className="blue">Save your CV format in PDF</span> to keep it intact.</li>
                        </ul>
                        <p>Follow the steps I listed above and have a perfectly formatted curriculum vitae that will impress your recruiters. </p>
                        <p>We’ve answered one big question, so let’s move to the next one.</p>
                    </div>
                    {/* blue box */}
                    <div className="border-text l-pad blue-box">
                    <p>Now that you know how to format a CV, take a look at how to write it. Read our guide: <span className="blue"> How to Write a CV</span></p>
                    </div>
                    <p>Creating a resume with our builder is incredibly simple. Choose a <span className="blue">resume template</span> and follow our step-by-step guidance to have a professional resume ready in minutes.</p>
                </div>

                
                <div className="border-text gray-text w-full">
                    <p>When you’re done, <span className="blue">Zety’s resume builder </span>will score your resume and our <span className="blue"> resume checker </span>will tell you exactly how to make it better.</p>
                </div>
            </div>
        </div>
        
    </div>
    </>
}
export default CvFormat;