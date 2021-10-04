import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            {/* header of contact section */}
            <div className="input-container">
                Name<input type="text" placeholder="Your Name" />
                Email<input type="text" placeholder="Your Email"/>
                <br /><br />
                Phone<input type="text" placeholder="Your Phone"/>
                Subject<input type="text" placeholder="Your Subject"/>
            </div>
            <textarea name="" id="" cols="30" rows="10" className="message-box" placeholder="Your Message"></textarea>
            <button className="contact-btn">Send Message</button>
        </div>
    );
};

export default Contacts;