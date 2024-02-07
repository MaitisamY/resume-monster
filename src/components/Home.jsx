/* eslint-disable no-unused-vars */
import Category from './Category'
import Functions from './Functions'
import { BsArrowLeft } from 'react-icons/bs'

export default function Home() {
    const {
        resumeCategories,
        fadeIn,
        toastVisible,
        getStarted,
        handleToast,
        handleDoNotShowAgain,
    } = Functions();

    const clearResume = () => {
        localStorage.removeItem('resumeCredentials');
        localStorage.removeItem('educationSections');
        localStorage.removeItem('experienceSections');
        localStorage.removeItem('skills');
        localStorage.removeItem('certifications');
    }
    
    // localStorage.removeItem('selectedCategory');
    // localStorage.removeItem('toast');
    // localStorage.removeItem('toastVisibilityPermanent');

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
                        <div className="navigator">
                            <button className="home-btn cursor-pointer pr-15 pl-15 py-5 text-white" 
                                onClick={() => (getStarted(0), clearResume())}> 
                                <BsArrowLeft /> Home 
                            </button>
                                &nbsp;
                            <span className="breadcrumb"> /  
                                {` 
                                    ${resumeCategories[0].title.trim().
                                    toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '').replace('/', '-')}
                                `}
                            </span>
                        </div>
                    </div>
                        <Category 
                            id={resumeCategories[0].id} 
                            title={resumeCategories[0].title}
                            getStarted={getStarted}
                            className={`fade-in ${fadeIn ? 'active' : ''}`}
                            toast={toastVisible}
                            handleDoNotShowAgain={handleDoNotShowAgain}
                            handleToast={handleToast}
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
                                {
                                    category.id === 1 ? (
                                        <button
                                            className={`
                                                bg-none border-white cursor-pointer text-white px-30 py-10 font-work-sans 
                                                smooth-transition-hover smooth-scale-hover ${category.id % 2 === 0 ? 
                                                'hover-bg-blue hover-border-blue' : 'hover-bg-purple hover-border-purple'}
                                                `}
                                            onClick={() => getStarted(category.id)}
                                        >
                                            Get Started
                                        </button>
                                    ) : (
                                        <button className="bg-none border-white btn-disabled text-white px-30 py-10 font-work-sans">
                                            Coming Soon
                                        </button>
                                    )
                                }
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