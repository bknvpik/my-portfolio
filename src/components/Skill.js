import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skill = ({ img, stars, name }) => {
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(!visible);
    }
    return (
        <div className="skill">
            <motion.div whileHover={{ scale: 1.2 }} onMouseEnter={handleVisibility} onMouseLeave={handleVisibility}>
                <div className="img-container"><img src={img} alt=""></img></div>
                <div className="name" style={visible ? {visibility: "visible"} : {visibility: "hidden"} }>{ name }</div>
                <div className="stars"><img src={stars} alt=""></img></div>
            </motion.div>
        </div>
    );
};

export default Skill;