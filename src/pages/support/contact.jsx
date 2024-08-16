import React from "react";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Triangle1 from '../../images/contact/triangle-1.svg';
import Triangle2 from '../../images/contact/triangle-2.svg';
import FormImg from '../../images/contact/form-img.png';
import Logos from '../../images/cv-example/logos.png';
import Navbar from "../../components/navbar";


function Contact(){
    return<>
    <Navbar/>
    <div className="c-main">
        <div className="img-card">
            <div className="img1">
                <img src={Triangle2} alt="" />
            </div>
            <div className="img-text">
                <p className="c-head">Let us know if you need any help!</p>
                <p className="c-gray">Our customer happiness agents will assist you with <br /> any issues you’re facing.</p>
                <div className="country">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                        <p className="c-gray no-m">United States</p>
                        <p className="no">800-985-7561</p>
                    </div>
                    
                </div>
            </div>
            <div className="img2">
                <img src={Triangle1} alt="" />
            </div>
        </div>

        <div className="c-logos">
            <img src={Logos} alt="" />
        </div>

        <div className="contact-cards">
        <div className="c-blue-card">
            <div className="phone-icon-border">
                <div className="phone-bg">
                    <FontAwesomeIcon icon={faPhone} className="phone"/>
                </div>
            </div>
            <div className="b-card">
                <div className="c-top">
                    <p className="country-name">United States</p>
                    <p className="gray-c-txt">Our friendly customer service team <br />
                    can assist you.</p>
                    <p>Call us: 800-985-7561</p>
                </div>
                <hr />
                <div className="c-bottom">
                    <p className="gray-c-txt s-font">Average wait time: 2 minutes</p>
                    <div className="time">
                        <div className="day">
                            <p>Now Closed</p>
                        </div>
                        <div className="tym">
                            <p>10AM - 6PM CST</p>
                        </div>
                    </div>
                    <p className="gray-c-txt s-font">Opening hours</p>
                    <div className="time">
                        <div className="day">
                            <p>Monday-Friday</p>
                        </div>
                        <div className="tym">
                            <p>8AM - 8PM CST</p>
                        </div>
                    </div>
                    <div className="time">
                        <div className="day">
                            <p>Saturday</p>
                        </div>
                        <div className="tym">
                            <p>8AM - 5PM CST</p>
                        </div>
                    </div>
                    <div className="time">
                        <div className="day">
                            <p>Sunday</p>
                        </div>
                        <div className="tym">
                            <p>10AM - 6PM CST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="c-blue-card">
        <div className="phone-icon-border">
                <div className="phone-bg">
                    <FontAwesomeIcon icon={faPhone} className="phone"/>
                </div>
            </div>
            <div className="b-card">
                <div className="c-top">
                    <p className="country-name">India</p>
                    <p className="gray-c-txt">Our friendly customer service team <br />
                    can assist you.</p>
                    <p>Call us: 000-800-082-0006</p>
                </div>
                <hr />
                <div className="c-bottom">
                    <p className="gray-c-txt s-font">Average wait time: 2 minutes</p>
                    <div className="time">
                        <div className="day">
                            <p>Now Open</p>
                        </div>
                        <div className="tym">
                            <p>10AM - 6PM IST</p>
                        </div>
                    </div>
                    <p className="gray-c-txt s-font">Opening hours</p>
                    <div className="time">
                        <div className="day">
                            <p>Monday-Friday</p>
                        </div>
                        <div className="tym">
                            <p>8AM - 8PM IST</p>
                        </div>
                    </div>
                    <div className="time">
                        <div className="day">
                            <p>Saturday</p>
                        </div>
                        <div className="tym">
                            <p>8AM - 5PM IST</p>
                        </div>
                    </div>
                    <div className="time">
                        <div className="day">
                            <p>Sunday</p>
                        </div>
                        <div className="tym">
                            <p>10AM - 6PM IST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="c-blue-card">
        <div className="phone-icon-border">
                <div className="phone-bg">
                    <FontAwesomeIcon icon={faPhone} className="phone"/>
                </div>
            </div>
            <div className="b-card">
                <div className="c-top">
                    <p className="country-name">Australia</p>
                    <p className="gray-c-txt">Our friendly customer service team <br />
                    can assist you.</p>
                    <p>Call us: 1800-549-775</p>
                </div>
                <hr />
                <div className="c-bottom">
                    <p className="gray-c-txt s-font">Average wait time: 2 minutes</p>
                    <div className="time">
                        <div className="day">
                            <p>Now Open</p>
                        </div>
                        <div className="tym">
                            <p>10AM - 6PM AEST</p>
                        </div>
                    </div>
                    <p className="gray-c-txt s-font">Opening hours</p>
                    <div className="time">
                        <div className="day">
                            <p>Monday-Friday</p>
                        </div>
                        <div className="tym">
                            <p>8AM - 8PM AEST</p>
                        </div>
                    </div>
                    <div className="time">
                        <div className="day">
                            <p>Saturday</p>
                        </div>
                        <div className="tym">
                            <p>8AM - 5PM AEST</p>
                        </div>
                    </div>
                    <div className="time">
                        <div className="day">
                            <p>Sunday</p>
                        </div>
                        <div className="tym">
                            <p>10AM - 6PM AEST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </div>
    <div className="form">
            <div className="c-form">
                <p className="form-head">Contact Form</p>
                <form action="">
                    <input type="text" placeholder="Enter subject here"/>
                    <div className="combo-inp">
                        <input type="text" placeholder="E-mail address"/>
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <textarea name="" id="" placeholder="Let us know how we can help you!"></textarea>
                </form>
                <div className="c-btn">
                    <p>We will process your data in accordance with our <span className="blue"> Privacy Policy</span>.</p>
                    <div className={'send-btn'}>
                        <button>Send Message</button>
                    </div>
                </div>
                
            </div>
            <div className="c-form-img">
                <img src={FormImg} alt="" />
            </div>

    </div>
    <div className="tabs">
        <a href="">FAQ GDPR</a> |
        <a href="">Personal Data</a> |
        <a href="">CCPA</a>
    </div>
    
    <div className="blue-l-card">
        <p>Try zety's professional resume builder now</p>
        <div className={'dream-btn'}>
            <button>Land Your Dream Job Now</button>
        </div>
    </div>

    
    </>
}
export default Contact;