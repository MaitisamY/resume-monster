/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export default function EducationFunction() {
  const [educationSections, setEducationSections] = useState(() => {
      const storedEducationSections = localStorage.getItem('educationSections');
      return storedEducationSections ? JSON.parse(storedEducationSections) : [
          {
              id: uuid(),
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
      ];
  });

    const handleEducationChange = (sectionId, name, value) => {
        setEducationSections((prevSections) =>
          prevSections.map((section) =>
            section.id === sectionId
              ? { ...section, [name]: value }
              : section
          )
        );
    };

    const addEducationSection = () => {
        setEducationSections((prevSections) => {
            return [
                ...prevSections,
                {
                    id: uuid(),
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
                  [name]: validateField(name, value),
                },
              }
            : section
        );
      });
    };

    const validateField = (name, value) => {
      switch (name) {
        case 'institution':
            return value.length === 0 
              ? 'Institution name is empty'
              : value.length < 3 || value.length > 30
              ? 'Institution should be between 3 and 30'
              : ''
        case 'degree':
            return value.length === 0 
              ? 'Degree / Course is empty'
              : value.length < 3 || value.length > 30
              ? 'Degree should be between 3 and 30'
              : ''
        case 'startYear':
            return value.length === 0 
              ? 'Start year is empty'
              : value.length < 2 || value.length > 4
              ? 'Start Year should be between 2 and 4'
              : ''
        case 'endYear':
            return value.length === 0 
              ? 'End year is empty'
              : value.length < 2 || value.length > 4
              ? 'End year should be between 2 and 4'
              : ''
        default:
          return ''
      }
    };

    useEffect(() => {
        localStorage.setItem('educationSections', JSON.stringify(educationSections));
    }, [educationSections]);

    return {
        educationSections,
        setEducationSections,
        handleEducationChange,
        addEducationSection,
        deleteEducationSection,
        validateEducationField,
    }
}