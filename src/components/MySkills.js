import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkillsSlider from './SkillsSlider';

export const MySkills = () => {
    return (
        <section>
            <div id="my-skills">
                <Header navyText="my" redText="skills" />
                <div id="skills-bg"></div>
                <div id="skills">
                    <SkillsSlider />
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default MySkills;
