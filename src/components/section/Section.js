import React, { Component } from 'react';
import "./section.css";

class Section extends Component {
    constructor(props) {
        super();

        this.title = props.title;
        this.children = props.children;
    }

    render() {
        return (
        <div class="section">
            <div class="title">{this.title}</div>
            {this.children}
        </div>
        )
    }
}

export default Section;