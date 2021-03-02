import React, { useState, useEffect } from 'react';
import arrow from '../images/arrow-single.svg';

const SkillsSlider = ({category, setCategory, stack, tools}) => {
    const [id, setId] = useState(1);
    const [prev, setPrev] = useState(Object.keys(category).length);
    const [next, setNext] = useState(2);

    const stackLength = Object.keys(stack).length;
    const toolsLength = Object.keys(tools).length;

    const sliderNextHandler = () => {
        id < Object.keys(category).length ? setId(id + 1) : setId(1);  
        next === Object.keys(category).length ? setNext(1) : setNext(next + 1);
        prev === Object.keys(category).length ? setPrev(1) : setPrev(prev + 1);
    };

    const sliderPrevHandler = () => {
        id > 1 ? setId(id - 1) : setId(Object.keys(category).length);
        next === 1 ? setNext(Object.keys(category).length) : setNext(next - 1);
        prev === 1 ? setPrev(Object.keys(category).length) : setPrev(prev - 1);
    };

    const categoryStackHandler = () => {
        setCategory(stack);
        setId(1);
        setPrev(stackLength);
        setNext(2);
    };

    const categoryToolsHandler = () => {
        setCategory(tools);
        setId(1);
        setPrev(toolsLength);
        setNext(2);
    };

    useEffect(() => {
    }, [category])

    return (
        <div className="skills-slider">
            <div id="stack" onClick={categoryStackHandler} style={category === stack ? {borderBottom: '10px solid #f05454'} : {borderBottom: '10px solid #30475e'}}>STACK</div>
            <div id="tools" onClick={categoryToolsHandler} style={category === tools ? {borderBottom: '10px solid #f05454'} : {borderBottom: '10px solid #30475e'}}>TOOLS</div>
            <div id="arrow-left" onClick={sliderPrevHandler}><img src={arrow} alt=""></img></div>
            <div id="left"><img src={category[prev].img.default} alt=""></img></div>
            <div id="center"><img src={category[id].img.default} alt=""></img></div>
            <div id="right"><img src={category[next].img.default} alt=""></img></div>
            <div id="arrow-right" onClick={sliderNextHandler}><img src={arrow} alt=""></img></div>
            <div id="stars"><img src={category[id].stars.default} alt=""></img></div>
        </div>
    );
};

export default SkillsSlider;