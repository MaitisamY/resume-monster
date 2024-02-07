import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export default function ExperienceFunction() {
  const [experienceSections, setExperienceSections] = useState(() => {
      const storedExperienceSections = localStorage.getItem('experienceSections');
      return storedExperienceSections ? JSON.parse(storedExperienceSections) : [
          {
              id: uuid(),
              experienceDesignation: '',
              experienceCompany: '',
              experienceDuration: '',
              experienceFrom: '',
              experienceTo: '',
              experienceDescription: [{ id: uuid(), content: '', }],
              errors: {
                  experienceDesignation: '',
                  experienceCompany: '',
                  experienceDuration: '',
                  experienceFrom: '',
                  experienceTo: '',
              },
          },
      ];
  });
  
    const addCard = (experienceId) => {
        setExperienceSections((prevSections) =>
          prevSections.map((section) =>
            section.id === experienceId
              ? {
                  ...section,
                  experienceDescription: [
                    ...section.experienceDescription,
                    { id: uuid(), content: '' },
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
    
    const handleExperienceChange = (sectionId, name, value, cardId) => {
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
                : { ...section, [name]: value }
              : section
          )
        );
    };

    const deleteExperienceSection = (sectionId) => {
        const sectionElement = document.getElementById(`experienceSection_${sectionId}`);
      
        if (sectionElement) {
          sectionElement.style.transition = 'opacity 0.5s ease-out';
          sectionElement.style.opacity = '0';
      
          setTimeout(() => {
            setExperienceSections((prevSections) => {
              const newSections = prevSections.filter((section) => section.id !== sectionId);
              return newSections;
            });
          }, 500);
        }
    };
    
    const addExperienceSection = () => {
        setExperienceSections((prevSections) => {
            return [
                ...prevSections,
                {
                    id: uuid(),
                    experienceDesignation: '',
                    experienceCompany: '',
                    experienceDuration: '',
                    experienceFrom: '',
                    experienceTo: '',
                    experienceDescription: [
                      { 
                        id: uuid(), 
                        content: '', 
                      },
                    ],
                    errors: {
                      experienceDesignation: '',
                      experienceCompany: '',
                      experienceDuration: '',
                      experienceFrom: '',
                      experienceTo: '',
                    },
                },
            ];
        });
    };

    const validateExperienceField = (sectionId, name, value) => {
        setExperienceSections((prevSections) => {
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
          case 'experienceDesignation':
            return value.length === 0 
              ? 'Designation is empty'
              : value.length < 3 || value.length > 20
              ? 'Designation should be between 3 and 20'
              : ''
          case 'experienceCompany':
            return value.length === 0
              ? 'Company name is empty'
              : value.length < 3 || value.length > 20
              ? 'Degree should be between 3 and 20'
              : ''
          case 'experienceDuration':
            return value.length === 0
              ? 'Duration is empty' 
              : value.length < 2 || value.length > 8
              ? 'Duration should be between 2 and 8'
              : ''
          case 'experienceFrom':
            return value.length === 0
              ? 'Start year is empty' 
              : value.length < 2 || value.length > 4
              ? 'Start Year should be between 2 and 4'
              : ''
          case 'experienceTo':
            return value.length === 0
              ? 'End year is empty' 
              : value.length < 2 || value.length > 4
              ? 'End Year should be between 2 and 4'
              : ''
          default:
            return ''
        }
    };

    useEffect(() => {
        localStorage.setItem('experienceSections', JSON.stringify(experienceSections));
    }, [experienceSections]);

    return {
        experienceSections,
        addCard,
        deleteCard,
        setExperienceSections,
        handleExperienceChange,
        deleteExperienceSection,
        addExperienceSection,
        validateExperienceField,
    }
}