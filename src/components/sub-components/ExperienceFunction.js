import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function ExperienceFunction() {
    const [experienceSections, setExperienceSections] = useState([
        {
          id: 1,
          experienceDesignation: '',
          experienceCompany: '',
          experienceDuration: '',
          experienceFrom: '',
          experienceTo: '',
          experienceDescription: [
          { 
            id: 1, 
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
    ]);

    // const handleFormatting = (formatType) => {
    //     document.execCommand(formatType, false, null);
    // };

    // const handleCardChange = (experienceId, cardId, content) => {
    //     setExperienceSections((prevSections) =>
    //       prevSections.map((section) =>
    //         section.id === experienceId
    //           ? {
    //               ...section,
    //               experienceDescription: section.experienceDescription.map((card) =>
    //                 card.id === cardId ? { ...card, content } : card
    //               ),
    //             }
    //           : section
    //       )
    //     );
    // };
  
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
    
    const addExperienceSection = (sectionId) => {
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
                      { 
                        id: 1, 
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
                    [name]: value.trim() === '' ? `
                        ${
                            name === 'experienceDesignation' 
                            ? 'Designation is empty' 
                            : name === 'experienceCompany' 
                            ? 'Company name is empty' 
                            : name === 'experienceDuration'
                            ? 'Duration is empty'
                            : name === 'experienceFrom'
                            ? 'Start Year is empty'
                            : name === 'experienceTo'
                            ? 'End Year is empty'
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
          case 'experienceDesignation':
            return value.length < 3 || value.length > 20
              ? 'Designation should be between 3 and 20'
              : '';
          case 'experienceCompany':
            return value.length < 3 || value.length > 20
              ? 'Degree should be between 3 and 20'
              : '';
          case 'experienceDuration':
            return value.length < 2 || value.length > 8
              ? 'Duration should be between 2 and 8'
              : '';
          case 'experienceFrom':
            return value.length < 2 || value.length > 4
              ? 'Start Year should be between 2 and 4'
              : '';
          case 'experienceTo':
            return value.length < 2 || value.length > 4
              ? 'End Year should be between 2 and 4'
              : '';
          default:
            return '';
        }
    };

    return {
        experienceSections,
        addCard,
        deleteCard,
        handleExperienceChange,
        deleteExperienceSection,
        addExperienceSection,
        validateExperienceField,
    }
}