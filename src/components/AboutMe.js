import React from 'react';
import triangles from '../images/triangles.svg'
import Header from './Header';
import Footer from './Footer';

const AboutMe = () => {

    return (
        <section>
            <div id="about-me">
                <Header navyText="about" redText="me"/>
                <div id="about-me-wrapper">
                    <div id="info">
                        I am young, ambitious and creative person, that is looking for opportunities to develop myself, 
                        gain experience and expand my knowledge in web development. 
                        I am a fan of minimalism and I pay a lot of attention to details
                    </div>
                    <div className="img-container"><img src={triangles} alt="'"></img></div>
                    <div id="hobbies">
                        My hobbies are programming, fashion, art and new technologies 
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    )
};

export default AboutMe;