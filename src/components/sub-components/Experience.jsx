/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { 
    BsPlus,
    BsDash, 
    BsPlusCircle,
    BsDashCircle 
} from 'react-icons/bs'
import ExperienceFunction from './ExperienceFunction'

export default function Experience({ handleShowTips }) {
    const {
        experienceSections,
        addCard,
        deleteCard,
        handleExperienceChange,
        deleteExperienceSection,
        addExperienceSection,
        validateExperienceField,
    } = ExperienceFunction();
    
    return (
        <>
            <div className="row">
                <div className="input-group">
                    <h4 className="font-work-sans">Experience</h4>
                </div>
            </div>
            {experienceSections.map((section, index) => (
            <div 
                key={section.id} 
                id={`experienceSection_${section.id}`}
                className={
                    experienceSections.length > 1 ? 
                    'border border-radius-10 border-dull mb-15 ml-25 smooth-transition pr-15' : ''
                }
            >    
            {experienceSections.length > 1 && (
                <div className="row">
                    <div className="input-group">
                        <button 
                            className="add-remove-sections negative ml-10" 
                            type="button" 
                            onClick={() => deleteExperienceSection(section.id)}
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
                    <label className="font-work-sans">Designation</label>
                    <input
                        name="experienceDesignation"
                        value={section.experienceDesignation}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. Web Developer"
                        onChange={(e) => handleExperienceChange(section.id, e.target.name, e.target.value)}
                        onBlur={(e) => validateExperienceField(section.id, e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {section.errors.experienceDesignation && <p className="text-danger pl-20">{section.errors.experienceDesignation}</p>}
                </div>
                <div className="input-group">
                    <label className="font-work-sans">Company</label>
                    <input
                        name="experienceCompany"
                        value={section.experienceCompany}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. Microsoft"
                        onChange={(e) => handleExperienceChange(section.id, e.target.name, e.target.value)}
                        onBlur={(e) => validateExperienceField(section.id, e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {section.errors.experienceCompany && 
                        <p className="text-danger pl-20">{section.errors.experienceCompany}</p>
                    }
                </div>
            </div>    
            <div className="row">
                <div className="input-group">
                    <label className="font-work-sans">Duration</label>
                    <input
                        name="experienceDuration"
                        value={section.experienceDuration}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. 3 years"
                        onChange={(e) => handleExperienceChange(section.id, e.target.name, e.target.value)}
                        onBlur={(e) => validateExperienceField(section.id, e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {section.errors.experienceDuration && 
                        <p className="text-danger pl-20">{section.errors.experienceDuration}</p>
                    }
                </div>
                <div className="input-group">
                    <label className="font-work-sans">Year From</label>
                    <input
                        name="experienceFrom"
                        value={section.experienceFrom}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. 2019"
                        onBlur={(e) => validateExperienceField(section.id, e.target.name, e.target.value)}
                        onChange={(e) => handleExperienceChange(section.id, e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {section.errors.experienceFrom && 
                        <p className="text-danger pl-20">{section.errors.experienceFrom}</p>
                    }
                </div>
                <div className="input-group">
                    <label className="font-work-sans">Year To</label>
                    <input
                        name="experienceTo"
                        value={section.experienceTo}
                        className="font-work-sans"
                        type="text"
                        placeholder="E.g. 2022"
                        onBlur={(e) => validateExperienceField(section.id, e.target.name, e.target.value)}
                        onChange={(e) => handleExperienceChange(section.id, e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {section.errors.experienceTo && 
                        <p className="text-danger pl-20">{section.errors.experienceTo}</p>
                    }
                </div>
            </div>      
            <div className="row">
                <div className="input-group">
                    <label className="font-work-sans">Description</label>
                </div>
            </div>    
            {section.experienceDescription.map((card, index) => (
                <div className="row">
                    <ol className="w-100 pl-20">
                        <li key={card.id} value={index + 1} className="text-white">
                            <input
                                name="content"
                                value={card.content}
                                className="font-work-sans"
                                type="text"
                                placeholder="E.g. Worked on multiple projects."
                                onChange={(e) => handleExperienceChange(section.id, e.target.name, e.target.value, card.id)}
                                onFocus={(e) => handleShowTips(e.target.name)}
                                onMouseEnter={(e) => handleShowTips(e.target.name)}
                                onMouseLeave={() => handleShowTips(null)}
                                onMouseOut={() => handleShowTips(null)}
                                autoComplete="off"
                                spellCheck="false"
                            />
                        </li>
                    </ol>
                    {(index + 1) !== 1 && (
                        <button 
                            className="remove-detail-point negative ml-10" 
                            type="button" 
                            onClick={() => deleteCard(section.id, card.id)}
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
                            onClick={() => addCard(section.id)}
                        >
                            <BsPlus size={20} /> Add Another Point
                        </button>
                    </div>
                </div>
            </div>
            ))}
            <div className="row">
                <div className="input-group">
                <button 
                    className="add-remove-sections positive ml-10" 
                    type="button" 
                    onClick={addExperienceSection}
                >
                    <BsPlusCircle size={20} /> Add Another Experience Section
                </button>
                </div>
            </div>
        </>
    );
}