import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="main-footer">
               <h3>Language School</h3>
               <p>Guide- scoring instructions, how to complete the skills tracking system, and strategies to take the data obtained from the assessment and develop it into an effective Individualized Education Program (IEP)</p>
            </div>
            <div className="about-schl">
               <p>About School</p>
              <small>
              <ul>            
                  <li>About us</li>
                   <li>Our staff</li>
                   <li>Our partners</li>
                   <li>Careers</li>                 
               </ul>
              </small>
            </div>
            <div className="deep-footer">
               <p>Contact Info</p>
               <small>
                   <p>Gmail: learningscholl@gmail.com</p>
                   <p>Call us: +008123-65-564</p>
                   <p>Dhanmondi Dhaka Bangladesh</p>
               </small>
            </div>
        </div>
    );
};

export default Footer;