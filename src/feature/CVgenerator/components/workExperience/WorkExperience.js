import React, { Component } from 'react';
import Section from "../../../../components/section/Section";

import { getRandomString } from '../../../../libs/common';

class WorkExperience extends Component {
    state = {
        workExperience: [
            {
                key: getRandomString()
                , title: ""
                , organization: ""
                , dateFrom: ""
                , dateTo: ""
                , remark: ""
            }
        ]
    }

    workExperienceHandler = (event) => {
        event.preventDefault();
        const workExperienceList = this.state.workExperience;
        if (event.target.tagName === "BUTTON") {
            workExperienceList.splice(workExperienceList.indexOf(workExperienceList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            workExperienceList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        this.setState({
            workExperience: workExperienceList
        })
        this.props.setWorkExperience(workExperienceList);
    }

    addWorkExperienceButtonHandler = (event) => {
        event.preventDefault();
        const workExperienceList = this.state.workExperience;
        workExperienceList.push({
            key: getRandomString()
            , title: ""
            , organization: ""
            , dateFrom: ""
            , dateTo: ""
            , remark: ""
        });
        this.setState({
            workExperience: workExperienceList
        })
        this.props.setWorkExperience(workExperienceList);
    }

    render() {
        return (
            <Section title="Work Experience">
                {this.state.workExperience.map((obj, index) => {
                    return (
                        <div className="grid" id={obj.key} key={obj.key}>
                            <input className="row" name="title" onChange={this.workExperienceHandler} value={obj.title} placeholder="Title" />
                            <input className="row" name="organization" onChange={this.workExperienceHandler} value={obj.organization} placeholder="Organization" />
                            <input name="dateFrom" onChange={this.workExperienceHandler} value={obj.dateFrom} placeholder="From" />
                            <input name="dateTo" onChange={this.workExperienceHandler} value={obj.dateTo} placeholder="To" />
                            <textarea className="row" name="remark" onChange={this.workExperienceHandler} value={obj.remark} placeholder="Job Description" />
                            <button onClick={this.workExperienceHandler}>Delete</button>
                        </div>
                    )
                })}
                <button onClick={this.addWorkExperienceButtonHandler}>Add</button>
            </Section>
        )
    }
}

export default WorkExperience;