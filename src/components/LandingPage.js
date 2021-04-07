import React from 'react';
import { Link } from 'react-scroll';
import redTriangle from '../images/red-triangle.svg';
import navyTriangle from '../images/navy-triangle.svg';
import Footer from './Footer';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const LandingPage = (props) => {
    return (
        <section>
            <div id="landing-page">
                <header>
                    <a href="https://www.linkedin.com/in/bartosz-knapik-089532208/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/bknvpik" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                </header>
                <div id="landing-wrapper">
                    <div id="landing-left">
                        <div id="hi">Hi, my name is</div>
                        <h1 id="my-name">Bartosz.</h1>
                        <div id="whoami">
                            <Typewriter 
                                options={{
                                    strings: ['{<br />&nbsp&nbsp I am learning <br/>&nbsp&nbsp to become <br/>&nbsp&nbsp a <span id="navy">web </span><span id="red">developer</span>&nbsp&nbsp<br/>}'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 20,
                                    delay: 80
                                    }}
                            >
                            </Typewriter>
                        </div>
                    </div>
                    <div className="img-container">
                    <motion.div
                        animate={{ scale: 1.5 }}
                        transition={{ duration: 0.5 }}
                        drag
                        dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                        }}
                    >
                        <img src={redTriangle} alt=""></img>
                    </motion.div>
                    <motion.div
                        animate={{ scale: 1.5 }}
                        transition={{ duration: 0.5 }}
                        drag
                        dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                        }}
                    >
                        <img src={navyTriangle} alt=""></img>
                    </motion.div>
                    </div>
                    <div id="landing-right">
                        <Link
                            to={"contact-me"} 
                            smooth='easeInOutQuart'
                            duration={2000}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                contact me
                            </motion.button>
                        </Link>
                    </div>
                </div>
            <Footer target="about-me"/>
        </div>
      </section>
    );
};

export default LandingPage;
