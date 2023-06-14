import React from 'react';
import Section from "../../../../components/section/Section";

import { getRandomString } from '../../../../libs/common';

const initSkill = (isClear = false) => {
    let base = [
        {
            key: getRandomString()
            , title: ""
            , remark: ""
        }
    ];
    if (isClear) {
        return base;
    }
    if (localStorage.getItem("skill")) {
        try {
            let tempList = JSON.parse(localStorage.getItem("skill"));
            if (tempList.length > 0) {
                return tempList;
            }
        } catch {
            console.log("Error parsing saved value for skill.");
        }
    }
    return base;
}

const Skill = (props) => {
    const onChangeHandler = (event) => {
        event.preventDefault();
        const tempList = props.data;
        if (event.target.tagName === "BUTTON") {
            tempList.splice(tempList.indexOf(tempList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            tempList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        props.setSkill(tempList);
    }

    const addButtonHandler = (event) => {
        event.preventDefault();
        const tempList = props.data;
        tempList.push(
            {
                key: getRandomString()
                , title: ""
                , remark: ""
            });
        props.setSkill(tempList);
    }

    if (props.isPreview && props.data.every(obj => !obj.title)) {
        return null;
    } else {
        return (
            <Section title="Skill">
                {props.data.map((obj, index) => {
                    if (props.isPreview) {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <h3 className="row">{obj.title}</h3>
                                <p className="row">{obj.remark}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <input className="row" name="title" onChange={onChangeHandler} value={obj.title} placeholder="Skill" />
                                <textarea className="row" name="remark" onChange={onChangeHandler} value={obj.remark} placeholder="Skill Description" />
                                <button onClick={onChangeHandler}>Delete</button>
                            </div>
                        )
                    }
                })}
                {props.isPreview ? null : <button onClick={addButtonHandler}>Add</button>}
            </Section>
        )
    }
}

export { initSkill };
export default Skill;