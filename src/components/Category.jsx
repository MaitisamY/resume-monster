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
    const [templates, setTemplates] = useState(false);
    const [format, setFormat] = useState(null);

    const closeResumeFormats = () => {
        const formatElement = document.getElementById('resume-formats-popup');
        if (formatElement) {
            formatElement.style.transition = 'opacity 0.5s ease-out';
            formatElement.style.opacity = '0';

            setTimeout(() => {
                setShowResumeFormats(false);
                setTemplates(false);
                setFormat(null);
            }, 500);
        }
    }

    const handleOutsideClick = (e) => {
        if (e.target.id === 'resume-formats-popup') {
            setTimeout(() => {
                setShowResumeFormats(false);
                setTemplates(false);
                setFormat(null);
            }, 500);
        }
    }

    const handleTemplates = () => {
        setTemplates(true);
    }

    const handleFormat = (format) => {
        setFormat(format);
    }

    const closeTemplate = () => {
        setTemplates(false);
        setFormat(null);
    }

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

    const err = errorResponses;

    const cred = resumeCredentials;

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log('errorResponses:', err);
        console.log('resumeCredentials:', cred);
    };
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     // Check for errors in each state
    //     const hasCredentialErrors = Object.keys(errorResponses).some(field => {
    //         const errorMessage = errorResponses[field];
    //         console.log('Error Message (Credentials):', errorMessage);
    //         return errorMessage.trim() !== '';
    //     });
        
    //     const hasEducationErrors = educationSections.some(section => (
    //         Object.keys(section.errors).some(field => {
    //             const errorMessage = section.errors[field];
    //             return errorMessage.trim() !== '';
    //         })
    //     ));
        
    //     const hasExperienceErrors = experienceSections.some(section => (
    //         Object.keys(section.errors).some(field => {
    //             const errorMessage = String(section.errors[field]);
    //             return errorMessage.trim() !== '';
    //         })
    //     ));
        
    //     const hasSkillsErrors = skills.some(skill => (
    //         skill.error.trim() !== ''
    //     ));
        
    //     const hasCertificationErrors = certifications.some(certification => (
    //         Object.keys(certification.errors).some(field => {
    //             const errorMessage = certification.errors[field];
    //             return errorMessage.trim() !== '';
    //         })
    //     ));
    
    //     // Log errors for each state
    //     console.log('Credential Errors:', hasCredentialErrors);
    //     console.log('Education Errors:', hasEducationErrors);
    //     console.log('Experience Errors:', hasExperienceErrors);
    //     console.log('Skills Errors:', hasSkillsErrors);
    //     console.log('Certification Errors:', hasCertificationErrors);
    
    //     // If no errors in any state, proceed
    //     if (!hasCredentialErrors && !hasEducationErrors && !hasExperienceErrors && !hasSkillsErrors && !hasCertificationErrors) {
    //         setShowResumeFormats(true);
    //     } else {
    //         // If there are errors, show error message
    //         setErrorMessage(true);
    //         setTimeout(() => {
    //             setErrorMessage(false);
    //         }, 20000);
    //     }
    // };

    const clearResume = () => {
        localStorage.removeItem('resumeCredentials');
        localStorage.removeItem('educationSections');
        localStorage.removeItem('experienceSections');
        localStorage.removeItem('skills');
        localStorage.removeItem('certifications');

        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    return (
        <>
        {
            showResumeFormats && 
                <ShowResumeFormats 
                    closePopup={closeResumeFormats} 
                    templates={templates} 
                    format={format}
                    handleFormat={handleFormat}
                    handleTemplates={handleTemplates} 
                    backToTemplates={closeTemplate}
                    handleOutsideClick={handleOutsideClick}
                    resumeCredentials={resumeCredentials}
                    educationSections={educationSections}
                    experienceSections={experienceSections}
                    skills={skills}
                    certifications={certifications}
                />
        }
        {
            toast &&
            <div id="toast" className="toast">
                <button className="close" onClick={handleToast}><BsXLg /></button>
                <h3>Welcome to the Resume Overview 📄</h3>
                <p>This side pane offers a comprehensive guide to crafting your chronological resume. 
                Follow the chronological order for your work experiences, starting with the most recent. 
                Pay attention to the structure, emphasizing work history, career growth, and education.</p>
                <h3>🔍 Explore the format</h3>
                <p>This format is great for showcasing a strong work history and career progression. 
                Check out the tips and suggestions in this side pane for a successful resume submission. Happy crafting! ✨</p>
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
                                    Build Up
                                </button>
                            </div>
                            <div className="input-group">
                                <button 
                                    className="clear-btn cursor-pointer smooth-transition font-work-sans" 
                                    type="button"
                                    onClick={clearResume}
                                >
                                    Clear Form
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