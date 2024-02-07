/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs'
import CertificationFunction from './CertificationFunction'
export default function Certification({ handleShowTips }) {
    const {
        certifications, 
        handleAdd, 
        handleRemove, 
        handleChange, 
        validateCertificationSection
      } = CertificationFunction();

    return (
        <>
        <div className="row">
            <div className="input-group">
                <h4 className="font-work-sans">Certifications</h4>
            </div>
        </div>
        {certifications.map((section, index) => (
            <div 
              id={`certifications_${section.id}`}
              key={section.id} 
              className={`certification-section-wrapper 
              ${certifications.length > 1 ? 'border border-radius-10 border-dull mb-15 ml-25 smooth-transition pr-15' : ''}`}
            >
              {certifications.length > 1 && (
                <div className="row">
                  <div className="input-group">
                    <button
                      className="add-remove-sections negative ml-10"
                      type="button"
                      onClick={() => handleRemove(section.id)}
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
                  <label className="font-work-sans">Institute Name</label>
                  <input
                      name="institute"
                      value={section.institute}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. University of Karachi"
                      onChange={(e) => handleChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateCertificationSection(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.institute && (
                    <p className="text-danger pl-20">{section.errors.institute}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Certificate Title</label>
                  <input
                      name="certification"
                      value={section.certification}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. Bachelor of Science"
                      onChange={(e) => handleChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateCertificationSection(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips(e.target.name)}
                      onMouseEnter={(e) => handleShowTips(e.target.name)}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.certification && (
                    <p className="text-danger pl-20">{section.errors.certification}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <label className="font-work-sans">Year From</label>
                  <input
                      name="yearFrom"
                      value={section.yearFrom}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. 2019"
                      onChange={(e) => handleChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateCertificationSection(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips('yearStartFrom')}
                      onMouseEnter={(e) => handleShowTips('yearStartFrom')}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.yearFrom && (
                    <p className="text-danger pl-20">{section.errors.yearFrom}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Year To</label>
                  <input
                      name="yearTo"
                      value={section.yearTo}
                      className="font-work-sans"
                      type="text"
                      placeholder="E.g. 2022"
                      onChange={(e) => handleChange(section.id, e.target.name, e.target.value)}
                      onBlur={(e) => validateCertificationSection(section.id, e.target.name, e.target.value)}
                      onFocus={(e) => handleShowTips('yearEndTo')}
                      onMouseEnter={(e) => handleShowTips('yearEndTo')}
                      onMouseLeave={() => handleShowTips(null)}
                      onMouseOut={() => handleShowTips(null)}
                      autoComplete="off"
                      spellCheck="false"
                  />
                  {section.errors.yearTo && (
                    <p className="text-danger pl-20">{section.errors.yearTo}</p>
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
                      onClick={handleAdd}
                  >
                      <BsPlusCircle size={20} /> Add Another Certification Section
                  </button>
              </div>
          </div>
        </>
    );
}