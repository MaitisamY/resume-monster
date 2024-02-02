/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { BsPlus, BsDash } from 'react-icons/bs'

export default function Skills({ handleShowTips }) {
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

    const handleChange = (id, event) => {
        const newSkills = skills.map((skill) => {
            if (skill.id === id) {
                skill.skill = event.target.value
            }
            return skill
        })
        setSkills(newSkills)
    }

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
    }

    return (
        <>
        <div className="row">
            <div className="input-group">
                <h4 className="font-work-sans">Skills</h4>
            </div> 
        </div>
        {skills.map((skill, index) => (
            <div className="row">
                <ol className="w-100 pl-20">
                    <li key={skill.id} value={index + 1} className="text-white">
                        <input
                            name={`skill_${skill.id}`}
                            value={skill.skill}
                            className="font-work-sans"
                            type="text"
                            placeholder="E.g. Time Management."
                            onBlur={(e) => validateSkillsSection(skill.id, `skill_${skill.id}`, e.target.value)}
                            onChange={(e) => validateSkillsSection(skill.id, `skill_${skill.id}`, e.target.value)}
                            onFocus={(e) => handleShowTips(e.target.name)}
                            onMouseEnter={(e) => handleShowTips(e.target.name)}
                            onMouseLeave={() => handleShowTips(null)}
                            onMouseOut={() => handleShowTips(null)}
                        />
                        {
                            skill.errors.skill && (
                                <p className="text-danger">{skill.errors.skill}</p>
                            )
                        }
                    </li>
                </ol>
                {skill.id !== 1 && (
                    <button 
                        className="remove-detail-point negative ml-10" 
                        type="button" 
                        onClick={() => handleRemove(skill.id)}
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
                        onClick={handleAdd}
                    >
                        <BsPlus size={20} /> Add Another Skill
                    </button>
                </div>
            </div>
        </>
    )
}