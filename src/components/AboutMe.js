import React from 'react';
import triangles from '../triangles.svg'
import Footer from './Footer';

const AboutMe = () => {

    return (
        <section>
            <div id="about-me">
                <header>
                    <div>&#123;<span id="navy">about</span>-<span id="red">me</span>&#125;</div>
                </header>
                <div id="about-me-wrapper">
                    <div id="info">
                        I am young, ambitious and creative person, that is looking for opportunities to develop myself, 
                        gain experience and expand my knowledge in web design. 
                        I am a fan of minimalism and I pay a lot of attention to details
                    </div>
                    <div id="img-container"><img src={triangles} alt="'"></img></div>
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