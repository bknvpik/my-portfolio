import React from 'react'
import { motion } from 'framer-motion';

const variantsLeft = {
    open: { opacity: 1, x: 0, },
    closed: { opacity: 0, x: "-100%" },
}

const variantsRight = {
    open: { opacity: 1, x: 0, },
    closed: { opacity: 0, x: "100%" },
}

const Project = ({ name, logo, direction, className, info, infoHidden, repoLink, preview, previewLink, isOpen }) => {
    let previewButton;
    if(preview)
        previewButton = (<a className="preview-btn" href={previewLink} target="_blank" rel="noreferrer">{preview ? "preview link" : "x"}</a>)
    else
        previewButton = (<a className="preview-btn">x</a>)

    return (
        <div className="project-wrapper">
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={direction === "left" ? variantsLeft : direction === "right" ? variantsRight : {}}
                className={direction}
            >
                <div className={className}>
                    <div className="logo-container">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="buttons">
                        <div className="title">{name}</div>
                        {previewButton}
                        <a className="repo-btn" href={repoLink} target="_blank" rel="noreferrer">repository</a>
                    </div>
                </div>
                <div className="project-info">
                    <span>{info}</span>
                    <span className="hidden">{infoHidden}</span>
                </div>
            </motion.div>
        </div>
    )
}

export default Project;