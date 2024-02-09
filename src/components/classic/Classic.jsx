/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './classic.css'
import CELL from '../../assets/icons/cell.png'
import EMAIL from '../../assets/icons/email.png'
import ADDRESS from '../../assets/icons/address.png'
import Function from './Function'
import CredentialFunction from '../sub-components/CredentialFunction'
import EducationFunction from '../sub-components/EducationFunction'
import ExperienceFunction from '../sub-components/ExperienceFunction'
import SkillsFunction from '../sub-components/SkillsFunction'
import CertificationFunction from '../sub-components/CertificationFunction'
export default function Classic() {
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

    if(resumeCredentials === null) {
        return null;
    }

    if (experienceSections.length === 0) {
        return null;
    }

    if (educationSections.length === 0) {
        return null;
    }

    if (skills.length === 0) {
        return null;
    }

    if (certifications.length === 0) {
        return null;
    }

    return (
        <div className="template-box">
            <div className="classic-view-header">
                <div className="name-designation font-lora">
                    <p><i>{resumeCredentials && resumeCredentials.firstName}</i> &nbsp; 
                    <span>{resumeCredentials && resumeCredentials.lastName}</span></p>
                    <div className="line"></div>
                    <p className="font-lora">
                        <small>{resumeCredentials && resumeCredentials.designation.toUpperCase()}</small>
                    </p>    
                </div>
                <div className="details">
                    <p>
                        <small className="font-lora">{resumeCredentials && `+${resumeCredentials.phoneNumber}`}</small>
                        <img className="img" src={resumeCredentials && CELL} alt="cell" width={30} />
                    </p>
                    <p>
                        <small className="font-lora">{resumeCredentials && resumeCredentials.email}</small>
                        <img className="img" src={resumeCredentials && EMAIL} alt="email" width={30} />
                    </p>
                    <p>
                        <small className="font-lora">{resumeCredentials && resumeCredentials.address}</small>
                        <img src={resumeCredentials && ADDRESS} alt="address" width={30} />
                    </p>
                </div>
            </div>
            <div className="classic-view-content font-lora">
                <h1>Summary</h1>
                <p className="font-lora w-70 text-center">{resumeCredentials && resumeCredentials.summary}</p>
            </div>
            <div className="content-holder-grid">
                <div className="grid-1">
                    <h2 className="font-lora text-classic-resume">Education</h2>
                    {

                    }
                    <h2 className="font-lora text-classic-resume">Skills</h2>
                    {skills.map((skill) => (
                        <ul key={skill.id}>
                            <li>
                            {skill.skill.length >= 3 && skill.skill.length <= 80 ? (
                                <p className="font-lora text-classic-resume">{skill.skill}</p>
                            ) : (
                                <p className="font-lora text-danger">Length error (Should be 3-80 characters)</p>
                            )}
                            </li>
                        </ul>
                    ))
                    }
                    <h2 className="font-lora text-classic-resume">Certifications</h2>
                </div>
                <div className="grid-2">
                    <h2 className="font-lora text-classic-resume">Experience</h2>
                    {
                        experienceSections.map((section) => (
                            <div key={section.id} className="mt-25">
                              {section.experienceDesignation.length >= 3 && section.experienceDesignation.length <= 30 ? (
                                <h4 className="font-lora text-classic-resume">{section.experienceDesignation}</h4>
                              ) : (
                                <h5 className="font-lora text-danger">Length error in form submission</h5>
                              )}
                              {section.experienceCompany.length >= 3 && section.experienceCompany.length <= 30 ? (
                                <h5 className="font-lora text-classic-resume">{section.experienceCompany}</h5>
                              ) : (
                                <h4 className="font-lora text-danger">Length error in form submission</h4>
                              )}
                              {section.experienceDuration.length >= 5 && section.experienceDuration.length <= 10 &&
                              section.experienceFrom.length >= 2 && section.experienceFrom.length <= 4 &&
                              section.experienceTo.length >= 2 && section.experienceTo.length <= 4 ? (
                                <p className="font-lora text-classic-resume">
                                  {section.experienceDuration} | {section.experienceFrom} - {section.experienceTo}
                                </p>
                              ) : (
                                <p className="font-lora text-danger">Length error in form submission</p>
                              )}
                              {section.experienceDescription &&
                                section.experienceDescription.map((description) => (
                                  <ul key={description.id} className="mt-10">
                                    <li>
                                      {description.content.length >= 25 && description.content.length <= 125 ? (
                                        <p className="font-lora text-classic-resume">{description.content}</p>
                                      ) : (
                                        <p className="font-lora text-danger">Length error (Should be 25-125 characters)</p>
                                      )}
                                    </li>
                                  </ul>
                                ))
                              }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}