/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { 
    BsXLg, 
    BsTypeBold, 
    BsTypeItalic, 
    BsListUl, 
    BsTypeUnderline, 
    BsTrash, 
    BsTypeH1, 
    BsPlusCircle,
    BsDashCircle 
} from 'react-icons/bs'
import './category.css'
import CATEGORY_DETAILS from '../data/CATEGORY-DETAILS'
import Tips from './Tips'
import ValidateAndSubmit from './category-functions/ValidateAndSubmit'
import Education from './sub-components/Education'

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
        errorResponses, 
        resumeCredentials, 
        experienceSections,
        validateField,
        validateExperienceField,
        handleResumeCredentials, 
        handleSubmit,
        handleExperienceChange,
        addExperienceSection,
        deleteExperienceSection,
        handleFormatting,
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
            <div className="selection-box border-none">
                <div className="resume-box font-work-sans">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Your First Name</label>
                                <input 
                                    name="firstName"
                                    value={resumeCredentials.firstName}
                                    className="font-work-sans" 
                                    type="text" 
                                    placeholder="E.g. John" 
                                    onChange={handleResumeCredentials}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.firstName && <p className="text-danger pl-20">{errorResponses.firstName}</p>}
                            </div>
                            <div className="input-group">
                                <label className="font-work-sans">Your Last Name</label>
                                <input 
                                    name="lastName"
                                    value={resumeCredentials.lastName}
                                    className="font-work-sans" 
                                    type="text" 
                                    placeholder="E.g. Doe" 
                                    onChange={handleResumeCredentials}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.lastName && <p className="text-danger pl-20">{errorResponses.lastName}</p>}
                            </div>
                            <div className="input-group">
                                <label className="font-work-sans">Your Designation</label>
                                <input 
                                    name="designation"
                                    value={resumeCredentials.designation}
                                    className="font-work-sans" 
                                    type="text" 
                                    placeholder="E.g. Web Developer"
                                    onChange={handleResumeCredentials} 
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.designation && <p className="text-danger pl-20">{errorResponses.designation}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Your Email Address</label>
                                <input 
                                    name="email"
                                    value={resumeCredentials.email}
                                    className="font-work-sans" 
                                    type="email" 
                                    placeholder="E.g. johndoe@example.com" 
                                    onChange={handleResumeCredentials}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.email && <p className="text-danger pl-20">{errorResponses.email}</p>}
                            </div>
                            <div className="input-group">
                                <label className="font-work-sans">Your Cell Phone Number</label>
                                <input 
                                    name="phoneNumber"
                                    value={resumeCredentials.phoneNumber}
                                    className="font-work-sans" 
                                    type="tel" 
                                    placeholder="E.g. +923109234567" 
                                    onChange={handleResumeCredentials}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.phoneNumber && <p className="text-danger pl-20">{errorResponses.phoneNumber}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Your Address</label>
                                <textarea 
                                    name="address"
                                    value={resumeCredentials.address}
                                    className="font-work-sans" 
                                    placeholder="E.g. 123, 456, 789, ABC Street, XYZ City, Pakistan" 
                                    onChange={handleResumeCredentials}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.address && <p className="text-danger pl-20">{errorResponses.address}</p>}
                            </div>
                        </div> 
                        <div className="row">
                            <span className="separator"></span>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Summary</label>
                                <textarea 
                                    name="summary"
                                    value={resumeCredentials.summary}
                                    className="font-work-sans"
                                    rows="5" 
                                    placeholder="Briefly provide an overview of your skills, experiences, and career objectives." 
                                    onChange={handleResumeCredentials}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {errorResponses.summary && <p className="text-danger pl-20">{errorResponses.summary}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <span className="separator"></span>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <h4 className="font-work-sans">Experience</h4>
                            </div> 
                        </div>
                        {experienceSections.map((section) => (
                        <div key={section.id} 
                            className={
                                experienceSections.length > 1 ? 
                                'border border-radius-10 border-dull mb-15 smooth-transition' : ''
                            }
                        >    
                        {experienceSections.length > 1 && (
                            <div className="row">
                                <div className="input-group">
                                <button className="add-remove-sections negative ml-10" type="button" onClick={deleteExperienceSection}>
                                    <BsDashCircle size={20} /> Remove This Section
                                </button>
                                </div>
                            </div>
                        )}
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Designation</label>
                                <input
                                    name={`experienceDesignation_${section.id}`}
                                    value={section.experienceDesignation}
                                    className="font-work-sans"
                                    type="text"
                                    placeholder="E.g. Web Developer"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceDesignation', e.target.value)}
                                    onBlur={(e) => validateExperienceField(section.id, 'experienceDesignation', e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {section.errors.experienceDesignation &&
                                    <p className="text-danger pl-20">{section.errors.experienceDesignation}</p>
                                }
                            </div>
                            <div className="input-group">
                                <label className="font-work-sans">Company</label>
                                <input
                                    name={`experienceCompany_${section.id}`}
                                    value={section.experienceCompany}
                                    className="font-work-sans"
                                    type="text"
                                    placeholder="E.g. Microsoft"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceCompany', e.target.value)}
                                    onBlur={(e) => validateExperienceField(section.id, 'experienceCompany', e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {section.errors.experienceCompany &&
                                    <p className="text-danger pl-20">{section.errors.experienceCompany}</p>
                                }
                            </div>
                        </div>    
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Duration</label>
                                <input
                                    name={`experienceDuration_${section.id}`}
                                    value={section.experienceDuration}
                                    className="font-work-sans"
                                    type="text"
                                    placeholder="E.g. 3 years"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceDuration', e.target.value)}
                                    onBlur={(e) => validateExperienceField(section.id, 'experienceDuration', e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                            </div>
                            <div className="input-group">
                                <label className="font-work-sans">From</label>
                                <input
                                    name={`experienceFrom_${section.id}`}
                                    value={section.experienceFrom}
                                    className="font-work-sans"
                                    type="date"
                                    placeholder="E.g. 10/12/2019"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceFrom', e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                            </div>
                            <div className="input-group">
                                <label className="font-work-sans">To</label>
                                <input
                                    name={`experienceTo_${section.id}`}
                                    value={section.experienceTo}
                                    className="font-work-sans"
                                    type="date"
                                    placeholder="E.g. 10/12/2022"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceTo', e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                            </div>
                        </div>
                        <div className="row">    
                            <div className="input-group">
                            <label className="font-work-sans">Details</label>
                            <span>E.g. Responsibilies etc</span>
                            {section.experienceDescription.map((card) => (
                            <div key={card.id} className="kanban-card border-dull">
                            <div className="kanban-toolbar">
                                <button className="ml-10" type="button" onClick={() => handleFormatting('bold')}>
                                <BsTypeBold />
                                </button>
                                <button className="ml-10" type="button" onClick={() => handleFormatting('italic')}>
                                <BsTypeItalic />
                                </button>
                                <button className="ml-10" type="button" onClick={() => handleFormatting('underline')}>
                                <BsTypeUnderline />
                                </button>
                                <button className="ml-10" type="button" onClick={() => handleFormatting('insertOrderedList')}>
                                <BsListUl />
                                </button>
                                <button className="ml-10" type="button" onClick={() => handleFormatting('formatBlock')}>
                                <BsTypeH1 />
                                </button>
                            </div>
                            <div
                                contentEditable
                                className="kanban-card-content"
                                dangerouslySetInnerHTML={{ __html: card.content }}
                                onChange={(e) => handleExperienceChange(section.id, 'content', e.target.innerHTML, card.id)}
                                onBlur={(e) => handleExperienceChange(section.id, 'content', e.target.innerHTML, card.id)}
                                onFocus={() => handleShowTips('experienceDescription')}
                                onMouseEnter={() => handleShowTips('experienceDescription')}
                                onMouseLeave={() => handleShowTips(null)}
                                onMouseOut={() => handleShowTips(null)}
                                suppressContentEditableWarning
                            />
                            {/* {card.id !== 1 && (
                                <button className="ml-10" type="button" onClick={() => deleteCard(section.id, card.id)}>
                                    Delete Card
                                </button>
                            )} */}
                            </div>
                        ))} 
                            </div> 
                        </div>
                        </div>
                        ))}
                        {/* <div className="row">
                            <div className="input-group">
                                <button className="add-more-sections ml-10" type="button" onClick={addCard}><BsPlus size={20} /> Add Another Experience Card</button>
                            </div> 
                        </div> */}
                        <div className="row">
                            <div className="input-group">
                            <button className="add-remove-sections positive ml-10" type="button" onClick={addExperienceSection}>
                                <BsPlusCircle size={20} /> Add Another Experience Section
                            </button>
                            </div>
                        </div>
                        <Education 
                            handleShowTips={handleShowTips}
                        />       
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