/* eslint-disable react/prop-types */
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs'
import EducationFunction from './EducationFunction'

export default function Education({ handleShowTips }) {
    const {
        educationSections,
        handleEducationChange,
        addEducationSection,
        deleteEducationSection,
        validateEducationField,
    } = EducationFunction();

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
                      name="institution"
                      value={section.institution}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. University of Karachi"
                      onChange={(e) => handleEducationChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateEducationField(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.institution && (
                    <p className="text-danger pl-20">{section.errors.institution}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Degree / Course</label>
                  <input
                      name="degree"
                      value={section.degree}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. Bachelor of Science"
                      onChange={(e) => handleEducationChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateEducationField(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.degree && (
                    <p className="text-danger pl-20">{section.errors.degree}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <label className="font-work-sans">Year From</label>
                  <input
                      name="startYear"
                      value={section.startYear}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. 2019"
                      onChange={(e) => handleEducationChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateEducationField(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.startYear && (
                    <p className="text-danger pl-20">{section.errors.startYear}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Year To</label>
                  <input
                      name="endYear"
                      value={section.endYear}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. 2022"
                      onChange={(e) => handleEducationChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateEducationField(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
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