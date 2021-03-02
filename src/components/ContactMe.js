import React from 'react';
import Header from './Header';

const ContactMe = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const date = new Date();

    return (
        <section>
            <div id="contact-me">
                <Header navyText="contact" redText="me"/>
                <div id="contact-form">
                    <div id="submit">
                        <input type="text" name="name"></input>
                        <input type="text" name="e-mail"></input>
                        <button>send message</button>
                    </div>
                    <div id="message">
                        <textarea></textarea>
                    </div>
                </div>
                <div id="footer">
                    <div id="social-section">
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-github-square"></i>
                    </div>
                    <div id="enjoy">enjoy your {days[date.getDay()]}!</div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
