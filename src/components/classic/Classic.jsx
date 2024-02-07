/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './classic.css'
import CELL from '../../assets/icons/cell.png'
import EMAIL from '../../assets/icons/email.png'
import ADDRESS from '../../assets/icons/address.png'
import CredentialFunction from '../sub-components/CredentialFunction'
import EducationFunction from '../sub-components/EducationFunction'
import ExperienceFunction from '../sub-components/ExperienceFunction'
import SkillsFunction from '../sub-components/SkillsFunction'
import CertificationFunction from '../sub-components/CertificationFunction'
import Function from './Function'
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
                </div>
    );
}