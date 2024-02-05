import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function SkillsFunction() {
    const [skills, setSkills] = useState([
        { 
            id: 1, 
            skill: '',
            errors: { skill: '' } 
        },
    ]);

    const handleAdd = () => {
        setSkills((prevSkills) => {
            return [
                ...prevSkills,
                {
                    id: uuid(),
                    skill: '',
                    errors: { skill: '' },
                },
            ]
        })
    }

    const handleRemove = (id) => {
        const newSkills = skills.filter((skill) => skill.id !== id)
        setSkills(newSkills)
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
            case 'skills':
                return value.length === 0
                    ? 'Skill is required'
                    : value.length < 10 || value.length > 80
                    ? 'Skills should be between 10 and 80'
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
                        errors: {
                            ...skill.errors,
                            [name]: validateField(name, value),
                        },
                    }
                    : skill
            })
        })
    };

    return {
        skills,
        handleAdd,
        handleRemove,
        handleChange,
        validateSkillsSection,
    }
}