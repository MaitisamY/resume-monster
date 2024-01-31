/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './category.css'
import CATEGORY_DETAILS from '../data/CATEGORY-DETAILS'
import Tips from './Tips'

export default function Category({ id, title, className }) {
    const DETAILS = CATEGORY_DETAILS.find((detail) => detail.id === id);

    return (
        <>
        <div className={`single-category-view ${className}`}>
            <div className="detail-box">
                <h3>{title} OVERVIEW</h3>
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
                <div className="resume-box">
                    <div className="font-lora">
                
                    </div>
                </div>
            </div>
            <Tips />
        </div>
        </>
    );
}