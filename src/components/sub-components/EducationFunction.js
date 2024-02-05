import { useState } from 'react'

export default function EducationFunction() {
    const [educationSections, setEducationSections] = useState([
        {
            id: 1,
            institution: '',
            degree: '',
            startYear: '',
            endYear: '',
            errors: {
                institution: '',
                degree: '',
                startYear: '',
                endYear: '',
            },
        },
    ]);

    const handleEducationChange = (sectionId, field, value) => {
        setEducationSections((prevSections) =>
          prevSections.map((section) =>
            section.id === sectionId
              ? { ...section, [field]: value }
              : section
          )
        );
    };

    const addEducationSection = () => {
        setEducationSections((prevSections) => {
            const maxId = Math.max(...prevSections.map((section) => section.id), 0);
            const newId = maxId + 1;
    
            return [
                ...prevSections,
                {
                    id: newId,
                    institution: '',
                    degree: '',
                    startYear: '',
                    endYear: '',
                    errors: {
                        institution: '',
                        degree: '',
                        startYear: '',
                        endYear: '',
                    }
                },
            ];
        });
    };

    const deleteEducationSection = (sectionId) => {
      const sectionElement = document.getElementById(`educationSection_${sectionId}`);
    
      if (sectionElement) {
        sectionElement.style.transition = 'opacity 0.5s ease-out';
        sectionElement.style.opacity = '0';
    
        setTimeout(() => {
          setEducationSections((prevSections) => {
            const newSections = prevSections.filter((section) => section.id !== sectionId);
            return newSections;
          });
        }, 500);
      }
    };

    const validateEducationField = (sectionId, name, value) => {
      setEducationSections((prevSections) => {
        return prevSections.map((section) =>
          section.id === sectionId
            ? {
                ...section,
                errors: {
                  ...section.errors,
                  [name]:
                    value.trim() === ''
                      ? `${
                          name === 'institution'
                            ? 'Institution Name is required'
                            : name === 'degree'
                            ? 'Degree is required'
                            : name === 'startYear'
                            ? 'Start Year is required'
                            : name === 'endYear'
                            ? 'End Year is required'
                            : ''
                        }`
                      : validateField(name, value),
                },
              }
            : section
        );
      });
    };

    const validateField = (name, value) => {
      switch (name) {
        case 'institution':
          return value.length < 3 || value.length > 20
            ? 'Institution should be between 3 and 20'
            : '';
        case 'degree':
          // Add criteria for 'degree' field
          return value.length < 3 || value.length > 20
            ? 'Degree should be between 3 and 20'
            : '';
        case 'startYear':
          // Add criteria for 'startYear' field
          return value.length < 2 || value.length > 4
            ? 'Start Year should be between 2 and 4'
            : '';
        case 'endYear':
          // Add criteria for 'endYear' field
          return value.length < 2 || value.length > 4
            ? 'End Year should be between 2 and 4'
            : '';
        default:
          return '';
      }
    };

    return {
        educationSections,
        handleEducationChange,
        addEducationSection,
        deleteEducationSection,
        validateEducationField,
    }
}