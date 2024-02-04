/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { 
    BsPlus,
    BsDash, 
    BsPlusCircle,
    BsDashCircle 
} from 'react-icons/bs'
export default function Experience({ handleShowTips }) {
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
      
    const handleFormatting = (formatType) => {
        document.execCommand(formatType, false, null);
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
    
    return (
        <>
            <div className="row">
                <div className="input-group">
                    <h4 className="font-work-sans">Experience</h4>
                </div>
            </div>
            {experienceSections.map((section, index) => (
            <div 
                key={section.id} 
                id={`experienceSection_${section.id}`}
                className={
                    experienceSections.length > 1 ? 
                    'border border-radius-10 border-dull mb-15 ml-25 smooth-transition pr-15' : ''
                }
            >    
            {experienceSections.length > 1 && (
                <div className="row">
                    <div className="input-group">
                        <button 
                            className="add-remove-sections negative ml-10" 
                            type="button" 
                            onClick={() => deleteExperienceSection(section.id)}
                        >
                            <BsDashCircle size={20} /> Remove This Section
                        </button>
                    </div>
                    <div className="input-group">
                        <h6>#{index + 1}</h6>
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
                    {section.errors.experienceDuration &&
                        <p className="text-danger pl-20">{section.errors.experienceDuration}</p>
                    }
                </div>
                <div className="input-group">
                    <label className="font-work-sans">From</label>
                    <input
                        name={`experienceFrom_${section.id}`}
                        value={section.experienceFrom}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. 2019"
                        min={2}
                        max={4}
                        minLength={2}
                        maxLength={4}
                        onBlur={(e) => validateExperienceField(section.id, 'experienceFrom', e.target.value)}
                        onChange={(e) => handleExperienceChange(section.id, 'experienceFrom', e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                    />
                    {section.errors.experienceFrom &&
                        <p className="text-danger pl-20">{section.errors.experienceFrom}</p>
                    }
                </div>
                <div className="input-group">
                    <label className="font-work-sans">To</label>
                    <input
                        name={`experienceTo_${section.id}`}
                        value={section.experienceTo}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. 2022"
                        min={2}
                        max={4}
                        minLength={2}
                        maxLength={4}
                        onBlur={(e) => validateExperienceField(section.id, 'experienceTo', e.target.value)}
                        onChange={(e) => handleExperienceChange(section.id, 'experienceTo', e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                    />
                    {section.errors.experienceTo &&
                        <p className="text-danger pl-20">{section.errors.experienceTo}</p>
                    }
                </div>
            </div>      
            <div className="row">
                <div className="input-group">
                    <label className="font-work-sans">Description</label>
                </div>
            </div>    
            {section.experienceDescription.map((card, index) => (
                <div className="row">
                    <ol className="w-100 pl-20">
                        <li key={card.id} value={index + 1} className="text-white">
                            <input
                                name={`content_${card.id}`}
                                value={card.content}
                                className="font-work-sans"
                                type="text"
                                placeholder="E.g. Worked on multiple projects."
                                onBlur={(e) => validateExperienceField(section.id, `content_${card.id}`, e.target.value)}
                                onChange={(e) => handleExperienceChange(section.id, `content_${card.id}`, e.target.value, card.id)}
                                onFocus={(e) => handleShowTips(e.target.name)}
                                onMouseEnter={(e) => handleShowTips(e.target.name)}
                                onMouseLeave={() => handleShowTips(null)}
                                onMouseOut={() => handleShowTips(null)}
                            />
                        </li>
                    </ol>
                    {card.id !== 1 && (
                        <button 
                            className="remove-detail-point negative ml-10" 
                            type="button" 
                            onClick={() => deleteCard(section.id, card.id)}
                        >
                            <BsDash size={20} /> Remove
                        </button>
                    )}
                </div>
            ))}
                <div className="row">
                    <div className="input-group">
                        <button 
                            className="add-remove-sections positive ml-10" 
                            type="button" 
                            onClick={() => addCard(section.id)}
                        >
                            <BsPlus size={20} /> Add Another Point
                        </button>
                    </div>
                </div>
            </div>
            ))}
            <div className="row">
                <div className="input-group">
                <button 
                    className="add-remove-sections positive ml-10" 
                    type="button" 
                    onClick={addExperienceSection}
                >
                    <BsPlusCircle size={20} /> Add Another Experience Section
                </button>
                </div>
            </div>
        </>
    );
}