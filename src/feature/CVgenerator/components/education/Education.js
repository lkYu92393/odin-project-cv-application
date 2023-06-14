import React from 'react';
import Section from "../../../../components/section/Section";

import { getRandomString } from '../../../../libs/common';

const initEducation = (isClear = false) => {
    let base = [
        {
            key: getRandomString()
            , title: ""
            , organization: ""
            , dateFrom: ""
            , dateTo: ""
        }
    ];
    if (isClear) {
        return base;
    }
    if (localStorage.getItem("education")) {
        try {
            let tempList = JSON.parse(localStorage.getItem("education"));
            if (tempList.length > 0) {
                return tempList;
            }
        } catch {
            console.log("Error parsing saved value for education.");
        }
    }
    return base;
}

const Education = (props) => {
    const onChangeHandler = (event) => {
        event.preventDefault();
        const tempList = props.data;
        if (event.target.tagName === "BUTTON") {
            tempList.splice(tempList.indexOf(tempList.find(obj => obj.key === event.target.parentNode.id)), 1);
        } else {
            tempList.find(obj => obj.key === event.target.parentNode.id)[event.target.name] = event.target.value;
        }
        props.setEducation(tempList);
    }

    const addButtonHandler = (event) => {
        event.preventDefault();
        const tempList = props.data;
        tempList.push({
            key: getRandomString()
            , title: ""
            , organization: ""
            , dateFrom: ""
            , dateTo: ""
        });
        props.setEducation(tempList);
    }


    if (props.isPreview && props.data.every(obj => !obj.title)) {
        return null;
    } else {
        return (
            <Section title="Education">
                {props.data.map((obj, index) => {
                    if (props.isPreview) {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <h3 className="row">{obj.title}</h3>
                                <h2 className="row">{obj.organization}</h2>
                                <p className="row">{obj.dateFrom} to {obj.dateTo}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="grid" id={obj.key} key={obj.key}>
                                <input className="row" name="title" onChange={onChangeHandler} value={obj.title} placeholder="Title" />
                                <input className="row" name="organization" onChange={onChangeHandler} value={obj.organization} placeholder="Organization" />
                                <input name="dateFrom" onChange={onChangeHandler} value={obj.dateFrom} placeholder="From" />
                                <input name="dateTo" onChange={onChangeHandler} value={obj.dateTo} placeholder="To" />
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

export { initEducation };
export default Education;