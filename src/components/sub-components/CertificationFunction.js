import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export default function CertificationFunction() {
    const [certifications, setCertifications] = useState(() => {
        const storedCertifications = localStorage.getItem('certifications');
        return storedCertifications ? JSON.parse(storedCertifications) : [
            {
                id: uuid(),
                institute: '',
                certification: '',
                yearFrom: '',
                yearTo: '',
                errors: {
                    institute: '',
                    certification: '',
                    yearFrom: '',
                    yearTo: '',
                },
            },
        ];
    });
    
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
                        yearFrom: '',
                        yearTo: '',
                    }
                }
            ]
        })
    }
    
    const handleRemove = (id) => {
        const sectionElement = document.getElementById(`certifications_${id}`);
    
        if (sectionElement) {
            sectionElement.style.transition = 'opacity 0.5s ease-out';
            sectionElement.style.opacity = '0';
        
            setTimeout(() => {
            setCertifications((prevCertifications) => {
                const newCertifications = prevCertifications.filter((certification) => certification.id !== id);
                return newCertifications;
            });
            }, 500);
        }
    }
    
    const handleChange = (id, name, value) => {
        setCertifications((prevCertifications) =>
          prevCertifications.map((certificate) =>
            certificate.id === id
              ? {
                  ...certificate,
                  [name]: value,
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
                    : value.length < 3 || value.length > 30
                    ? 'Institute name should be between 3 and 30 characters'
                    : ''
            case 'certification':
                return value.length === 0
                    ? 'Certification is empty'
                    : value.length < 3 || value.length > 30
                    ? 'Certification should be between 3 and 30 characters'
                    : ''
            case 'yearFrom':
                return value.length === 0
                    ? 'Start year is empty'
                    : value.length < 2 || value.length > 4
                    ? 'From Year should be between 2 and 4'
                    : ''
            case 'yearTo':
                return value.length === 0
                    ? 'Year to is empty'
                    : value.length < 2 || value.length > 4
                    ? 'Year To should be between 2 and 4'
                    : ''
            default:
                return ''
        }
    }

    useEffect(() => {
        localStorage.setItem('certifications', JSON.stringify(certifications));
    }, [certifications]);

    return { 
        certifications, 
        setCertifications,
        handleAdd, 
        handleRemove, 
        handleChange, 
        validateCertificationSection 
    };
}