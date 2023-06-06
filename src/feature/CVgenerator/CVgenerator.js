import React, { Component } from 'react';

import Header from "../../components/header/Header";
import { PersonalInformation, Education, WorkExperience, Skill } from './components/index';

import { getRandomString } from '../../libs/common';

import "./cvgenerator.css";

class CVgenerator extends Component {
    state = {
        key: getRandomString()
        , preview: false
        , personalInformation: {}
        , education: []
        , workExperience: []
        , skill: []
    }

    setStateCallback = (stateName, value) => {
        const tempDict = {}
        tempDict[stateName] = value
        this.setState(tempDict)
    }

    changePreview = (event) => {
        this.setState({
            preview: !this.state.preview
        })
    }

    clearAll = (event) => {
        const emptyState = {
            key: getRandomString()
            , personalInformation: {}
            , education: []
            , workExperience: []
            , skill: []
        }
        this.setState(emptyState)
    }

    render() {
        return (
            <div>
                {this.state.preview ? null : <Header />}
                <div className="main">
                    <div key={this.state.key}>
                        <PersonalInformation setPersonalInformation={(value) => { this.setStateCallback("personalInformation", value) }} isPreview={this.state.preview} />
                        <Education setEducation={(value) => { this.setStateCallback("education", value) }} isPreview={this.state.preview} />
                        <WorkExperience setWorkExperience={(value) => { this.setStateCallback("workExperience", value) }} isPreview={this.state.preview} />
                        <Skill setSkill={(value) => { this.setStateCallback("skill", value) }} isPreview={this.state.preview} />
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