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

    const deleteEducationSection = (index) => {
        setEducationSections((prevSections) => {
          const newSections = [...prevSections];
          newSections.splice(index, 1);
          return newSections;
        });
    };

    const validateEducationField = (sectionId, name, value) => {
        setEducationSections((prevSections) => {
          return prevSections.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  errors: {
                    ...section.errors,
                    [name]: value.trim() === '' ? `
                    ${name === 'institution' ? 'Institution Name is required' :  
                        name === 'degree' ? 'Degree is required' : 
                            name === 'startYear' ? 'Start Year is required' : 
                                name === 'endYear' ? 'End Year is required' : ''}` : 
                    '',
                  },
                }
              : section
          );
        });
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
                key={section.id} 
                className={
                  educationSections.length > 1 ? 
                      'border border-radius-10 border-dull mb-15 smooth-transition' : ''
                  }
              >
                {educationSections.length > 1 && (
                  <div className="row">
                    <div className="input-group">
                      <button
                        className="add-remove-sections negative ml-10"
                        type="button"
                        onClick={() => deleteEducationSection(index)}
                      >
                        <BsDashCircle size={20} /> Remove This Section
                      </button>
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
                      type="date"
                      placeholder="E.g. 10/12/2019"
                      onChange={(e) => handleEducationChange(section.id, 'startYear', e.target.value)}
                      onBlur={(e) => validateEducationField(section.id, 'startYear', e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="font-work-sans">Year To</label>
                    <input
                      name={`endYear_${section.id}`}
                      value={section.endYear}
                      className="font-work-sans"
                      type="date"
                      placeholder="E.g. 10/12/2022"
                      onChange={(e) => handleEducationChange(section.id, 'endYear', e.target.value)}
                      onBlur={(e) => validateEducationField(section.id, 'endYear', e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                    />
                  </div>
                </div>
              </div>
            ))}
          <div className="row">
            <div className="input-group">
              <button className="add-remove-sections positive ml-10" type="button" onClick={addEducationSection}>
                <BsPlusCircle size={20} /> Add Another Education Section
              </button>
            </div>
          </div>
        </>
    );
      
}