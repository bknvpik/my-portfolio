import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Skill from './Skill';
import {stack} from '../skills';

export const MySkills = () => {
    return (
        <section>
            <div id="my-skills">
                <Header navyText="my" redText="Skills" />
                <div id="skills-bg"></div>
                <div id="skills-list">
                    <div className="skills">
                        <div className="skills-row">
                            {stack.map((skill) => (
                                <Skill
                                    key={skill.name}
                                    img={skill.img.default}
                                    stars={skill.stars.default}
                                    name={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>
                <Footer target="my-projects"/>
            </div>
        </section>
    );
};

export default MySkills;
