/* eslint-disable react/prop-types */
import { useState } from 'react'
export default function Credentials({ handleShowTips }) {
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
    const isNumeric = (value) => /^[0-9]+$/.test(value) && 
    !/\s/.test(value) && !/[A-Za-z]/.test(value) && 
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    
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
              errors.firstName = 'First name must be between 3 and 25 characters';
            } else {
              errors.firstName = '';
            }
            break;
          case 'lastName':
            if (value.trim() === '') {
              errors.lastName = 'Last name is required';
            } else if (value.length < 3 || value.length > 25) {
              errors.lastName = 'Last name must be between 3 and 25 characters';
            } else {
              errors.lastName = '';
            }
            break;
          case 'designation':
            if (value.trim() === '') {
              errors.designation = 'Designation is required';
            } else if (value.length < 6 || value.length > 30) {
              errors.designation = 'Designation must be between 6 and 30 characters';
            } else {
              errors.designation = '';
            }
            break;
          case 'email':
            if (value.trim() === '') {
              errors.email = 'Email address is required';
            } else if (!isEmailValid(value)) {
                errors.email = 'Invalid email format';
            } else if (value.length < 6 || value.length > 50) {
              errors.email = 'Email address must be between 6 and 50 characters';
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
              errors.phoneNumber = 'Phone number must be between 11 and 14 characters';
            } else {
              errors.phoneNumber = '';
            }
            break;
          case 'address':
            if (value.trim() === '') {
              errors.address = 'Address is required';
            } else if (value.length < 10 || value.length > 50) {
              errors.address = 'Address must be between 10 and 50 characters';
            } else {
              errors.address = '';
            }
            break;
          case 'summary':
            if (value.trim() === '') {
              errors.summary = 'Summary is required';
            } else if (value.length < 100 || value.length > 350) {
              errors.summary = 'Summary must be between 100 and 350 characters';
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
    
    return (
        <>
            <div className="row">
                <div className="input-group">
                    <h4 className="font-work-sans">Credentials</h4>
                </div> 
            </div>
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
                        rows="5" 
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
                <div className="input-group">
                    <label className="font-work-sans">About You (Summary)</label>
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
        </>
    )
}