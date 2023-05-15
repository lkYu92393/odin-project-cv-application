import React, { Component } from 'react';
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
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
        }
    }

    personalInformationHandler(event) {
        this.personalInformation[event.target.name] = event.target.value;
    }

    render() {
        const personalInformation = (
            <div>
                <input name="firstName" value={this.personalInformation.firstName} placeholder="First Name" onChange={this.personalInformationHandler} />
                <input value={this.personalInformation.lastName} />
                <input value={this.personalInformation.email} />
                <input value={this.personalInformation.phoneNumber} />
            </div>
        );

        return (
        <div>
            <Header />
            <div class="main">
                <Section title="Personal Information" children={personalInformation} />
            </div>
        </div>
        );
    }
}

export default CVgenerator;