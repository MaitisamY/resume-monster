/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './category.css'
import CATEGORY_DETAILS, { CATEGORIZED } from '../data/CATEGORY-DETAILS'
import CATEGORIES from '../data/CATEGORIES'
import Tips from './Tips'

export default function Category({ id, title, getStarted, handleTemplateClick, className }) {
    const DETAILS = CATEGORY_DETAILS.find((detail) => detail.id === id);

    // const [selectedImage, setSelectedImage] = useState(null);
    // const [activeTooltip, setActiveTooltip] = useState(null);

    // const toggleTooltip = (index) => {
    //     setActiveTooltip((prevIndex) => (prevIndex === index ? null : index));
    // };

    return (
        <>
        <div className={`single-category-view ${className}`}>
            <div className="detail-box border-none">
                <h3>OVERVIEW</h3>
                <h4>Definition:</h4>
                <p>{DETAILS.definition}</p>
                <h4>Key Features:</h4>
                <ol>
                    {DETAILS.features.map((feature) => 
                        <li 
                            key={Object.keys(feature)[0]}>
                            <span>{Object.keys(feature)[0]}:</span> {Object.values(feature)[0]}
                        </li>
                    )}
                </ol>    
            </div>
            <div className="selection-box border-none">
                <h3>{title.length < 1 ? title + ' Template' : title + ' Templates'}</h3>
                <div className="resume-box">
                    {/* {DETAILS.samples.map((imageObj, index) => 
                        <div key={index} className="resume-item border-dull">
                            <img
                                src={Object.values(imageObj)} 
                                alt={`${title} ${selectedImage}`} 
                                onClick={() => setSelectedImage(index)} 
                            />
                            {activeTooltip === index && (
                                <div 
                                    className="tooltip font-work-sans"
                                >
                                    Select {Object.keys(imageObj)} Template
                                </div>
                            )}
                            {CATEGORIZED.filter((cat) => Object.keys(imageObj).every(key => cat.name.includes(key))).map((name) => (
                                <button
                                    key={name.id}
                                    className={`cursor-pointer text-white font-bold font-work-sans
                                        ${index % 2 === 0 ? 'hover-bg-blue' : 'hover-bg-purple'}
                                    `}
                                    onMouseOver={() => toggleTooltip(index)}
                                    onMouseOut={() => toggleTooltip(null)}
                                    onClick={() => handleTemplateClick(name.id)}
                                >
                                    {name.name}
                                </button>
                            ))}
                        </div>
                    )} */}
                </div>
            </div>
            <Tips />
            {/* <div className="link-box border-none">
                <h3>Categories</h3>
                <ul>
                    {CATEGORIES.map((category) => 
                        <li key={category.id}>
                            <a 
                                className={`cursor-pointer font-bold font-work-sans 
                                    ${category.id % 2 === 0 ? 'hover-text-blue' : 'hover-text-purple'}
                                    ${category.id === id ? 
                                        category.id % 2 === 0 ? 'bg-white text-blue text-bold' :
                                        'bg-white text-purple text-bold' : 
                                        'text-white bg-none'}`
                                    }

                                onClick={() => getStarted(category.id)}
                            >
                                {category.title}
                            </a>
                        </li>
                    )}
                </ul>    
            </div> */}
        </div>
        {/* {selectedImage !== null && (
            <div className="large-image-view">
                <div className="large-image-view-overlay">
                    <button 
                        className="close border-none hover-bg-dull text-black bg-white cursor-pointer font-bold" 
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                    {DETAILS.samples[selectedImage] && (
                        <img 
                            id={`${title}-${selectedImage}`}  
                            src={Object.values(DETAILS.samples[selectedImage])[0]} 
                            alt={`${title} ${selectedImage}`} 
                        />
                    )}
                </div>
            </div>
        )} */}
        </>
    );
}