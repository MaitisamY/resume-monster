/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import {  BsXLg } from 'react-icons/bs'
import './category.css'
import CATEGORY_DETAILS from '../data/CATEGORY-DETAILS'
import Tips from './Tips'
import ValidateAndSubmit from './category-functions/ValidateAndSubmit'
import Education from './sub-components/Education'
import Experience from './sub-components/Experience'
import Credentials from './sub-components/Credentials'
import Skills from './sub-components/Skills'
import Certification from './sub-components/Certification'

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

    const { 
        handleSubmit,
    } = ValidateAndSubmit();

    return (
        <>
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