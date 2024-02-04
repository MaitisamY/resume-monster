/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
    BsPlusCircle,
    BsDashCircle 
} from 'react-icons/bs'
export default function Education({ handleShowTips }) {
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

    return (
        <>
        <div className="row">
            <div className="input-group">
                <h4 className="font-work-sans">Education</h4>
            </div>
        </div>
        {educationSections &&
          educationSections.map((section, index) => (
            <div 
              id={`educationSection_${section.id}`}
              key={section.id} 
              className={`education-section-wrapper 
              ${educationSections.length > 1 ? 'border border-radius-10 border-dull mb-15 ml-25 smooth-transition pr-15' : ''}`}
            >
              {educationSections.length > 1 && (
                <div className="row">
                  <div className="input-group">
                    <button
                      className="add-remove-sections negative ml-10"
                      type="button"
                      onClick={() => deleteEducationSection(section.id)}
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
                  <label className="font-work-sans">Institution</label>
                  <input
                    name={`institution_${section.id}`}
                    value={section.institution}
                    className="font-work-sans"
                    type="text"
                    placeholder="E.g. University of Karachi"
                    onChange={(e) => handleEducationChange(section.id, 'institution', e.target.value)}
                    onBlur={(e) => validateEducationField(section.id, 'institution', e.target.value)}
                    onFocus={(e) => handleShowTips(e.target.name)}
                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                    onMouseLeave={() => handleShowTips(null)}
                    onMouseOut={() => handleShowTips(null)}
                  />
                  {section.errors.institution && (
                    <p className="text-danger pl-20">{section.errors.institution}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Degree / Course</label>
                  <input
                    name={`degree_${section.id}`}
                    value={section.degree}
                    className="font-work-sans"
                    type="text"
                    placeholder="E.g. Bachelor of Science"
                    onChange={(e) => handleEducationChange(section.id, 'degree', e.target.value)}
                    onBlur={(e) => validateEducationField(section.id, 'degree', e.target.value)}
                    onFocus={(e) => handleShowTips(e.target.name)}
                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                    onMouseLeave={() => handleShowTips(null)}
                    onMouseOut={() => handleShowTips(null)}
                  />
                  {section.errors.degree && (
                    <p className="text-danger pl-20">{section.errors.degree}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <label className="font-work-sans">Start Year</label>
                  <input
                    name={`startYear_${section.id}`}
                    value={section.startYear}
                    className="font-work-sans"
                    type="text"
                    placeholder="E.g. 2019"
                    min={2}
                    max={4}
                    minLength={2}
                    maxLength={4}
                    onChange={(e) => handleEducationChange(section.id, 'startYear', e.target.value)}
                    onBlur={(e) => validateEducationField(section.id, 'startYear', e.target.value)}
                    onFocus={(e) => handleShowTips(e.target.name)}
                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                    onMouseLeave={() => handleShowTips(null)}
                    onMouseOut={() => handleShowTips(null)}
                  />
                  {section.errors.startYear && (
                    <p className="text-danger pl-20">{section.errors.startYear}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Year To</label>
                  <input
                    name={`endYear_${section.id}`}
                    value={section.endYear}
                    className="font-work-sans"
                    type="text"
                    placeholder="E.g. 2022"
                    min={2}
                    max={4}
                    minLength={2}
                    maxLength={4}
                    onChange={(e) => handleEducationChange(section.id, 'endYear', e.target.value)}
                    onBlur={(e) => validateEducationField(section.id, 'endYear', e.target.value)}
                    onFocus={(e) => handleShowTips(e.target.name)}
                    onMouseEnter={(e) => handleShowTips(e.target.name)}
                    onMouseLeave={() => handleShowTips(null)}
                    onMouseOut={() => handleShowTips(null)}
                  />
                  {section.errors.endYear && (
                    <p className="text-danger pl-20">{section.errors.endYear}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="row">
              <div className="input-group">
                  <button 
                      className="add-remove-sections positive ml-10" 
                      type="button" 
                      onClick={addEducationSection}
                  >
                      <BsPlusCircle size={20} /> Add Another Education Section
                  </button>
              </div>
          </div>
        </>
    ); 
}