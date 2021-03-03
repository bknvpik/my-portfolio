import React, { useState } from 'react';
import Header from './Header';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const date = new Date();
    
    const [status, setStatus] = useState('');

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_6PstGnyLB2IFCkGTbwwLy')
          .then(() => {
                setStatus('message was sent!');
          }, () => {
                setStatus('an error occurred while sending a message :(');
          });
          e.target.reset();
      };

    return (
        <section>
            <div id="contact-me">
                <Header navyText="contact" redText="me"/>
                <form id="contact-form" onSubmit={sendEmail}>
                    <div id="details">
                        <input type="text" name="name" placeholder="your name"></input>
                        <input type="text" name="email" placeholder="your e-mail"></input>
                        <button type="submit">send message</button>
                    </div>
                    <div id="message-area">
                        <textarea name="message" placeholder="your message"></textarea>
                    </div>
                </form>
                <div id="msg-status">{status}</div>
                <div id="footer">
                    <div id="social-section">
                        <a href="https://www.linkedin.com/in/bartosz-knapik-089532208/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/barteknapik/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://github.com/bknvpik" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                    </div>
                    <div id="enjoy">enjoy your {days[date.getDay()]}!</div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
