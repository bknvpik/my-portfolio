import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SkillsSlider from './SkillsSlider';
import {stack, tools} from '../skills';

export const MySkills = () => {
    const [category, setCategory] = useState(stack);
    
    return (
        <section>
            <div id="my-skills">
                <Header navyText="my" redText="skills" />
                <div id="skills-bg"></div>
                <div id="skills">
                    <SkillsSlider category={category} setCategory={setCategory} stack={stack} tools={tools}/>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default MySkills;
