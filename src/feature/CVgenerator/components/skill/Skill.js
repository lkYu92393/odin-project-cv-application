import React, { Component } from 'react';
import Section from "../../../../components/section/Section";

import { getRandomString } from '../../../../libs/common';

class Skill extends Component {
    state = {
        skill: [
            {
                key: getRandomString()
                , title: ""
                , remark: ""
            }
        ]
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        const tempList = this.state.skill;
        if (event.target.tagName === "BUTTON") {
            tempList.splice(tempList.indexOf(tempList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            tempList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        this.setState({
            skill: tempList
        })
        this.props.setSkill(tempList);
    }

    addButtonHandler = (event) => {
        event.preventDefault();
        const tempList = this.state.skill;
        tempList.push(
            {
                key: getRandomString()
                , title: ""
                , remark: ""
            });
        this.setState({
            skill: tempList
        })
        this.props.setSkill(tempList);
    }

    render() {
        return (
            <Section title="Skill">
                {this.state.skill.map((obj, index) => {
                    if (this.props.isPreview) {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <h3 className="row">{obj.title}</h3>
                                <p  className="row">{obj.remark}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <input className="row" name="title" onChange={this.onChangeHandler} value={obj.title} placeholder="Skill" />
                                <textarea className="row" name="remark" onChange={this.onChangeHandler} value={obj.remark} placeholder="Skill Description" />
                                <button onClick={this.onChangeHandler}>Delete</button>
                            </div>
                        )
                    }
                })}
                <button onClick={this.addButtonHandler}>Add</button>
            </Section>
        )
    }
}

export default Skill;