/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import CATEGORIES from "../data/CATEGORIES";
import Category from "./Category";

export default function Home() {
    const [resumeCategories, setResumeCategories] = useState(CATEGORIES);
    const [resumeTemplate, setResumeTemplate] = useState(null);
    const [fadeIn, setFadeIn] = useState(false);
    const [toast, setToast] = useState(true);
    const [isToast, setIsToast] = useState(false);
    let otherCategories;

    const getStarted = (id) => {
        setFadeIn(false); // Reset fade-in state
        setTimeout(() => {
            if (id === 0) {
                // If going back to home, remove all the local stored items
                localStorage.removeItem('selectedCategory');
                localStorage.removeItem('toast');
                setResumeCategories(CATEGORIES);
            } else {
                localStorage.setItem('toast', JSON.stringify(toast));
                localStorage.setItem('isToast', JSON.stringify(isToast));
                const selectedCategory = CATEGORIES.find(category => category.id === id);
                if (selectedCategory) {
                    // Store the selected category in local storage
                    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
                    setResumeCategories([selectedCategory]);
                }
            }
            setFadeIn(true); // Trigger fade-in effect after a short delay
            setToast(true);
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

    const handleIsToast = () => {
        setIsToast(true);
        localStorage.setItem('isToast', JSON.stringify(isToast));
    }

    const handleToast = () => {
        setToast(false);
        localStorage.setItem('toast', JSON.stringify(toast));
    }

    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedCategory');
        const storedIsToast = localStorage.getItem('isToast');
        const storedToast = localStorage.getItem('toast');
        if (storedToast) {
            const parsedToast = JSON.parse(storedToast);
            setToast(parsedToast);
        }
        if (storedIsToast) {
            const parsedIsToast = JSON.parse(storedIsToast);
            setIsToast(parsedIsToast);
        }
        if (storedCategory) {
            const parsedCategory = JSON.parse(storedCategory);
            setResumeCategories([parsedCategory]);
        }
        setFadeIn(true);
    }, [toast, isToast]);

    
    // localStorage.removeItem('selectedCategory');
    // localStorage.removeItem('toast');

    return (
        <>
            <header>
                <a href="/">
                    <img src="/icon.png" alt="Logo" />
                </a>
            </header>
            <main className={`fade-in ${fadeIn ? 'active' : ''}`}>
                {resumeCategories.length === 1 ? (
                    <>
                    <h2><span className="brand-2">Resume Monster</span></h2>
                    <div>
                        <button className="home-btn cursor-pointer border-none px-30 py-5 bg-white hover-bg-dull hover-shade-black" 
                            onClick={() => getStarted(0)}> 
                            &larr; HOME 
                        </button>
                            &nbsp;
                        <span className="breadcrumb"> /  
                            {` 
                                ${resumeCategories[0].title.trim().
                                toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '').replace('/', '-')}
                            `}
                        </span>
                    </div>
                        <Category 
                            id={resumeCategories[0].id} 
                            title={resumeCategories[0].title}
                            getStarted={getStarted}
                            handleTemplateClick={handleTemplateClick}
                            className={`fade-in ${fadeIn ? 'active' : ''}`}
                            toast={toast}
                            handleToast={handleToast}
                            isToast={isToast}
                            handleIsToast={handleIsToast}
                        /> 
                    </>
                ) : (
                    <>
                    <h2>Welcome to <span className="brand">Resume Monster</span>, Select a category to get started</h2>
                    <div className="category-selector">
                        {resumeCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`category 
                            ${category.id % 2 === 0 ? 'border-blue-shaded hover-shade-blue' : 'border-purple-shaded hover-shade-purple'}`}
                        >
                            <h3 className={`
                                ${category.id % 2 === 0 ? 'border-bottom-blue-shaded' : 'border-bottom-purple-shaded'}`}
                            >
                                {category.title}
                            </h3>
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
                <p>&copy; {new Date().getFullYear()}, Resume Monster.</p>
            </footer>
        </>
    )
}