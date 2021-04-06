import React from 'react';
import arrow from '../images/arrow.svg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = (props) => {
    return (
        <footer>
            <Link 
                to={props.target}
                smooth='easeInOutQuint'
                duration={1000}
            >
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1.5
                    }}
                >
                    <img src={arrow} alt=""></img>
                </motion.div>
            </Link>
        </footer>
    );
};

export default Footer;