import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export default function SkillsFunction() {
    const [skills, setSkills] = useState(() => {
        const storedSkills = localStorage.getItem('skills');
        return storedSkills ? JSON.parse(storedSkills) : [
            { 
                id: uuid(), 
                skill: '', 
                error: '' 
            },
        ];
    });

    const handleAdd = () => {
        setSkills((prevSkills) => {
            return [
                ...prevSkills,
                {
                    id: uuid(),
                    skill: '',
                    error: '',
                },
            ]
        })
    }

    const handleRemove = (id) => {
        const sectionElement = document.getElementById(`skills_${id}`);
    
        if (sectionElement) {
            sectionElement.style.transition = 'opacity 0.5s ease-out';
            sectionElement.style.opacity = '0';
        
            setTimeout(() => {
            setSkills((prevSkills) => {
                const newSkills = prevSkills.filter((skill) => skill.id !== id);
                return newSkills;
            });
            }, 500);
        }
    }

    const handleChange = (id, value) => {
        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill.id === id ? { ...skill, skill: value } : skill
          )
        );
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'skill':
                return value.length === 0
                    ? 'Skill is empty'
                    : value.length < 3 || value.length > 80
                    ? 'Skill should be between 3 and 80 characters'
                    : ''
            default:
                return ''
        }
    }

    const validateSkillsSection = (sectionId, name, value) => {
        setSkills((prevSkills) => {
            return prevSkills.map((skill) => {
                return skill.id === sectionId
                    ? {
                        ...skill,
                        error: validateField(name, value),
                    }
                    : skill
            })
        })
    };

    useEffect(() => {
        localStorage.setItem('skills', JSON.stringify(skills));
    }, [skills]);

    return {
        skills,
        setSkills,
        handleAdd,
        handleRemove,
        handleChange,
        validateSkillsSection,
    }
}