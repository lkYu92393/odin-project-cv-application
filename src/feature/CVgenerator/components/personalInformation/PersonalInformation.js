import React, { Component } from 'react';
import Section from "../../../../components/section/Section";

class PersonalInformation extends Component {
    state = {
        firstName: ""
        , lastName: ""
        , email: ""
        , phoneNumber: ""
    }

    personalInformationHandler = (event) => {
        event.preventDefault();
        const tempDict = this.state;
        tempDict[event.target.name] = event.target.value;
        this.setState(tempDict);
        this.props.setPersonalInformation(tempDict);
    }

    render() {
        return (
            <Section title="Personal Information">
                <div className="grid">
                    <input name="firstName" onChange={this.personalInformationHandler} value={this.state.firstName} placeholder="First Name" />
                    <input name="lastName" onChange={this.personalInformationHandler} value={this.state.lastName} placeholder="Last Name" />
                    <input name="email" onChange={this.personalInformationHandler} value={this.state.email} placeholder="Email" />
                    <input name="phoneNumber" onChange={this.personalInformationHandler} value={this.state.phoneNumber} placeholder="Phone Number" />
                </div>
            </Section>
        )
    }
}

export default PersonalInformation;