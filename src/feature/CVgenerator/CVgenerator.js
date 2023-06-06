import React, { Component } from 'react';

import Header from "../../components/header/Header";
import { PersonalInformation, initPersonalInformation, Education, initEducation, WorkExperience, initWorkExperience, Skill, initSkill } from './components/index';

import { getRandomString } from '../../libs/common';

import "./cvgenerator.css";

class CVgenerator extends Component {
    state = {
        key: getRandomString()
        , preview: false
        , personalInformation: initPersonalInformation()
        , education: initEducation()
        , workExperience: initWorkExperience()
        , skill: initSkill()
    }

    setStateCallback = (stateName, value) => {
        const tempDict = {}
        tempDict[stateName] = value
        this.setState(tempDict)
    }

    changePreview = (event) => {
        event.preventDefault();
        this.setState({
            preview: !this.state.preview
        })
    }

    clearAll = (event) => {
        event.preventDefault();
        const emptyState = {
            personalInformation: {}
            , education: []
            , workExperience: []
            , skill: []
        }
        this.setState(emptyState)
    }

    saveData = (event) => {
        event.preventDefault();
        ["personalInformation", "education", "workExperience", "skill"].forEach(key => {
            localStorage.setItem(key, JSON.stringify(this.state[key]))
        })
    }

    render() {
        return (
            <div>
                {this.state.preview ? null : <Header />}
                <div className="main">
                    <div>
                        <PersonalInformation setPersonalInformation={(value) => { this.setStateCallback("personalInformation", value) }} data={this.state.personalInformation} isPreview={this.state.preview} />
                        <Education setEducation={(value) => { this.setStateCallback("education", value) }} data={this.state.education} isPreview={this.state.preview} />
                        <WorkExperience setWorkExperience={(value) => { this.setStateCallback("workExperience", value) }} data={this.state.workExperience} isPreview={this.state.preview} />
                        <Skill setSkill={(value) => { this.setStateCallback("skill", value) }} data={this.state.skill} isPreview={this.state.preview} />
                    </div>
                    <div className="action">
                        <button onClick={this.changePreview}>{this.state.preview ? "Edit" : "Preview"}</button>
                        {this.state.preview ? null : <button onClick={this.clearAll}>Clear All</button>}
                        {this.state.preview ? null : <button onClick={this.saveData}>Save</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default CVgenerator;