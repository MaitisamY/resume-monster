/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsPlus, BsDash } from 'react-icons/bs'
import SkillsFunction from './SkillsFunction'

export default function Skills({ handleShowTips }) {
    const {
        skills,
        handleAdd,
        handleRemove,
        handleChange,
        validateSkillsSection,
    } = SkillsFunction();

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
                    <li id={`skills_${skill.id}`} key={skill.id} value={index + 1} className="text-white">
                    <input
                        name="skill"
                        value={skill.skill}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. Time Management."
                        onBlur={(e) => validateSkillsSection(skill.id, e.target.name, e.target.value)}
                        onChange={(e) => handleChange(skill.id, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {skill.error && (
                        <p className="text-danger pl-20 pt-5">{skill.error}</p>
                    )}
                    </li>
                </ol>
                {(index + 1) !== 1 &&  (
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