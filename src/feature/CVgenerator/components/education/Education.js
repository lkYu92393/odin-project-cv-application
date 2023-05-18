import React, { Component } from 'react';
import Section from "../../../../components/section/Section";

import { getRandomString } from '../../../../libs/common';

class Education extends Component {
    state = {
        education: [
            {
                key: getRandomString()
                , title: ""
                , organization: ""
                , dateFrom: ""
                , dateTo: ""
            }
        ]
    }

    educationHandler = (event) => {
        event.preventDefault();
        const educationList = this.state.education;
        if (event.target.tagName === "BUTTON") {
            educationList.splice(educationList.indexOf(educationList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            educationList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        this.setState({
            education: educationList
        })
        this.props.setEducation(educationList);
    }

    addEducationButtonHandler = (event) => {
        event.preventDefault();
        const educationList = this.state.education;
        educationList.push({
            key: getRandomString()
            , title: ""
            , organization: ""
            , dateFrom: ""
            , dateTo: ""
        });
        this.setState({
            education: educationList
        })
        this.props.setEducation(educationList);
    }

    render() {
        return (
            <Section title="Education">
                {this.state.education.map((obj, index) => {
                    return (
                        <div className="grid" id={obj.key} key={obj.key}>
                            <input className="row" name="title" onChange={this.educationHandler} value={obj.title} placeholder="Title" />
                            <input className="row" name="organization" onChange={this.educationHandler} value={obj.organization} placeholder="Organization" />
                            <input name="dateFrom" onChange={this.educationHandler} value={obj.dateFrom} placeholder="From" />
                            <input name="dateTo" onChange={this.educationHandler} value={obj.dateTo} placeholder="To" />
                            <button onClick={this.educationHandler}>Delete</button>
                        </div>
                    )
                })}
                <button onClick={this.addEducationButtonHandler}>Add</button>
            </Section>
        )
    }
}

export default Education;