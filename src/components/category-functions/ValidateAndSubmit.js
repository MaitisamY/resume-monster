/* eslint-disable no-unused-vars */
import { useState } from 'react'

export default function ValidateAndSubmit() {
    const handleSubmit = (e) => {
        e.preventDefault();
    
    //     // Validation logic
    //     const errors = {};
    
    //     // Validate firstName
    //     if (resumeCredentials.firstName.trim() === '') {
    //         errors.firstName = 'First name is required';
    //     } else if (resumeCredentials.firstName.length < 3 || resumeCredentials.firstName.length > 25) {
    //         errors.firstName = 'Between 3 and 25 characters';
    //     }
    
    //     // Validate lastName
    //     if (resumeCredentials.lastName.trim() === '') {
    //         errors.lastName = 'Last name is required';
    //     } else if (resumeCredentials.lastName.length < 3 || resumeCredentials.lastName.length > 25) {
    //         errors.lastName = 'Between 3 and 25 characters';
    //     }
    
    //     // Validate designation
    //     if (resumeCredentials.designation.trim() === '') {
    //         errors.designation = 'Designation is required';
    //     } else if (resumeCredentials.designation.length < 6 || resumeCredentials.designation.length > 30) {
    //         errors.designation = 'Between 6 and 30 characters';
    //     }
    
    //     // Validate email
    //     if (resumeCredentials.email.trim() === '') {
    //         errors.email = 'Email is required';
    //     } else if (!isEmailValid(resumeCredentials.email)) {
    //         errors.email = 'Invalid email format';
    //     } else if (resumeCredentials.email.length < 6 || resumeCredentials.email.length > 50) {
    //         errors.email = 'Between 6 and 50 characters';
    //     }
    
    //     // Validate phoneNumber
    //     if (resumeCredentials.phoneNumber.trim() === '') {
    //         errors.phoneNumber = 'Phone number is required';
    //     } else if (!isNumeric(resumeCredentials.phoneNumber)) {
    //         errors.phoneNumber = 'Invalid phone number format';
    //     } else if (resumeCredentials.phoneNumber.length < 11 || resumeCredentials.phoneNumber.length > 14) {
    //         errors.phoneNumber = 'Between 11 and 14 digits';
    //     }
    
    //     // Validate address
    //     if (resumeCredentials.address.trim() === '') {
    //         errors.address = 'Address is required';
    //     } else if (resumeCredentials.address.length >= 10 || resumeCredentials.address.length <= 50) {
    //         errors.address = 'Between 10 and 50 characters';
    //     }
    
    //     // Validate summary
    //     if (resumeCredentials.summary.trim() === '') {
    //         errors.summary = 'Summary is required';
    //     } else if (resumeCredentials.summary.length < 100 || resumeCredentials.summary.length > 350) {
    //         errors.summary = 'Between 100 and 350 characters';
    //     }
    
    //     // Updating errorResponses state
    //     setErrorResponses(errors);
    
    //     // If there are no errors, proceed with the form submission logic
    //     if (Object.keys(errors).length === 0) {
    //         // Perform your form submission logic here
    //         console.log('Form submitted successfully!');
    //     } else {
    //         console.log('Form submission failed due to validation errors.');
    //     }
    // 
    };

    return {  
        handleSubmit,
    };  
}