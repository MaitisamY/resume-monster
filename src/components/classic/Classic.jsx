/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import html2pdf from 'html2pdf.js'
import { BsDownload } from 'react-icons/bs'
import './classic.css'
import './download.css'
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
    const [download, setDownload] = useState(false)
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

    const handleDownload = () => {
        const element = document.getElementById('download-content'); 
        html2pdf(element, {
            margin: [0.2, 0.3, 0.2, 0.3],
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, dpi: 300 },
            pagebreak: { mode: ['avoid', 'css'], after: '.page-break-after', avoid: 'hr, h1, h2, h3, h4, h5, h6, p' },
            useCORS: true,
            metaData: { author: 'Resume-Monster', subject: 'Resume', title: 'Resume' },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait', pagesplit: true, autoFirstPage: false },
        });
    }

    return (
        <>
        <button className="download-btn" onClick={handleDownload}><BsDownload /></button>
        <div id="download-content" className="download">
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
                        <img className="img" src={resumeCredentials && CELL} alt="cell" width={20} />
                    </p>
                    <p>
                        <small className="font-lora">{resumeCredentials && resumeCredentials.email}</small>
                        <img className="img" src={resumeCredentials && EMAIL} alt="email" width={20} />
                    </p>
                    <p>
                        <small className="font-lora smallest">{resumeCredentials && resumeCredentials.address}</small>
                        <img src={resumeCredentials && ADDRESS} alt="address" width={20} />
                    </p>
                </div>
            </div>
            <div className="classic-view-content font-lora">
                <h1>Summary</h1>
                <p className="font-lora w-70 text-center">{resumeCredentials && resumeCredentials.summary}</p>
            </div>
            <div className="content-holder-grid">
                <div className="grid-1">
                    {educationSections.some(section => (
                        section.institution.length > 0 || 
                        section.degree.length > 0 || 
                        section.startYear.length > 0 || 
                        section.endYear.length > 0
                    )) && (
                        <h2 className="font-lora text-classic-resume">Education</h2>
                    )}
                    {educationSections.map((section, index) => (
                        (section.institution.length > 0 || 
                        section.degree.length > 0 || 
                        section.startYear.length > 0 || 
                        section.endYear.length > 0) && (
                            <div key={section.id} className="mt-15">
                                {/* Render education details */}
                                {section.institution.length >= 3 && section.institution.length <= 30 ? (
                                    <h4 className="font-lora text-classic-resume">{section.institution}</h4>
                                ) : (
                                    <p className="font-lora text-danger">Length error (Should be 3-30 characters)</p>
                                )}
                                {section.degree.length >= 3 && section.degree.length <= 30 ? (
                                    <h5 className="font-lora text-classic-resume">{section.degree}</h5>
                                ) : (
                                    <p className="font-lora text-danger">Length error (Should be 3-30 characters)</p>
                                )}
                                {(section.startYear.length >= 2 && section.startYear.length <= 4) &&
                                (section.endYear.length >= 2 && section.endYear.length <= 4) ? (
                                    <p className="font-lora text-classic-resume">
                                        {section.startYear} - {section.endYear}
                                    </p>
                                ) : (
                                    <p className="font-lora text-danger">Length error (Should be 2-4 characters)</p>
                                )}
                            </div>
                        )
                    ))}
                    {skills.some(skill => skill.skill.length > 0) && (
                        <h2 className="font-lora text-classic-resume">Skills</h2>
                    )}
                    {skills.map((skill) => (
                        skill.skill.length > 0 && (
                            <ul key={skill.id} className="mt-15">
                                <li className="font-lora text-classic-resume">
                                    {skill.skill.length >= 3 && skill.skill.length <= 80 ? (
                                        <p className="font-lora text-classic-resume">{skill.skill}</p>
                                    ) : (
                                        <p className="font-lora text-classic-resume">Length error (Should be 3-80 characters)</p>
                                    )}
                                </li>
                            </ul>
                        )
                    ))}
                    {certifications.some(certification => (
                        certification.institute.length > 0 || 
                        certification.certification.length > 0 || 
                        certification.yearFrom.length > 0 || 
                        certification.yearTo.length > 0
                    )) && (
                        <h2 className="font-lora text-classic-resume">Certifications</h2>
                    )}
                    {
                        certifications.map((certification) => (
                            (certification.institute.length > 0 || 
                                certification.certification.length > 0 || 
                                certification.yearFrom.length > 0 || 
                                certification.yearTo.length > 0) && (
                            <div key={certification.id} className="mt-15">
                                {
                                    certification.institute.length >= 3 && certification.institute.length <= 30 ? (
                                        <h4 className="font-lora text-classic-resume">{certification.institute}</h4>
                                    ) : (
                                        <p className="font-lora text-danger">Length error (Should be 3-30 characters)</p>
                                    )
                                }
                                {
                                    certification.certification.length >= 3 && certification.certification.length <= 30 ? (
                                        <h5 className="font-lora text-classic-resume">{certification.certification}</h5>
                                    ) : (
                                        <p className="font-lora text-danger">Length error (Should be 3-30 characters)</p>
                                    )
                                }
                                {
                                    certification.yearFrom.length >= 2 && certification.yearFrom.length <= 4 &&
                                    certification.yearTo.length >= 2 && certification.yearTo.length <= 4 ? (
                                        <p className="font-lora text-classic-resume">
                                            {certification.yearFrom} - {certification.yearTo}
                                        </p>
                                    ) : (
                                        <p className="font-lora text-danger">Length error (Should be 2-4 characters)</p>
                                    )
                                }
                            </div>
                        )))
                    }
                </div>
                <div className="grid-2">
                    {experienceSections.some(section => (
                        section.experienceDesignation.length > 0 || 
                        section.experienceCompany.length > 0 || 
                        section.experienceDuration.length > 0 || 
                        section.experienceFrom.length > 0 || 
                        section.experienceTo.length > 0 || 
                        (section.experienceDescription && section.experienceDescription.length > 0)
                    )) && (
                        <h2 className="font-lora text-classic-resume">Experience</h2>
                    )}
                    {experienceSections.map((section, index) => (
                        (section.experienceDesignation.length > 0 || 
                        section.experienceCompany.length > 0 || 
                        section.experienceDuration.length > 0 || 
                        section.experienceFrom.length > 0 || 
                        section.experienceTo.length > 0 || 
                        (section.experienceDescription && section.experienceDescription.length > 0)) && (
                            <div key={section.id} className="mt-15">
                                {/* Render experience details */}
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
                                    <p className="font-lora text-danger">Length error in Duration or Dates</p>
                                )}
                                {section.experienceDescription &&
                                    section.experienceDescription.map((description) => (
                                        <ul key={description.id} className="mt-10">
                                            <li>
                                                {description.content.length >= 5 && description.content.length <= 125 ? (
                                                    <p className="font-lora text-classic-resume">{description.content}</p>
                                                ) : (
                                                    <p className="font-lora text-danger">Length error (Should be 5-125 characters)</p>
                                                )}
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}