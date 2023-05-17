import React, { Component } from 'react';
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";

import "./cvgenerator.css";

const getRandomString = () => {
    let text = "abcdefghijklmnopqrstuvwxyz";
    let length = 16;

    let output = "";
    for (let i = 0; i < length; i++) {
        output += text.charAt(Math.floor(Math.random() * text.length));
    }
    return output;
}

class CVgenerator extends Component {
    constructor() {
        super();

        this.state = {
            personalInformation: {
                firstName: ""
                ,lastName: ""
                ,email: ""
                ,phoneNumber: ""
            }
            ,education: [
                {
                    key: getRandomString()
                    ,title: ""
                    ,organization: ""
                    ,dateFrom: ""
                    ,dateTo: ""
                }
            ]
            ,workExperience: [
                {
                    key: getRandomString()
                    ,title: ""
                    ,organization: ""
                    ,dateFrom: ""
                    ,dateTo: ""
                    ,remark: ""
                }
            ]
        }
    }

    personalInformationHandler = (event) => {
        event.preventDefault();
        const tempDict = this.state.personalInformation;
        tempDict[event.target.name] = event.target.value;
        this.setState({
            personalInformation: tempDict
        });
    }

    educationHandler = (event) => {
        event.preventDefault();
        const tempList = this.state.education;
        if (event.target.tagName === "BUTTON") {
            tempList.splice(tempList.indexOf(tempList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            tempList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        this.setState({
            education: tempList
        })
    }

    addEducationButtonHandler = (event) => {
        event.preventDefault();
        const educationList = this.state.education;
        educationList.push({
            key: getRandomString()
            ,title: ""
            ,organization: ""
            ,dateFrom: ""
            ,dateTo: ""
        });
        this.setState({
            education: educationList
        })
    }

    workExperienceHandler = (event) => {
        event.preventDefault();
        const tempList = this.state.workExperience;
        if (event.target.tagName === "BUTTON") {
            tempList.splice(tempList.indexOf(tempList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            tempList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        this.setState({
            workExperience: tempList
        })
    }

    addWorkExperienceButtonHandler = (event) => {
        event.preventDefault();
        const workExperienceList = this.state.workExperience;
        workExperienceList.push({
            key: getRandomString()
            ,title: ""
            ,organization: ""
            ,dateFrom: ""
            ,dateTo: ""
            ,remark: ""
        });
        this.setState({
            workExperience: workExperienceList
        })
    }

    render() {
        return (
        <div>
            <Header />
            <div className="main">
                <Section title="Personal Information">
                    <div className="grid">
                        <input name="firstName" onChange={this.personalInformationHandler} value={this.state.personalInformation.firstName} placeholder="First Name" />
                        <input name="lastName" onChange={this.personalInformationHandler} value={this.state.personalInformation.lastName} placeholder="Last Name" />
                        <input name="email" onChange={this.personalInformationHandler} value={this.state.personalInformation.email} placeholder="Email" />
                        <input name="phoneNumber" onChange={this.personalInformationHandler} value={this.state.personalInformation.phoneNumber} placeholder="Phone Number" />
                    </div>
                </Section>
                <Section title="Education">
                    {this.state.education.map((obj, index) => {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <input className="row" name="title" onChange={this.educationHandler} value={obj.title} placeholder="Title" />
                                <input className="row" name="organization" onChange={this.educationHandler} value={obj.organization} placeholder="Organization"/>
                                <input name="dateFrom" onChange={this.educationHandler} value={obj.dateFrom} placeholder="From" />
                                <input name="dateTo" onChange={this.educationHandler} value={obj.dateTo} placeholder="To" />
                                <button onClick={this.educationHandler}>Delete</button>
                            </div>
                        )
                    })}
                    <button onClick={this.addEducationButtonHandler}>Add</button>
                </Section>
                <Section title="Work Experience">
                    {this.state.workExperience.map((obj, index) => {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <input className="row" name="title" onChange={this.workExperienceHandler} value={obj.title} placeholder="Title" />
                                <input className="row" name="organization" onChange={this.workExperienceHandler} value={obj.organization} placeholder="Organization"/>
                                <input name="dateFrom" onChange={this.workExperienceHandler} value={obj.dateFrom} placeholder="From" />
                                <input name="dateTo" onChange={this.workExperienceHandler} value={obj.dateTo} placeholder="To" />
                                <textarea className="row" name="remark" onChange={this.workExperienceHandler} value={obj.remark} placeholder="Job Description" />
                                <button onClick={this.workExperienceHandler}>Delete</button>
                            </div>
                        )
                    })}
                    <button onClick={this.addWorkExperienceButtonHandler}>Add</button>
                </Section>
            </div>
        </div>
        );
    }
}

export default CVgenerator;