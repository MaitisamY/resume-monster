/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import CATEGORIES from "../data/CATEGORIES";

export default function Functions() {
    const [resumeCategories, setResumeCategories] = useState(CATEGORIES);
    const [fadeIn, setFadeIn] = useState(false);
    const [toastVisible, setToastVisible] = useState(true);
    let otherCategories;

    const getStarted = (id) => {
        setFadeIn(false); // Reset fade-in state
        setTimeout(() => {
            if (id === 0) {
                // If going back to home, remove all the local stored items
                localStorage.removeItem('selectedCategory');
                localStorage.removeItem('toastVisibility');
                setResumeCategories(CATEGORIES);
            } else {
                localStorage.setItem('toastVisibility', JSON.stringify(true));
                const selectedCategory = CATEGORIES.find(category => category.id === id);
                if (selectedCategory) {
                    // Store the selected category in local storage
                    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
                    setResumeCategories([selectedCategory]);
                }
            }
            setFadeIn(true); // Trigger fade-in effect after a short delay
            setToastVisible(true);
        }, 500);
    };

    const handleToast = () => { 
        const toastElement = document.getElementById('toast');

        if (toastElement) {
            toastElement.style.transition = 'opacity 0.5s ease-out';
            toastElement.style.opacity = '0';

            setTimeout(() => {
                setToastVisible(false);
                localStorage.setItem('toastVisibility', JSON.stringify(false));
            }, 500);
        }
    };

    const handleDoNotShowAgain = () => {
        const toastElement = document.getElementById('toast');

        if (toastElement) {
            toastElement.style.transition = 'opacity 0.5s ease-out';
            toastElement.style.opacity = '0';

            setTimeout(() => {
                setToastVisible(false);
                localStorage.setItem('toastVisibilityPermanent', JSON.stringify(false));
            }, 500);
        }
    };

    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedCategory');
        const storedToastVisibility = localStorage.getItem('toastVisibility');
        const storedToastVisibilityPermanent = localStorage.getItem('toastVisibilityPermanent');
        if (storedToastVisibility !== null) {
            setToastVisible(JSON.parse(storedToastVisibility));
        }
        if (storedToastVisibilityPermanent !== null && JSON.parse(storedToastVisibilityPermanent) === false) {
            setToastVisible(false);
        }
        if (storedCategory) {
            const parsedCategory = JSON.parse(storedCategory);
            setResumeCategories([parsedCategory]);
        }
        setFadeIn(true);
    }, [toastVisible]);

    return { 
        resumeCategories, 
        fadeIn, 
        toastVisible, 
        getStarted,  
        handleToast, 
        handleDoNotShowAgain 
    };
}
