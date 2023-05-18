import React, { Component } from 'react';
import Header from "../../components/header/Header";
import { PersonalInformation, Education, WorkExperience } from './components/index';
import { getRandomString } from '../../libs/common';

import "./cvgenerator.css";

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

    render() {
        return (
        <div>
            <Header />
            <div className="main">
                <PersonalInformation setPersonalInformation={this.setPersonalInformation} />
                <Education setEducation={this.setEducation} />
                <WorkExperience setWorkExperience={this.setWorkExperience} />
            </div>
        </div>
        );
    }
}

export default CVgenerator;