import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div>&#123;<span id="navy">{props.navyText}</span>-<span id="red">{props.redText}</span>&#125;</div>
        </header>
    );
};

export default Header;