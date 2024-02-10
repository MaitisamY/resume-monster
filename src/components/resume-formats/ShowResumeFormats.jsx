/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'

import './ShowResumeFormats.css'
import { BsXLg, BsArrowLeft, BsPrinter } from 'react-icons/bs'
import CLASSIC from '../../assets/classic.jpg';
import CONTEMPORARY from '../../assets/contemporary.jpg';
import MINIMALIST from '../../assets/minimalist.jpg';
import MODERN from '../../assets/modern.jpg';
import PROFESSIONAL from '../../assets/professional.jpg';
import STANDARD from '../../assets/standard.jpg';
import STYLISH from '../../assets/stylish.jpg';
import TECHNICAL from '../../assets/technical.jpg';
import Classic from '../classic/Classic'

export default function ShowResumeFormats({ 
    closePopup, 
    templates, 
    handleTemplates, 
    backToTemplates,
    format,
    handleFormat,
    handleOutsideClick
 }) {
    const [finalResume, setFinalResume] = useState(false);

    const handleFinalResume = () => {
        setFinalResume(true);
    }

    const handlePrint = () => {
        window.print();
    };

    

    return (
        <div id="resume-formats-popup" className="resume-formats-popup" onClick={handleOutsideClick}>
            <button className="close" onClick={closePopup}><BsXLg /></button>
            {/* <div className="resume-formats" style={{ 
                height: format !== null || finalResume ? '100%' : '90%', 
                width: format !== null || finalResume ? '70%' : '70%' 
                }}
            > */}
            <div className="resume-formats">
            {
                finalResume ? (
                    <>
                        <button className="back" onClick={() => setFinalResume(false)}><BsArrowLeft /></button>
                        {/* <div className="print-download">
                            
                            <button className="print" onClick={handlePrint}><BsPrinter /></button>
                        </div> */}
                        <Classic />
                    </>
                ) : !templates ? (
                 
                    <>
                        <ul className="instructions">
                            <h3>Select a resume template</h3>
                            <li>Click on the image to preview the resume template.</li>
                            <li>Click on the preview button to preview the resume with the information you provided.</li>
                            <li>Some of the templates are not available, we are working on them.</li>
                            <li>Click on the download button to download the resume.</li>
                            <li>If you left any errors in the form, they will reflect on the preview as 
                                well as in your downloaded resume.
                            </li>
                        </ul>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('classic'), handleTemplates())} 
                                alt="Classic Resume Template Image" 
                                src={CLASSIC}
                            />
                            <h5>Classic</h5>
                            <button onClick={handleFinalResume}>Preview</button>
                        </div>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('standard'), handleTemplates())} 
                                alt="Standard Resume Template Image" 
                                src={STANDARD}
                            />
                            <h5>Standard</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('minimalist'), handleTemplates())} 
                                alt="Minimalist Resume Template Image" 
                                src={MINIMALIST}
                            />
                            <h5>Minimalist</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('technical'), handleTemplates())} 
                                alt="Technical Resume Template Image" 
                                src={TECHNICAL} 
                            />
                            <h5>Technical</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>
                        <div className="resume-template">
                            <img  
                                onClick={() => (handleFormat('professional'), handleTemplates())}
                                alt="Professional Resume Template Image" 
                                src={PROFESSIONAL} 
                            /> 
                            <h5>Professional</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('contemporary'), handleTemplates())} 
                                alt="Contemporary Resume Template Image" 
                                src={CONTEMPORARY}
                            />
                            <h5>Contemporary</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('modern'), handleTemplates())}
                                alt="Modern Resume Template Image" 
                                src={MODERN}
                            />
                            <h5>Modern</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>
                        <div className="resume-template">
                            <img 
                                onClick={() => (handleFormat('stylish'), handleTemplates())} 
                                alt="Stylish Resume Template Image" 
                                src={STYLISH}
                            />
                            <h5>Stylish</h5>
                            <button className="disabled">Coming Soon</button>
                        </div>    
                    </>
                 ) : (
                    <>
                        <button className="back" onClick={() => backToTemplates(false)}><BsArrowLeft /></button>
                        <img
                            className="image"
                            alt="Resume Template Image"
                            src={
                                format === 'standard'
                                ? STANDARD
                                : format === 'minimalist'
                                ? MINIMALIST
                                : format === 'classic'
                                ? CLASSIC
                                : format === 'technical'
                                ? TECHNICAL
                                : format === 'professional'
                                ? PROFESSIONAL
                                : format === 'contemporary'
                                ? CONTEMPORARY
                                : format === 'modern'
                                ? MODERN
                                : format === 'stylish'
                                ? STYLISH
                                : null
                            }
                        />
                    </>
                 )
            }
            </div>
        </div>
    );
}


