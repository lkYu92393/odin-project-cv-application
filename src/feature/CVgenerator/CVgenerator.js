import React, { Component } from 'react';
import Header from "../../components/header/Header";
import { PersonalInformation, Education, WorkExperience, Skill } from './components/index';

import { getRandomString } from '../../libs/common';

import "./cvgenerator.css";

class CVgenerator extends Component {
    state = {
        key: getRandomString()
        ,preview: false
        ,personalInformation: {}
        , education: []
        , workExperience: []
        , skill: []
    }

    setPersonalInformation = (dict) => {
        this.setState({
            personalInformation: dict
        });
    }

    setEducation = (list) => {
        this.setState({
            education: list
        })
    }

    setWorkExperience = (list) => {
        this.setState({
            workExperience: list
        })
    }

    setSkill = (list) => {
        this.setState({
            skill: list
        })
    }

    changePreview = (event) => {
        this.setState({
            preview: !this.state.preview
        })
    }

    clearAll = () => {
        this.setState({
            key: getRandomString()
            ,preview: false
            ,personalInformation: {}
            , education: []
            , workExperience: []
            , skill: []
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main">
                    <div key={this.state.key}>
                        <PersonalInformation setPersonalInformation={this.setPersonalInformation} isPreview={this.state.preview} />
                        <Education setEducation={this.setEducation} isPreview={this.state.preview} />
                        <WorkExperience setWorkExperience={this.setWorkExperience} isPreview={this.state.preview} />
                        <Skill setSkill={this.setSkill} isPreview={this.state.preview} />
                    </div>
                    <div className="action">
                        <button onClick={this.changePreview}>{this.state.preview ? "Edit" : "Preview"}</button>
                        {this.state.preview ? null : <button onClick={this.clearAll}>Clear All</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default CVgenerator;