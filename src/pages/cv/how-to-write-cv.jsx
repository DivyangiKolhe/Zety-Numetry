import React from "react";
import './cv.css';
import Owner from '../../images/cv-format/blog-owner2.jpg';
import Button from "./button";
import Reviewer from '../../images/cv-format/review-by.jpg';
import Combo from '../../images/cv-format/combo.jpg';
import Logos from '../../images/cv-format/format-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Wrong from '../../images/cv-format/wrong resume image.jpg'
import Right from '../../images/cv-format/resume correct image.jpg'
import Zety from '../../images/cv-format/zety-logo.svg'
import Tick from '../../images/cv-format/tick.svg'
import Cross from '../../images/cv-format/cross.svg'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../../components/navbar";

function WriteCV(){
    return<>
    <Navbar/>
    <div className="blue-card">
        <div className="format-card">
            <div className="blog-head">
                <p>How to Write a CV in 2024 (Full Guide + Templates)</p>
                <Button/>
            </div>
            <div className="blog-det">
                <div className="blog-profile">
                    <div className="blog-img">
                        <img src={Owner} alt="" />
                    </div>
                    <div className="blogger">
                        <p className="blogger-name">Danuta Detyna, CPRW</p>
                        <p><i>Career Expert</i></p>
                        <p>Updated: July 09, 2024</p>
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
                <p>Imagine this: you've found the perfect job opportunity. You craft what you believe is a compelling CV and eagerly send it off, waiting anxiously for that all-important call-back. But it never comes. Why? Your CV wasn't even read. It simply wasn't up to par.</p>
                <p>Don't despair. This nightmare scenario won't occur again. Whether you're an experienced candidate or crafting your first CV, I will show you how to write a CV that no one can resist reading.</p>
                <p className="content-bold">In this guide, you’ll find out:</p>
                <ul className="format">
                    <li>How to write a job-winning CV</li>
                    <li>What's a CV & the difference between a CV and a resume</li>
                    <li>A collection of professional CV examples for your inspiration </li>
                    <li>Frequently Asked Questions about how to write a CV.</li>
                </ul>
                <p><span className="content-bold">Want to save time and have your CV ready in 5 minutes?</span> Try our CV builder. It’s fast and easy to use. Plus, you’ll get ready-made content to add with one click. <span className="blue">See 20+ CV templates and create your CV here</span>.</p>
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
                 <p>Sample CV made with our builder—<span className="blue">See more CV examples here</span>.</p>
            </div>

            <div className="content-bold m-t">
                <p>One of our users, Colette, had this to say:</p>
            </div>
            
            <div className="yellow">
                <p>Excellent service! Great platform that took all the stress out of CV writing. Would definitely use again.</p>
            </div>
            <div className="m-t l-h">
                <p>Based on an <span className="content-bold">in-depth analysis of 11 million resumes created in our builder</span>, we’ve gathered valuable insights from a diverse range of users across various industries and experience levels. Here are our top findings to help you craft a more effective resume:</p>
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

             {/* what is CV and difference*/}
             <div className="cv">
                <div className="que">
                    <p>What is a CV and How It Differs From a Resume?</p>
                </div>
                <div className="ans">
                    <p>A <i>CV</i>, short for Curriculum Vitae, is a document summarizing your education, work experience, skills, achievements, and other qualifications. In the US, Canada, and Australia, a CV is used to apply for academic positions, while in other countries—it's the name of the document used to apply for a job.</p>
                    <p>Remember: </p>
                    <ul className="format">
                    <li>If you're applying outside of US, Canada or Australia, you should create a CV. But if you're trying to get a job in the US, you need to <span className="blue">make a resume</span>.</li>
                    <li>If you're making a CV for academic purposes in the US, Canada, or Australia, read our guide on the <span className="blue">differences between a CV and a resume</span>.</li>
                </ul>
                <p>And no, a CV is not a cover letter. A curriculum vitae contains your work history, education, and skills, while a cover letter explains the recruiter in detail why you’re the best match for the job. These documents are completely different, and you can learn more about those differences in this guide on <span className="blue">Curriculum Vitae vs. cover letter</span>.</p>
                <p>Still confused? Read our complete guide on <span className="blue">what a CV is</span>. </p>
                </div>
                
                <div className="border-text font-l blue-box">
                    <p><span className="content-bold"> Pro tip:</span> What’s the <span className="blue"> difference between a CV and a resume</span>? A resume is a one- to two-page document showing the most relevant info about your professional experience, educational background, and skills. A CV (Curriculum Vitae) is longer and details your career's whole course. </p>
                </div>
                <div className="que small-font m-t">
                    <p>What is the difference between a CV and a resume?</p>
                </div>
                <div className="ans">
                    <p>In the US, a CV is a document used to apply for a position in academia, and that's why it focuses mainly on your educational background, while a resume highlights your work experience. A CV includes a complete list of publications, conferences, etc., so it’s often longer than a resume.</p>
                    <p>To sum up, the <span className="blue">US academic CV </span>outlines every detail of your scholarly career. In other countries, a CV is the equivalent of an American resume and is used to apply for a job.</p>
                </div>
            </div>

            {/* how to write cv */}
            <div className="cv">
                <div className="que">
                    <p>How to Write a CV</p>
                </div>
                <div className="ans">
                    <p>Sitting down to write your CV can feel overwhelming, right? I've been there. But don't worry, I've figured out 9 easy to follow steps to make it easier and more effective.</p>
                    <p>Remember: </p>
                    <p>So, let's dive straight in—I'll guide you through writing a standout CV that grabs attention and lands you that dream job. </p>
                    <p>Ready? Let's get started.</p>
                </div>

                {/* step1 */}
                <div className="que small-font m-t">
                    <p>Step 1: Start with the Right CV Format</p>
                </div>
                <div className="ans">
                    <p>Recruiters spend only <span className="blue"> 6-7 seconds</span> scanning each CV. So, the very first impression is key. If you submit a neat, properly organized document, you’ll convince the recruiters to spend more time on your CV.</p>
                    <p>Here’s how to make a <span className="blue"> CV format</span> the right way.</p>
                    <p>Start with creating a CV outline divided into the following sections:</p>
                    <ol className="struct">
                        <li>CV Header with <span className="blue"> Contact Information</span></li>
                        <li>Personal Profile: CV Objective or CV Summary</li>
                        <li>Professional Experience</li>
                        <li><span className="blue">Work Experience</span></li>
                        <li><span className="blue">Education</span></li>
                        <li>Skills</li>
                        <li><span className="blue">Additional Sections</span></li>
                    </ol>
                </div>
                <div className="border-text blue-box">
                    <p><span className="content-bold">Pro Tip: </span>If you’re fresh out of uni and need to write a CV with no experience or graduated from a prestigious institution within the last 5 years, put your education section above your work experience.</p>
                </div>

                {/* step2 */}
                <div className="que small-font m-t">
                    <p>Step 2: Add Your Contact Information the Right Way</p>
                </div>
                <div className="ans">
                    <p>Build a CV header that includes the essential contact details. In the contact information section, enter your:</p>
                    <p>Here’s how to make a <span className="blue"> CV format</span> the right way.</p>
                    <p>Start with creating a CV outline divided into the following sections:</p>
                    <ul className="struct">
                        <li>Full name</li>
                        <li><span className="blue">Professional title</span></li>
                        <li>Professional Experience</li>
                        <li>Email address</li>
                        <li>Telephone number</li>
                        <li>LinkedIn profile</li>
                        <li><span className="blue">Home address</span></li>
                    </ul>

                    <p>The contact information section seems pretty straightforward, but here’s one reason it might be tricky:</p>
                    <p>Recruiters will use it to research you online. If your social media profiles are unprofessional or your <span className="blue"> LinkedIn profile </span>information doesn’t match your CV, you’re immediately out of the race.</p>
                </div>
                <div className="border-text blue-box">
                    <p>Read more:<span className="blue"> How to Check Your Online Presence Before Recruiters Look You Up</span>.</p>
                </div>

                {/* step3 */}
                <div className="que small-font m-t">
                    <p>Step 3: Include a Personal Profile and Your Job Title</p>
                </div>
                <div className="ans">
                    <p>To make an attention-grabbing CV, focus on the <span className="blue">personal profile statement</span>—a short, snappy paragraph of 100 words that tells the recruiters why you are just the candidate they’ve been looking for. Your profile will either be a CV objective or a CV summary.</p>
                    <p>Start with creating a CV outline divided into the following sections:</p>
                    <ul className="struct">
                        <li>A <span className="blue">CV objective</span> shows what skills you’ve mastered and how you’d fit in. It’s a good choice if you’ve got little work experience relevant to the job you’re trying to land, for example, if you’re writing a CV for a student.</li>
                        <li>A <span className="blue">CV summary</span>, in turn, highlights your career progress and achievements. Use it if you’re a seasoned professional with much experience in your field.</li>
                    </ul>

                    <p>The contact information section seems pretty straightforward, but here’s one reason it might be tricky:</p>
                    <p>Recruiters will use it to research you online. If your social media profiles are unprofessional or your <span className="blue"> LinkedIn profile </span>information doesn’t match your CV, you’re immediately out of the race.</p>
                </div>
                <div className="border-text gray-text w-full">
                 <p>When you’re done, <span className="blue">Zety’s resume builder </span>will score your resume and our <span className="blue">resume checker</span> will tell you exactly how to make it better.</p>
                </div>

                {/* step4 */}
                <div className="que small-font m-t">
                    <p>Step 4: List Your Relevant Work Experience & Key Achievements</p>
                </div>
                <div className="ans">
                    <p>More often than not, your work experience section is the most essential part of your CV—the one that gets the most eye time.</p>
                    <p>Here’s how to make a job-winning CV work experience section:</p>
                    <ol className="struct">
                        <li>Focus on your measurable, relevant achievements, not just your duties.</li>
                        <li>Use <span className="blue">action verbs</span>: “created,” “analyzed,” and “implemented,” not “responsible for creating, analysis, and implementation.”</li>
                        <li><span className="blue">Tailor your CV </span>to the job posting—read the job description carefully and check what tasks will be expected of you. If you’ve done them before—put them on your CV, even if those weren’t your primary responsibilities.</li>
                    </ol>

                    <p>The contact information section seems pretty straightforward, but here’s one reason it might be tricky:</p>
                    <p>Recruiters will use it to research you online. If your social media profiles are unprofessional or your <span className="blue"> LinkedIn profile </span>information doesn’t match your CV, you’re immediately out of the race.</p>
                </div>
                <div className="border-text blue-box">
                    <p><span className="content-bold">Pro Tip: </span>If you learn how to list your achievements on a CV the right way, you’ll outperform 9 out of 10 other candidates. Have a read of our dedicated guide: Achievements to Put on a CV: Complete Guide with Examples</p>
                </div>

                {/* step5 */}
                <div className="que small-font m-t">
                    <p>Step 5: Build Your CV Education Section Correctly</p>
                </div>
                <div className="ans">
                    <p>Good news is, <span className="blue">creating a CV education </span> sectionis usually simple.</p>
                    <p>If you’ve got any post-secondary education, include only that on your CV. Don’t mention your high school unless it’s your highest education degree. List:</p>
                    <ul className="struct">
                        <li>Graduation year (if you’re still studying, enter your <span className="blue">expected graduation date</span>)</li>
                        <li>Your <span className="blue"> degree</span></li>
                        <li>Institution name</li>
                        <li><span className="blue">Honors </span>(if applicable)</li>
                    </ul>

                    <p>Including your honors is optional. If you don’t want them to do you more harm than good, add them only if they’re 2:1 or higher for the undergrad degrees and “merit” or “distinction” for postgrads.</p>
                </div>
                <div className="border-text blue-box">
                    <p><span className="content-bold">Pro Tip: </span>If you learn how to list your achievements on a CV the right way, you’ll outperform 9 out of 10 other candidates. Have a read of our dedicated guide: Achievements to Put on a CV: Complete Guide with Examples</p>
                </div>

                {/* step6 */}
                <div className="que small-font m-t">
                    <p>Step 6: Highlight Your Relevant Soft and Hard Skills</p>
                </div>
                <div className="ans">
                    <p>Would a list of a dozen and a half skills look good on a CV? Regarding skills for a CV, focus on their relevance instead of trying to include as many as possible. Include an appropriate mix of hard skills, soft skills, and anything in between.</p>
                </div>
                <div className="orange">
                <p className="b-format">We evaluated 11 million resumes created using our builder and identified the top 10 most common skills:</p>
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

                {/* step7 */}
                <div className="que small-font m-t">
                    <p>Step 7: Include Additional CV Sections to Impress the Recruiter</p>
                </div>
                <div className="ans">
                    <p>Include an additional section where you show off your unquestionable triumphs: things that prove your value as a candidate. Such as the following: </p>
                    <ul className="struct">
                        <li>Industry awards</li>
                        <li><span className="blue">Professional certifications</span></li>
                        <li><span className="blue">Relevant publications</span></li>
                        <li>Professional Affiliations</li>
                        <li>Conferences attended</li>
                        <li>Additional training</li>
                    </ul>

                    <p>Don’t worry if you’re still studying and can showcase none of the above. A good student CV will still benefit from an additional section. Here are some ideas:</p>
                    <ul className="struct">
                        <li>Industry awards</li>
                        <li><span className="blue">Volunteer experience</span></li>
                        <li><span className="blue">Hobbies and interests</span></li>
                        <li><span className="blue">Projects</span></li>
                        <li><span className="blue">Freelance work</span></li>
                        <li>Academic achievements</li>
                        <li>Personal blog</li>
                    </ul>
                </div>
                <div className="border-text blue-box">
                    <p>Read more: <span className="blue">What to Include in a Curriculum Vitae Section by Section</span>.</p>
                </div>

                {/* step8 */}
                <div className="que small-font m-t">
                    <p>Step 8: Organize Everything on a Professional CV Template</p>
                </div>
                <div className="ans">
                    <p>No one likes to mess around with formatting a CV in MS Word. <br />
                    Luckily, there are hundreds of ready, <span className="blue">fill-in-the-blanks CV templates </span>available online. And we offer some genuinely cracking ones. </p>
                    <p>A great cover letter that matches your resume will give you an advantage over other candidates. You can write it in our <span className="blue"><b>cover letter builder here</b></span>. Here's what it may look like:</p>
                    
                    <div className="cv-img">
                        <img src={Combo} alt="" />
                    </div>
                </div>
                <div className="border-text blue-box">
                    <p>See more <span className="blue"><b>cover letter templates and start writing.</b></span></p>
                </div>

                {/* step9 */}
                <div className="que small-font m-t">
                    <p>Step 9: Complement Your CV with a Cover Letter</p>
                </div>
                <div className="ans">
                    <p>“<span className="blue">You don’t need to write a cover letter</span>.” —It’s a piece of horrible career advice.</p>
                    <p>Why?</p>
                    <p>Because as many as 45 out of 100 recruiters won’t even get around to reviewing your CV if there’s no cover letter attached, according to our <span className="blue"> HR statistics </span>report. And writing <span className="blue">great cover letters </span>is much easier than it seems.</p>
                    <div className="cv-img">
                        <img src={Combo} alt="" />
                    </div>
                </div>
                <div className="border-text blue-box">
                    <p>See more <span className="blue"><b>cover letter templates and start writing.</b></span></p>
                </div>
            </div>

            {/* key takeaways */}
            <div className="que">
                    <p>Key Takeaway</p>
                </div>
                <div className="ans">
                    <p>Hiring has changed drastically. It’s fast and furious. You’ll need to go an extra mile with your CV to get your foot in the door.</p>
                    <p className="content-bold">How to write a CV in 7 easy steps:</p>
                    <ol className="struct">
                        <li>Include your <span className="content-bold">contact information</span>.</li>
                        <li>Write a <span className="content-bold">CV personal profile</span>.</li>
                        <li>Describe your <span className="content-bold">work experience</span>.</li>
                        <li>Present your <span className="content-bold">educational background and relevant skills</span>.</li>
                        <li>Add <span className="content-bold">extra CV sections</span>.</li>
                        <li>Use a <span className="content-bold">professional CV template</span>.</li>
                        <li>Attach a <span className="content-bold">cover letter</span> to boost your chances.</li>
                    </ol>
                    <p className="content-bold">Do you have any more questions on how to write a job-winning CV? Give us a shout in the comments, and we’ll answer your queries!</p>
                </div>

        </div>
    </div>
    </>
}
export default WriteCV;