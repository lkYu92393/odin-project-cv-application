import React, { Component } from 'react';
import Section from "../../../../components/section/Section";

const initPersonalInformation = () => {
    let base = {
        firstName: ""
        , lastName: ""
        , email: ""
        , phoneNumber: ""
    }
    if (localStorage.getItem("personalInformation")) {
        const savedDict = JSON.parse(localStorage.getItem("personalInformation"))
        Object.keys(savedDict).forEach(key => { base[key] = savedDict[key] })
    }
    return base;
}

class PersonalInformation extends Component {
    personalInformationHandler = (event) => {
        event.preventDefault();
        const tempDict = this.props.data;
        tempDict[event.target.name] = event.target.value;
        this.props.setPersonalInformation(tempDict);
    }

    render() {
        return (
            <Section title="Personal Information">
                {
                    this.props.isPreview ?
                        <div className="grid">
                            <div className="row">{this.props.data.firstName} {this.props.data.lastName}</div>
                            <div>{this.props.data.email}</div>
                            <div>{this.props.data.phoneNumber}</div>
                        </div>
                        :
                        <div className="grid">
                            <input name="firstName" onChange={this.personalInformationHandler} value={this.props.data.firstName} placeholder="First Name" />
                            <input name="lastName" onChange={this.personalInformationHandler} value={this.props.data.lastName} placeholder="Last Name" />
                            <input name="email" onChange={this.personalInformationHandler} value={this.props.data.email} placeholder="Email" />
                            <input name="phoneNumber" onChange={this.personalInformationHandler} value={this.props.data.phoneNumber} placeholder="Phone Number" />
                        </div>
                }
            </Section>
        )
    }
}

export { initPersonalInformation };
export default PersonalInformation;