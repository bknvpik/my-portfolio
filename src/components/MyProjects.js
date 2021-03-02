import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MyProjects = () => {
    return (
        <section>
            <div id="my-projects">
                <Header navyText="my" redText="projects"/>
                <div id="projects">
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
                <Footer />
            </div>
        </section>
    )
}

export default MyProjects;