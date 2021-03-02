import React, { useState } from 'react';
import arrow from '../images/arrow-single.svg';

const SkillsSlider = () => {
    const [id, setId] = useState(1);
    const [prev, setPrev] = useState(6);
    const [next, setNext] = useState(2);

    const skills = {
        1: {
            name: 'html',
            img: require('../images/slider_images/html.svg')
        },
        2: {
            name: 'css',
            img: require('../images/slider_images/css.svg')
        },
        3: {
            name: 'sass',
            img: require('../images/slider_images/sass.svg')
        },
        4: {
            name: 'js',
            img: require('../images/slider_images/js.svg')
        },
        5: {
            name: 'react',
            img: require('../images/slider_images/react.svg')
        },
        6: {
            name: 'python',
            img: require('../images/slider_images/python.svg')
        }
    }

    const sliderNextHandler = () => {
        id < Object.keys(skills).length ? setId(id + 1) : setId(1);  
        next === Object.keys(skills).length ? setNext(1) : setNext(next + 1);
        prev === Object.keys(skills).length ? setPrev(1) : setPrev(prev + 1);
    };

    const sliderPrevHandler = () => {
        id > 1 ? setId(id - 1) : setId(Object.keys(skills).length);
        next === 1 ? setNext(Object.keys(skills).length) : setNext(next - 1);
        prev === 1 ? setPrev(Object.keys(skills).length) : setPrev(prev - 1);
    };

    return (
        <div className="skills-slider">
            <div id="categories">
                <button id="stack">STACK</button>
                <button id="tools">TOOLS</button>
            </div>
            <div id="arrow-left" onClick={sliderPrevHandler}><img src={arrow} alt=""></img></div>
            <div id="left"><img src={skills[prev].img.default} alt=""></img></div>
            <div id="center"><img src={skills[id].img.default} alt=""></img></div>
            <div id="right"><img src={skills[next].img.default} alt=""></img></div>
            <div id="arrow-right" onClick={sliderNextHandler}><img src={arrow} alt=""></img></div>
            <div id="stars"></div>
        </div>
    );
};

export default SkillsSlider;