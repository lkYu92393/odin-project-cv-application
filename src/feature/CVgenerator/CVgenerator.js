import React, { useState } from 'react';
import html2pdf from 'html-to-pdf-js';

import Header from "../../components/header/Header";
import { PersonalInformation, initPersonalInformation, Education, initEducation, WorkExperience, initWorkExperience, Skill, initSkill } from './components/index';

import "./cvgenerator.css";

const CVgenerator = () => {
    const [ preview, setPreview ] = useState(false);
    const [ cvInfo, setCVInfo ] = useState({
        personalInformation: initPersonalInformation()
        , education: initEducation()
        , workExperience: initWorkExperience()
        , skill: initSkill()
    });

    const setStateCallback = (stateName, value) => {
        const tempDict = {
            ...cvInfo
        };
        tempDict[stateName] = value;
        setCVInfo(tempDict);
    }

    const clearAll = (event) => {
        event.preventDefault();
        const emptyState = {
            personalInformation: initPersonalInformation(true)
            , education: initEducation(true)
            , workExperience: initWorkExperience(true)
            , skill: initSkill(true)
        }
        setCVInfo(emptyState);
    }

    const saveData = (event) => {
        event.preventDefault();
        ["personalInformation", "education", "workExperience", "skill"].forEach(key => {
            localStorage.setItem(key, JSON.stringify(cvInfo[key]))
        })
    }

    const generatePDF = (event) => {
        event.preventDefault();
        const printElem = document.getElementById("print");
        let options = {
            margin: 1,
            filename: `cv_${new Date().toLocaleDateString("en-UK").replaceAll("/", "")}`
        };
        html2pdf().set(options).from(printElem).save();
    }

    return (
        <div>
            {preview ? null : <Header />}
            <div className="main">
                <div id="shadow">
                    <div id="print">
                        <PersonalInformation setPersonalInformation={(value) => { setStateCallback("personalInformation", value) }} data={cvInfo.personalInformation} isPreview={preview} />
                        <Education setEducation={(value) => { setStateCallback("education", value) }} data={cvInfo.education} isPreview={preview} />
                        <WorkExperience setWorkExperience={(value) => { setStateCallback("workExperience", value) }} data={cvInfo.workExperience} isPreview={preview} />
                        <Skill setSkill={(value) => { setStateCallback("skill", value) }} data={cvInfo.skill} isPreview={preview} />
                    </div>
                </div>
                <div className="action">
                    <button onClick={() => { setPreview(!preview); }}>{preview ? "Edit" : "Preview"}</button>
                    {preview ? null : <button onClick={clearAll}>Clear All</button>}
                    {preview ? null : <button onClick={saveData}>Save</button>}
                    {preview ? <button onClick={generatePDF}>Export as PDF</button> : null}
                </div>
            </div>
        </div>
    );
}

export default CVgenerator;