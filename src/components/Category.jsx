/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './category.css'
import CATEGORY_DETAILS from '../data/CATEGORY-DETAILS'
import Tips from './Tips'

export default function Category({ id, toast, className }) {
    const DETAILS = CATEGORY_DETAILS.find((detail) => detail.id === id);

    return (
        <>
        {
            toast &&
            <div className="toast">
                <p>These are the complete instructions to get started and to build your resume.</p>
                <button className="close" onClick={() => setToast(false)}>X</button>
            </div>
        }
        <div className={`single-category-view ${className}`}>
            <div className="detail-box">
                <h3>Overview And Tips</h3>
                <p>{DETAILS.definition}</p>
                <ul>
                    {DETAILS.features.map((feature) => 
                        <div key={Object.keys(feature)[0]}>
                            <h4>{Object.keys(feature)[0]}</h4>
                            {
                                Array.isArray(Object.values(feature)[0]) ? (
                                Object.values(feature)[0].map((f) => <li key={f}>{f}</li>
                                )) : (<p>{Object.values(feature)[0]}</p>)
                            }
                        </div>
                    )}
                </ul>
                <h4 className="border-top-dull border-bottom-dull">Structure</h4>
                <ul>
                    {DETAILS.structure.map((points) => 
                        <div key={Object.keys(points)[0]}>
                            <h4>{Object.keys(points)[0]}</h4>
                            {
                                Array.isArray(Object.values(points)[0]) ? (
                                Object.values(points)[0].map((p) => <li key={p}>{p}</li>
                                )) : (<p>{Object.values(points)[0]}</p>)
                            }
                        </div>
                    )}
                </ul> 
                <h4 className="border-top-dull border-bottom-dull">When to Use</h4>
                <ul>
                    {DETAILS.whenToUse.map((w) => <li key={w}>{w}</li>) }
                </ul>
                <p>{DETAILS.ending}</p>   
            </div>
            <div className="selection-box border-none">
                <div className="resume-box">
                    <div className="font-lora">
                        <h1>By examining these aspects, you should be able to identify the source of the issue. If the problem persists, please share the relevant parts of your code where DETAILS is defined and any other related details.</h1>
                    </div>
                </div>
            </div>
            <Tips />
        </div>
        </>
    );
}