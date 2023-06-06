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

    onChangeHandler = (event) => {
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
        this.props.setWorkExperience(tempList);
    }

    addButtonHandler = (event) => {
        event.preventDefault();
        const tempList = this.state.workExperience;
        tempList.push({
            key: getRandomString()
            , title: ""
            , organization: ""
            , dateFrom: ""
            , dateTo: ""
            , remark: ""
        });
        this.setState({
            workExperience: tempList
        })
        this.props.setWorkExperience(tempList);
    }

    render() {
        if (this.props.isPreview && this.state.workExperience.every(obj => !obj.title)) {
            return null;
        } else {
            return (
                <Section title="Work Experience">
                    {this.state.workExperience.map((obj, index) => {
                        if (this.props.isPreview) {
                            return (
                                <div className="grid" id={obj.key} key={obj.key}>
                                    <h3 className="row">{obj.title}</h3>
                                    <h2 className="row">{obj.organization}</h2>
                                    <p className="row">{obj.dateFrom} to {obj.dateTo}</p>
                                    <p className="row">{obj.remark}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div className="grid" id={obj.key} key={obj.key}>
                                    <input className="row" name="title" onChange={this.onChangeHandler} value={obj.title} placeholder="Title" />
                                    <input className="row" name="organization" onChange={this.onChangeHandler} value={obj.organization} placeholder="Organization" />
                                    <input name="dateFrom" onChange={this.onChangeHandler} value={obj.dateFrom} placeholder="From" />
                                    <input name="dateTo" onChange={this.onChangeHandler} value={obj.dateTo} placeholder="To" />
                                    <textarea className="row" name="remark" onChange={this.onChangeHandler} value={obj.remark} placeholder="Job Description" />
                                    <button onClick={this.onChangeHandler}>Delete</button>
                                </div>
                            )
                        }
                    })}
                    {this.props.isPreview ? null : <button onClick={this.addButtonHandler}>Add</button>}
                </Section>
            )
        }
    }
}

export default WorkExperience;