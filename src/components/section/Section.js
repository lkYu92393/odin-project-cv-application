import React, { Component } from 'react';
import "./section.css";

class Section extends Component {
    render() {
        return (
            <div className="section">
                <div className="title">
                    <h4>{this.props.title}</h4>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Section;