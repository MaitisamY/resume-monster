import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function CertificationFunction() {
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

    return { 
        certifications, 
        handleAdd, 
        handleRemove, 
        handleChange, 
        validateCertificationSection 
    };
}