import React from 'react';
import triangles from '../images/triangles.svg';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <section>
            <div id="landing-page">
                <header>
                    <a href="https://www.linkedin.com/in/bartosz-knapik-089532208/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/barteknapik/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://github.com/bknvpik" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                </header>
                <div id="landing-wrapper">
                    <div id="landing-left">
                        <p id="hi">Hi, my name is</p>
                        <h1 id="my-name">Bartosz.</h1>
                        <div id="whoami">
                            &#123;
                            <br/>
                                <div>I am learning to</div>
                                <div>become a <span id="red">front</span>-<span id="navy">end</span> dev</div>
                            &#125;
                        </div>
                    </div>
                    <div id="landing-right">
                        <img src={triangles} alt=""></img>
                        <button href="#contact-me">contact me</button>
                    </div>
                </div>
            <Footer />
        </div>
      </section>
    );
};

export default LandingPage;
