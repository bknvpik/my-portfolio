import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const MyProjects = () => {

    const [selectedId, setSelectedId] = useState(null)

    const items = [
        {id: 1, subtitle: "subtitle", title: "title"},
        {id: 2, subtitle: "subtitle", title: "title"},
        {id: 3, subtitle: "subtitle", title: "title"},
    ]
    return (
        <section id="projects-section">
            <div id="my-projects">
                <Header navyText="my" redText="Projects"/>
                <div id="projects">
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
                <Footer target="contact-me"/>
            </div>
        </section>
    )
}

export default MyProjects;