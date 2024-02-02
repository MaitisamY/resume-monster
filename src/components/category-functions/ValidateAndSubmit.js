/* eslint-disable no-unused-vars */
import { useState } from 'react'

export default function ValidateAndSubmit() {
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

    const handleCardChange = (experienceId, cardId, content) => {
        setExperienceSections((prevSections) =>
          prevSections.map((section) =>
            section.id === experienceId
              ? {
                  ...section,
                  experienceDescription: section.experienceDescription.map((card) =>
                    card.id === cardId ? { ...card, content } : card
                  ),
                }
              : section
          )
        );
    };
  
    const addCard = (experienceId) => {
        setExperienceSections((prevSections) =>
          prevSections.map((section) =>
            section.id === experienceId
              ? {
                  ...section,
                  experienceDescription: [
                    ...section.experienceDescription,
                    { id: section.experienceDescription.length + 1, content: '' },
                  ],
                }
              : section
          )
        );
    };
    
    const deleteCard = (experienceId, cardId) => {
        setExperienceSections((prevSections) =>
          prevSections.map((section) =>
            section.id === experienceId
              ? {
                  ...section,
                  experienceDescription: section.experienceDescription.filter((card) => card.id !== cardId),
                }
              : section
          )
        );
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
          experienceDescription: [
            { id: 1, content: '' },
          ],
          errors: {
            experienceDesignation: '',
            experienceCompany: '',
          },
        },
    ]);
    
    const handleExperienceChange = (sectionId, field, value, cardId) => {
        setExperienceSections((prevSections) =>
          prevSections.map((section) =>
            section.id === sectionId
              ? cardId
                ? {
                    ...section,
                    experienceDescription: section.experienceDescription.map((card) =>
                      card.id === cardId ? { ...card, content: value } : card
                    ),
                  }
                : { ...section, [field]: value }
              : section
          )
        );
    };

    const deleteExperienceSection = (index) => {
        setExperienceSections((prevSections) => {
          const newSections = [...prevSections];
          newSections.splice(index, 1);
          return newSections;
        });
    };
    
    const addExperienceSection = () => {
        setExperienceSections((prevSections) => {
            const maxId = Math.max(...prevSections.map((section) => section.id), 0);
            const newId = maxId + 1;
    
            return [
                ...prevSections,
                {
                    id: newId,
                    experienceDesignation: '',
                    experienceCompany: '',
                    experienceDuration: '',
                    experienceFrom: '',
                    experienceTo: '',
                    experienceDescription: [
                        { id: 1, content: '' },
                    ],
                    errors: {
                      experienceDesignation: '',
                      experienceCompany: '',
                    },
                },
            ];
        });
    };
    
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

    const validateExperienceField = (sectionId, name, value) => {
        setExperienceSections((prevSections) => {
          return prevSections.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  errors: {
                    ...section.errors,
                    [name]: value.trim() < 6 || value.trim() > 30 ? `
                    ${name === 'experienceDesignation' ? 'Designation' : 
                      name === 'experienceCompany' ? 'Company' : ''} must be between 6 and 30 characters
                    ` : '',
                  },
                }
              : section
          );
        });
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

        // Validate experienceDescription
        if (experienceSections.experienceDesignation.trim() < 6 || experienceSections.experienceDesignation.trim() > 30) {
            errors.experienceDesignation = 'Experience is required';
        }

        // Validate experienceCompany
        if (experienceSections.experienceCompany.trim() < 6 || experienceSections.experienceCompany.trim() > 30) {
            errors.experienceCompany = 'Experience is required';
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
    return { 
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
    };  
}