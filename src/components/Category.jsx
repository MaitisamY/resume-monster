/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import './category.css'
import CATEGORY_DETAILS from '../data/CATEGORY-DETAILS'
import Tips from './Tips'
import Education from './sub-components/Education'
import Experience from './sub-components/Experience'
import Credentials from './sub-components/Credentials'
import Skills from './sub-components/Skills'
import Certification from './sub-components/Certification'
import CredentialFunction from './sub-components/CredentialFunction'
import EducationFunction from './sub-components/EducationFunction'
import ExperienceFunction from './sub-components/ExperienceFunction'
import SkillsFunction from './sub-components/SkillsFunction'
import CertificationFunction from './sub-components/CertificationFunction'
import ShowResumeFormats from './resume-formats/ShowResumeFormats'

export default function Category({ 
    id, 
    toast, 
    handleToast, 
    handleDoNotShowAgain, 
    className 
}) {
    const DETAILS = CATEGORY_DETAILS.find((detail) => detail.id === id);

    const [showTips, setShowTips] = useState(null);
    const handleShowTips = (name) => {
        setShowTips(name);
    }

    const [showResumeFormats, setShowResumeFormats] = useState(false);
    const [errorsMessage, setErrorMessage] = useState(false);

    const {
        errorResponses,
        resumeCredentials,
    } = CredentialFunction();

    const {
        educationSections,
    } = EducationFunction();

    const {
        experienceSections,
    } = ExperienceFunction();

    const {
        skills,
    } = SkillsFunction();

    const {
        certifications,
    } = CertificationFunction();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (
        //     errorResponses.length < 1 && educationSections.errors.length < 1 && experienceSections.errors.length < 1 &&
        //     resumeCredentials.errors.length < 1 && skills.errors.length < 1 && certifications.errors.length < 1
        //     )
        // {
        //     setShowResumeFormats(true);
        // } else {
        //     setErrorMessage(true);
        //     setTimeout(() => {
        //         setErrorMessage(false);
        //     }, 20000);
        // }
        setShowResumeFormats(true);
    };

    return (
        <>
        {
            showResumeFormats && <ShowResumeFormats closePopup={setShowResumeFormats} />
        }
        {
            toast &&
            <div id="toast" className="toast">
                <button className="close" onClick={handleToast}><BsXLg /></button>
                <p>These are the complete instructions to get started and to build your resume.</p>
                <div className="mt-20">
                    <input type="checkbox" checked={false} onChange={handleDoNotShowAgain} />
                    <label>{`Don't show again`}</label>
                </div>
            </div>
        }
        {   
            errorsMessage &&
            <div id="error-message" className="error-message">
                <button className="close" onClick={() => setErrorMessage(false)}><BsXLg /></button>
                <p>You have errors in your resume form.</p>
                <p>Kindly follow the tips for each field.</p>
            </div>
        }
        <div className={`single-category-view ${className}`}>
            <div className="detail-box">
                <h3>Overview And Tips</h3>
                <p>{DETAILS.definition}</p>
                <ul>
                    {DETAILS.features.map((feature) => 
                        <div key={Object.keys(feature)[0]}>
                            <h4>{Object.keys(feature)[0]}</h4>
                            {
                                Array.isArray(Object.values(feature)[0]) ? (
                                Object.values(feature)[0].map((f) => <li key={f}>{f}</li>
                                )) : (<p>{Object.values(feature)[0]}</p>)
                            }
                        </div>
                    )}
                </ul>
                <h4 className="border-top-dull border-bottom-dull">Structure</h4>
                <ul>
                    {DETAILS.structure.map((points) => 
                        <div key={Object.keys(points)[0]}>
                            <h4>{Object.keys(points)[0]}</h4>
                            {
                                Array.isArray(Object.values(points)[0]) ? (
                                Object.values(points)[0].map((p) => <li key={p}>{p}</li>
                                )) : (<p>{Object.values(points)[0]}</p>)
                            }
                        </div>
                    )}
                </ul> 
                <h4 className="border-top-dull border-bottom-dull">When to Use</h4>
                <ul>
                    {DETAILS.whenToUse.map((w) => <li key={w}>{w}</li>) }
                </ul>
                <p>{DETAILS.ending}</p>   
            </div>
            <div className="selection-box">
                <div className="resume-box font-work-sans">
                    <form onSubmit={handleSubmit}>
                        <Credentials 
                            handleShowTips={handleShowTips}
                        />
                        <div className="row">
                            <span className="separator"></span>
                        </div>
                        <Experience 
                            handleShowTips={handleShowTips}
                        />
                        <div className="row">
                            <span className="separator"></span>
                        </div>
                        <Education 
                            handleShowTips={handleShowTips}
                        /> 
                        <div className="row">
                            <span className="separator"></span>
                        </div>
                        <Skills
                            handleShowTips={handleShowTips}
                        />
                        <div className="row">
                            <span className="separator"></span>
                        </div>
                        <Certification
                            handleShowTips={handleShowTips}
                        />   
                        <div className="row">
                            <div className="input-group">
                                <button 
                                    className="build-btn cursor-pointer smooth-transition font-work-sans" 
                                    type="submit"
                                >
                                    Build
                                </button>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
            <div className="tips">
                <Tips title={showTips === null ? null : showTips} />
            </div>
        </div>
        </>
    );
}