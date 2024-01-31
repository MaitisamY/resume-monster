/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import CATEGORIES from "../data/CATEGORIES";
import Category from "./Category";
import Classic from "./classic/Classic";
import Contemporary from "./contemporary/Contemporary";
import Minimalist from "./minimalist/Minimalist";
import Modern from "./modern/Modern";
import Professional from "./professional/Professional";
import Standard from "./standard/Standard";
import Stylish from "./stylish/Stylish";
import Technical from "./technical/Technical";

export default function Home() {
    const [resumeCategories, setResumeCategories] = useState(CATEGORIES);
    const [resumeTemplate, setResumeTemplate] = useState(null);
    const [fadeIn, setFadeIn] = useState(false);
    let otherCategories;

    const getStarted = (id) => {
        setFadeIn(false); // Reset fade-in state
        setTimeout(() => {
            if (id === 0) {
                // If going back to home, remove the stored category from local storage
                localStorage.removeItem('selectedCategory');
                setResumeCategories(CATEGORIES);
            } else {
                const selectedCategory = CATEGORIES.find(category => category.id === id);
                if (selectedCategory) {
                    // Store the selected category in local storage
                    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
                    setResumeCategories([selectedCategory]);
                }
            }
            setFadeIn(true); // Trigger fade-in effect after a short delay
        }, 500);
    };

    const handleTemplateClick = (id) => {
        setResumeTemplate(id);
    }

    const handleTemplateClose = (id) => {
        setFadeIn(false); 
        setTimeout(() => {
            setResumeTemplate(null);
            getStarted(id);
            setFadeIn(true); 
        }, 500);
    }

    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedCategory');
        if (storedCategory) {
            const parsedCategory = JSON.parse(storedCategory);
            setResumeCategories([parsedCategory]);
        }
        setFadeIn(true);
    }, []);

    
    // localStorage.removeItem('selectedCategory');

    return (
        <>
            <header>
            <img src="/icon.png" alt="Logo" />
            </header>
            <main className={`fade-in ${fadeIn ? 'active' : ''}`}>
                {resumeCategories.length === 1 ? (
                    <>
                    <h2><span className="brand-2">Resume Monster</span></h2>
                    <div>
                        {resumeTemplate === null ? (
                            <>
                            <button className="home-btn cursor-pointer border-none px-30 py-5 bg-white hover-bg-dull hover-shade-black" 
                                onClick={() => getStarted(0)}> 
                                &larr; HOME 
                            </button>
                                &nbsp;
                            <span className="breadcrumb"> / category / 
                                {` 
                                    ${resumeCategories[0].title.trim().
                                    toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '').replace('/', '-')}
                                `}
                            </span>
                            </>
                        ) : (
                            <>
                            <button className="home-btn cursor-pointer border-none px-30 py-5 bg-white hover-bg-dull hover-shade-black" 
                                onClick={() => getStarted(0)}> 
                                &larr; HOME 
                            </button>
                                &nbsp;
                            <span className="breadcrumb"> / category / </span>
                            <button className="home-btn cursor-pointer border-none px-30 py-5 bg-white hover-bg-dull hover-shade-black" 
                                onClick={() => handleTemplateClose(resumeCategories[0].id)}> 
                                &larr;
                                {`   
                                    ${resumeCategories[0].title.trim().
                                    toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '').replace('/', '-')}
                                `} 
                            </button>
                            <span className="breadcrumb"> {`${' / template / '}`} </span>
                            </>
                        )}
                    </div>
                    {
                        resumeTemplate === 1 ? (
                            <Classic 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 2 ? (
                            <Contemporary 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 3 ? (
                            <Minimalist 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 4 ? (
                            <Modern 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 5 ? (
                            <Professional 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 6 ? (
                            <Standard 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 7 ? (
                            <Stylish 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : resumeTemplate === 8 ? (
                            <Technical 
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        ) : (
                            <Category 
                                id={resumeCategories[0].id} 
                                title={resumeCategories[0].title}
                                getStarted={getStarted}
                                handleTemplateClick={handleTemplateClick}
                                className={`fade-in ${fadeIn ? 'active' : ''}`}
                            />
                        )
                    }
                    </>
                ) : (
                    <>
                    <h2>Welcome to <span className="brand">Resume Monster</span>, Select category to get started</h2>
                    <div className="category-selector">
                        {resumeCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`category 
                            ${category.id % 2 === 0 ? 'border-blue-shaded hover-shade-blue' : 'border-purple-shaded hover-shade-purple'}`}
                        >
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                            <button
                            className={`
                                bg-none border-white cursor-pointer text-white px-30 py-10 font-work-sans 
                                ${category.id % 2 === 0 ? 'hover-bg-blue hover-border-blue' : 'hover-bg-purple hover-border-purple'}
                                `}
                            onClick={() => getStarted(category.id)}>
                            Get Started
                            </button>
                        </div>
                        ))}
                    </div>
                    </>
                )}
            </main>
            <footer>
                <p>© {new Date().getFullYear()}, Resume Monster.</p>
            </footer>
        </>
    )
}