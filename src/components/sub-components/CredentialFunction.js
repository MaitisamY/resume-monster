import { useState, useEffect } from 'react'

export default function CredentialFunction() {
    const [errorResponses, setErrorResponses] = useState({
        firstName: '',
        lastName: '',
        designation: '',
        email: '',
        phoneNumber: '',
        address: '',
        summary: '',
    });
    
    const [resumeCredentials, setResumeCredentials] = useState(() => {
        const storedCredentials = localStorage.getItem('resumeCredentials');
        return storedCredentials ? JSON.parse(storedCredentials) : {
            firstName: '',
            lastName: '',
            designation: '',
            email: '',
            phoneNumber: '',
            address: '',
            summary: '',
        };
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
            } else if (value.length < 25 || value.length > 350) {
              errors.summary = 'Summary must be between 25 and 350 characters';
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

    const clearCredentialForm = () => {
        localStorage.removeItem('resumeCredentials');
        setResumeCredentials({
            firstName: '',
            lastName: '',
            designation: '',
            email: '',
            phoneNumber: '',
            address: '',
            summary: '',
        });
    }

    useEffect(() => {
        localStorage.setItem('resumeCredentials', JSON.stringify(resumeCredentials));
    }, [resumeCredentials]);

    return { 
        errorResponses,
        resumeCredentials,
        clearCredentialForm,
        validateField, 
        handleResumeCredentials,
    }
}