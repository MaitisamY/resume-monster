/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { BsXLg, BsTypeBold, BsTypeItalic, BsListUl, BsTypeUnderline, BsTrash, BsTypeH1, BsPlus } from 'react-icons/bs'
import './category.css'
import CATEGORY_DETAILS from '../data/CATEGORY-DETAILS'
import Tips from './Tips'

export default function Category({ id, toast, handleToast, handleDoNotShowAgain, className }) {
    const DETAILS = CATEGORY_DETAILS.find((detail) => detail.id === id);

    const [showTips, setShowTips] = useState(null);

    const handleShowTips = (name) => {
        setShowTips(name);
    }

    const [errorResponses, setErrorResponses] = useState({
        firstName: '',
        lastName: '',
        designation: '',
        email: '',
        phoneNumber: '',
        address: '',
        summary: '',
    });

    const [resumeCredentials, setResumeCredentials] = useState({
        firstName: '',
        lastName: '',
        designation: '',
        email: '',
        phoneNumber: '',
        address: '',
        summary: '',
    });

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isNumeric = (value) => /^[0-9]+$/.test(value) && !/\s/.test(value) && !/[A-Za-z]/.test(value) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleResumeCredentials = (e) => {
        const { name, value } = e.target;
        setResumeCredentials((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateField = (name, value) => {
        const errors = { ...errorResponses };
    
        switch (name) {
          case 'firstName':
            if (value.trim() === '') {
              errors.firstName = 'First name is required';
            } else if (value.length < 3 || value.length > 25) {
              errors.firstName = 'Between 3 and 25 characters';
            } else {
              errors.firstName = '';
            }
            break;
          case 'lastName':
            if (value.trim() === '') {
              errors.lastName = 'Last name is required';
            } else if (value.length < 3 || value.length > 25) {
              errors.lastName = 'Between 3 and 25 characters';
            } else {
              errors.lastName = '';
            }
            break;
          case 'designation':
            if (value.trim() === '') {
              errors.designation = 'Designation is required';
            } else if (value.length < 6 || value.length > 30) {
              errors.designation = 'Between 6 and 30 characters';
            } else {
              errors.designation = '';
            }
            break;
          case 'email':
            if (value.trim() === '') {
              errors.email = 'Email is required';
            } else if (!isEmailValid(value)) {
                errors.email = 'Invalid email format';
            } else if (value.length < 6 || value.length > 50) {
              errors.email = 'Between 6 and 50 characters';
            } else {
              errors.email = '';
            }
            break;
          case 'phoneNumber':
            if (value.trim() === '') {
              errors.phoneNumber = 'Phone number is required';
            } else if (!isNumeric(value)) {
                errors.phoneNumber = 'Invalid phone number format';
            } else if (value.length < 11 || value.length > 14) {
              errors.phoneNumber = 'Between 11 and 14 characters';
            } else {
              errors.phoneNumber = '';
            }
            break;
          case 'address':
            if (value.trim() === '') {
              errors.address = 'Address is required';
            } else if (value.length < 10 || value.length > 50) {
              errors.address = 'Between 10 and 50 characters';
            } else {
              errors.address = '';
            }
            break;
          case 'summary':
            if (value.trim() === '') {
              errors.summary = 'Summary is required';
            } else if (value.length < 100 || value.length > 350) {
              errors.summary = 'Between 100 and 350 characters';
            } else {
              errors.summary = '';
            }
            break;
          default:
            break;
        }
    
        setErrorResponses((prevState) => ({
          ...prevState,
          [name]: errors[name] || '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validation logic
        const errors = {};
    
        // Validate firstName
        if (resumeCredentials.firstName.trim() === '') {
            errors.firstName = 'First name is required';
        } else if (resumeCredentials.firstName.length < 3 || resumeCredentials.firstName.length > 25) {
            errors.firstName = 'Between 3 and 25 characters';
        }
    
        // Validate lastName
        if (resumeCredentials.lastName.trim() === '') {
            errors.lastName = 'Last name is required';
        } else if (resumeCredentials.lastName.length < 3 || resumeCredentials.lastName.length > 25) {
            errors.lastName = 'Between 3 and 25 characters';
        }

        // Validate designation
        if (resumeCredentials.designation.trim() === '') {
            errors.designation = 'Designation is required';
        } else if (resumeCredentials.designation.length < 6 || resumeCredentials.designation.length > 30) {
            errors.designation = 'Between 6 and 30 characters';
        }
    
        // Validate email
        if (resumeCredentials.email.trim() === '') {
            errors.email = 'Email is required';
        } else if (!isEmailValid(resumeCredentials.email)) {
            errors.email = 'Invalid email format';
        } else if (resumeCredentials.email.length < 6 || resumeCredentials.email.length > 50) {
            errors.email = 'Between 6 and 50 characters';
        }

        // Validate phoneNumber
        if (resumeCredentials.phoneNumber.trim() === '') {
            errors.phoneNumber = 'Phone number is required';
        } else if (!isNumeric(resumeCredentials.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number format';
        } else if (resumeCredentials.phoneNumber.length < 11 || resumeCredentials.phoneNumber.length > 14) {
            errors.phoneNumber = 'Between 11 and 14 digits';
        }

        // Validate address
        if (resumeCredentials.address.trim() === '') {
            errors.address = 'Address is required';
        } else if (resumeCredentials.address.length >= 10 || resumeCredentials.address.length <= 50) {
            errors.address = 'Between 10 and 50 characters';
        }

        // Validate summary
        if (resumeCredentials.summary.trim() === '') {
            errors.summary = 'Summary is required';
        } else if (resumeCredentials.summary.length < 100 || resumeCredentials.summary.length > 350) {
            errors.summary = 'Between 100 and 350 characters';
        }
    
        // Updating errorResponses state
        setErrorResponses(errors);
    
        // If there are no errors, proceed with the form submission logic
        if (Object.keys(errors).length === 0) {
            // Perform your form submission logic here
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    
        const [cards, setCards] = useState([
          { id: 1, content: '' },
        ]);
      
        const handleCardChange = (id, content) => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === id ? { ...card, content } : card
            )
          );
        };
      
        const addCard = () => {
          setCards((prevCards) => [
            ...prevCards,
            { id: prevCards.length + 1, content: '' },
          ]);
        };
      
        const deleteCard = (id) => {
          setCards((prevCards) => prevCards.filter((card) => card.id !== id));
        };

        const handleFormatting = (formatType) => {
            document.execCommand(formatType, false, null);
        };

        const [experienceSections, setExperienceSections] = useState([
            {
              id: 1,
              experienceDesignation: '',
              experienceCompany: '',
              experienceDuration: '',
              experienceFrom: '',
              experienceTo: '',
              experienceContent: '',
            },
          ]);
        
          const handleExperienceChange = (id, key, value) => {
            setExperienceSections((prevSections) =>
              prevSections.map((section) =>
                section.id === id ? { ...section, [key]: value } : section
              )
            );
          };
        
          const addExperienceSection = () => {
            setExperienceSections((prevSections) => [
              ...prevSections,
              {
                id: prevSections.length + 1,
                experienceDesignation: '',
                experienceCompany: '',
                experienceDuration: '',
                experienceFrom: '',
                experienceTo: '',
                experienceContent: '',
              },
            ]);
          };
        
          const deleteExperienceSection = (id) => {
            setExperienceSections((prevSections) =>
              prevSections.filter((section) => section.id !== id)
            );
          };

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
                                    placeholder="E.g. +91 9876543210" 
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
                        <div key={section.id}>    
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Designation</label>
                                <input
                                    name={`experienceDesignation_${section.id}`}
                                    value={section.designation}
                                    className="font-work-sans"
                                    type="text"
                                    placeholder="E.g. Web Developer"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceDesignation', e.target.value)}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
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
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                            </div>
                        </div>    
                        <div className="row">
                            <div className="input-group">
                                <label className="font-work-sans">Duration</label>
                                <input
                                    name={`experienceDuration_${section.id}`}
                                    value={section.duration}
                                    className="font-work-sans"
                                    type="number"
                                    placeholder="E.g. 3 years"
                                    onChange={(e) => handleExperienceChange(section.id, 'experienceDuration', e.target.value)}
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
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
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
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
                                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                                    onFocus={(e) => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                            </div>
                        </div>
                        <div className="row">    
                            <div className="input-group">
                            {cards.map((card) => (
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
                                <h5 className="pt-10 pr-10 pb-10 pl-20">Write below <span>E.g. Responsibilies etc</span></h5>
                                <div
                                    contentEditable
                                    className="kanban-card-content"
                                    dangerouslySetInnerHTML={{ __html: card.content }}
                                    onBlur={(e) => handleCardChange(card.id, e.target.innerHTML)}
                                    onFocus={() => handleShowTips(e.target.name)}
                                    onMouseEnter={(e) => handleShowTips('experienceCardContent')}
                                    onMouseLeave={() => handleShowTips(null)}
                                    onMouseOut={() => handleShowTips(null)}
                                />
                                {/* {
                                    cards.length > 1 ? (
                                        <button className="ml-10" type="button" onClick={() => deleteCard(card.id)}><BsTrash /></button>
                                    ) : null
                                } */}
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
                            <button className="add-more-sections ml-10" type="button" onClick={addExperienceSection}>
                                <BsPlus size={20} /> Add Another Experience Section
                            </button>
                            </div>
                        </div>           
                    </form>
                </div>
            </div>
            <Tips title={showTips === null ? null : showTips} />
        </div>
        </>
    );
}