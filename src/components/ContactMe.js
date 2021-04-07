import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Header from './Header';
import emailjs from 'emailjs-com';

const ContactMe = () => {

    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const date = new Date();
    
    const [status, setStatus] = useState('');
    const [isEmptyName, setIsEmptyName] = useState('');
    const [isEmptyEmail, setIsEmptyEmail] = useState('');
    const [IsEmptyMessage, setIsEmptyMessage] = useState('');

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

    const validateForm = (e) => {
        e.preventDefault();
        if(!isEmptyName.length || !isEmptyEmail.length || !IsEmptyMessage.length)
            setStatus("fiill all the fields!");
        else
            sendEmail(e);
    }
    const handleChangeName = (e) => {
        setIsEmptyName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setIsEmptyEmail(e.target.value);
    }

    const handleChangeMessage = (e) => {
        setIsEmptyMessage(e.target.value);
    }
    
    return (
        <section>
            <div id="contact-me">
                <Header navyText="contact" redText="Me"/>
                <form id="contact-form" onSubmit={validateForm}>
                    <input type="text" name="name" placeholder="your name" onChange={handleChangeName}></input>
                    <input type="text" name="email" placeholder="your e-mail" onChange={handleChangeEmail}></input>
                    <button type="submit">send message</button>
                    <div id="message-area">
                        <textarea name="message" placeholder="your message" onChange={handleChangeMessage}></textarea>
                    </div>
                </form>
                <div id="msg-status">{status}</div>
                <div id="footer">
                    <div id="social-section">
                        <a href="https://www.linkedin.com/in/b-knapik" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/bknvpik" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                    </div>
                    <div id="enjoy">enjoy your {days[date.getDay()]}!</div>
                    <div id="home">
                        <p>HOME</p>
                        <Link
                                to={"landing-page"} 
                                smooth='easeInOutQuart'
                                duration={2000}
                            >
                            <i className="fas fa-caret-square-up"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
