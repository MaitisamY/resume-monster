import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs'

export default function Certification({ handleShowTips }) {
    const [certifications, setCertifications] = useState([
        {
            id: 1,
            institute: '',
            certification: '',
            yearFrom: '',
            yearTo: '',
            errors: {
                institute: '',
                certification: '',
            }
        }
    ]);

    const handleAdd = () => {
        setCertifications((prevCertifications) => {
            return [
                ...prevCertifications,
                {
                    id: uuid(),
                    institute: '',
                    certification: '',
                    yearFrom: '',
                    yearTo: '',
                    errors: {
                        institute: '',
                        certification: '',
                    }
                }
            ]
        })
    }

    const handleRemove = (id) => {
        const newCertifications = certifications.filter((certification) => certification.id !== id)
        setCertifications(newCertifications)
    }

    const handleChange = (id, name, value) => {
        setCertifications((prevCertifications) =>
          prevCertifications.map((certificate) =>
            certificate.id === id
              ? {
                  ...certificate,
                  [name.startsWith('institute') ? 'institute' : 
                    name.startsWith('certificate') ? 'certification' : 
                        name.startsWith('yearFrom') ? 'yearFrom' : 
                            name.startsWith('yearTo') ? 'yearTo' : name]: value,
                }
              : certificate
          )
        );
    };

    const validateCertificationSection = (sectionId, name, value) => {
        setCertifications((prevCertifications) => {
            return prevCertifications.map((section) => {
                return section.id === sectionId
                    ? {
                        ...section,
                        errors: {
                            ...section.errors,
                            [name]: validateField(name, value),
                        },
                    }
                    : section
            })
        })
    }

    const validateField = (name, value) => {
        switch (name) {
            case 'institute':
                return value.length === 0
                    ? 'Institute name is empty'
                    : value.length < 3 || value.length > 25
                    ? 'Institute name should be between 3 and 20'
                    : ''
            case 'certification':
                return value.length === 0
                    ? 'Certification is empty'
                    : value.length < 3 || value.length > 25
                    ? 'Certification should be between 3 and 25'
                    : ''
            default:
                return ''
        }
    }

    return (
        <>
        <div className="row">
            <div className="input-group">
                <h4 className="font-work-sans">Certifications</h4>
            </div>
        </div>
        {certifications.map((section, index) => (
            <div 
              id={`certification_${section.id}`}
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
                    name={section.id === 1 ? 'institute' : `institute_${section.id}`}
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
                  />
                  {section.errors.institute && (
                    <p className="text-danger pl-20">{section.errors.institute}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Certificate Title</label>
                  <input
                    name={section.id === 1 ? 'certification' : `certification_${section.id}`}
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
                  />
                  {section.errors.certification && (
                    <p className="text-danger pl-20">{section.errors.certification}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="input-group">
                  <label className="font-work-sans">Start Year</label>
                  <input
                    name={section.id === 1 ? 'yearFrom' : `yearFrom_${section.id}`}
                    value={section.yearFrom}
                    className="font-work-sans"
                    type="text"
                    placeholder="E.g. 2019"
                    min={2}
                    max={4}
                    minLength={2}
                    maxLength={4}
                    onChange={(e) => handleChange(section.id, e.target.name, e.target.value)}
                    onBlur={(e) => validateCertificationSection(section.id, e.target.name, e.target.value)}
                    onFocus={(e) => handleShowTips('yearStartFrom')}
                    onMouseEnter={(e) => handleShowTips('yearStartFrom')}
                    onMouseLeave={() => handleShowTips(null)}
                    onMouseOut={() => handleShowTips(null)}
                  />
                  {section.errors.yearFrom && (
                    <p className="text-danger pl-20">{section.errors.yearFrom}</p>
                  )}
                </div>
                <div className="input-group">
                  <label className="font-work-sans">Year To</label>
                  <input
                    name={section.id === 1 ? 'yearTo' : `yearTo_${section.id}`}
                    value={section.yearTo}
                    className="font-work-sans"
                    type="text"
                    placeholder="E.g. 2022"
                    min={2}
                    max={4}
                    minLength={2}
                    maxLength={4}
                    onChange={(e) => handleChange(section.id, e.target.name, e.target.value)}
                    onBlur={(e) => validateCertificationSection(section.id, e.target.name, e.target.value)}
                    onFocus={(e) => handleShowTips('yearEndTo')}
                    onMouseEnter={(e) => handleShowTips('yearEndTo')}
                    onMouseLeave={() => handleShowTips(null)}
                    onMouseOut={() => handleShowTips(null)}
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