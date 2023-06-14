import React from 'react';
import Section from "../../../../components/section/Section";

const initPersonalInformation = (isClear = false) => {
    let base = {
        firstName: ""
        , lastName: ""
        , email: ""
        , phoneNumber: ""
    };
    if (isClear) {
        return base;
    }
    if (localStorage.getItem("personalInformation")) {
        const savedDict = JSON.parse(localStorage.getItem("personalInformation"))
        Object.keys(savedDict).forEach(key => { base[key] = savedDict[key] })
    }
    return base;
}

const PersonalInformation = (props) => {

    const personalInformationHandler = (event) => {
        event.preventDefault();
        const tempDict = props.data;
        tempDict[event.target.name] = event.target.value;
        props.setPersonalInformation(tempDict);
    }

    if (props.isPreview) {
        return (
            <div className="grid">
                <div className="row">{props.data.firstName} {props.data.lastName}</div>
                <div>{props.data.email}</div>
                <div>{props.data.phoneNumber}</div>
            </div>
        )
    } else {
        return (
            <Section title="Personal Information">
                <div className="grid">
                    <input name="firstName" onChange={personalInformationHandler} value={props.data.firstName} placeholder="First Name" />
                    <input name="lastName" onChange={personalInformationHandler} value={props.data.lastName} placeholder="Last Name" />
                    <input name="email" onChange={personalInformationHandler} value={props.data.email} placeholder="Email" />
                    <input name="phoneNumber" onChange={personalInformationHandler} value={props.data.phoneNumber} placeholder="Phone Number" />
                </div>
            </Section>
        )
    }
}

export { initPersonalInformation };
export default PersonalInformation;