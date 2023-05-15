import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
        <div class="header">
            <div>CV Application</div>
            <div>Create your CV here</div>
        </div>
        );
    }
}

export default Header;