import React from 'react';
import { Link } from 'react-scroll';
import redTriangle from '../images/red-triangle.svg';
import navyTriangle from '../images/navy-triangle.svg';
import Footer from './Footer';
import Typing from 'react-typing-animation';
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
                        <p id="hi">Hi, my name is</p>
                        <h1 id="my-name">Bartosz.</h1>
                        <div id="whoami">
                            <Typing>
                                <div>{"{"}<br /><div id="indent">I am learning to become a <span id="navy">web </span><span id="red">developer</span></div>{"}"}</div>
                            </Typing>
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
