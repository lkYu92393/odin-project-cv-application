import React from 'react';
import "./section.css";

const Section = (props) => {
    return (
        <div className="section">
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            {props.children}
        </div>
    )
}

export default Section;