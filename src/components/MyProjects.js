import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import { projects } from '../projects';

const MyProjects = () => {
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef();

    const scrollHandler = () => {
        if(inputRef.current.getBoundingClientRect().top <= 0)
        {
            setIsOpen(true);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
          window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

    return (
        <section id="projects-section">
            <div id="my-projects" ref={inputRef}>
                <Header navyText="my" redText="Projects"/>
                <div id="projects">
                    {projects.map((project) => (
                        <Project
                            key={project.name}
                            name={project.name}
                            logo={project.logo.default}
                            direction={project.direction}
                            className={project.className}
                            info={project.info}
                            infoHidden={project.infoHidden}
                            repoLink={project.repoLink}
                            preview={project.preview}
                            previewLink={project.previewLink}
                            isOpen={isOpen}
                        />
                    ))}
                </div>
                <Footer target="contact-me"/>
            </div>
        </section>
    )
}

export default MyProjects;