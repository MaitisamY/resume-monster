/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './classic.css'
import '../template.css'
import CELL from '../../assets/icons/cell.png'
import EMAIL from '../../assets/icons/email.png'
import ADDRESS from '../../assets/icons/address.png'
import { BsCheck2Square, BsPencilSquare, BsPlusCircle } from 'react-icons/bs'
import Tips from './Tips'
import { Functionality } from './Functionality'
import NewResponsibility from './NewResponsibility'
export default function Classic({ className }) {
    const {
        showHeaderSaveBtn,
        showEditHeaderBtn,
        headerFilledStatus,
        summaryStatus,
        summaryFilledStatus,
        header,
        summary,
        eduSect,
        proExpSect,
        newEducationSection,
        newProExpSection,
        handleSummaryChange,
        handleEduSectChange,
        handleProExpSectChange,
        handleHeaderChange,
        isNumeric,
        isEmailValid,
        saveHeader,
        saveSummary,
        setShowEditHeaderBtn,
        setShowHeaderSaveBtn,
        setSummaryStatus,
        setSummaryFilledStatus,
    } = Functionality();

    const [responsibilities1Children, setResponsibilities1Children] = useState([]);
    const [responsibilities1ChildrenCount, setResponsibilities1ChildrenCount] = useState(0);

    const addMoreResponsibilities = (id) => {
        setResponsibilities1Children([
            ...responsibilities1Children,
            <NewResponsibility key={responsibilities1ChildrenCount} count={responsibilities1ChildrenCount} />
        ])
        setResponsibilities1ChildrenCount(id);
    }

    return (
        <div className={`single-template-view border-none ${className}`}>
            <div className="template-view">
                <div className="head-holder">
                    <h3>Classic Resume BuildUp</h3>
                </div>
                <div className="template-box">
                    <div className="classic-view-header">
                        <div className="name-designation font-lora">
                            {
                                showEditHeaderBtn ? (
                                    <p><i>{header.name}</i> &nbsp; <span>{header.surname}</span></p>
                                ) : (
                                    <>
                                    <p>
                                        <input 
                                            className="font-lora" 
                                            type="text" 
                                            placeholder="Your Name" 
                                            name="name"
                                            onChange={handleHeaderChange}
                                            value={header.name}
                                        />
                                        <input 
                                            className="font-lora" 
                                            type="text" 
                                            placeholder="Surname" 
                                            name="surname"
                                            onChange={handleHeaderChange}
                                            value={header.surname}
                                        />
                                    </p>
                                    <pre className="font-josefin-sans">
                                        Name and Surname Min: 3, 3 &nbsp; Max: 
                                        (<i className={header.name.length < 3 || header.name.length > 18 ? 'text-danger' : ''}>
                                        {header.name.length}</i>/18), 
                                        (<i className={header.surname.length < 3 || header.surname.length > 8 ? 'text-danger' : ''}>
                                        {header.surname.length}</i>/8)
                                    </pre>
                                    </>
                                )
                            }
                            <div className="line"></div>
                            {
                                showEditHeaderBtn ? (
                                    <p className="font-lora"><small>{header.designation.toUpperCase()}</small></p>
                                ) : (
                                    <>
                                    <input 
                                        style={{ width: '92%' }} 
                                        className="font-lora" 
                                        type="text" 
                                        placeholder="Designation"
                                        name="designation" 
                                        onChange={handleHeaderChange}
                                        value={header.designation}
                                    />
                                    <pre className="font-josefin-sans">Min: 6 &nbsp; Max: 
                                    (<i className={header.designation.length < 6 || header.designation.length > 30 ? 'text-danger' : ''}>
                                    {header.designation.length}</i>/30)</pre>
                                    </>
                                )
                            }
                            {
                                showHeaderSaveBtn ? (
                                    <button 
                                        className="header-confirm-edit font-lora"
                                        onClick={saveHeader}
                                    >
                                        Save Header 
                                    </button>
                                ) : showEditHeaderBtn ? (
                                    <button 
                                        className="header-confirm-edit font-lora"
                                        onClick={() => (setShowHeaderSaveBtn(true), setShowEditHeaderBtn(false))}
                                    >
                                        Edit Header
                                    </button>
                                ) : (
                                    null
                                )
                            }
                        </div>
                        <div className="details">
                            <p>
                                {
                                    showEditHeaderBtn ? (
                                        <small className="font-lora">{header.cell}</small>
                                    ) : (
                                        <input 
                                            className="font-lora" 
                                            type="text" 
                                            placeholder="Cell Number" 
                                            name="cell"
                                            onChange={handleHeaderChange}
                                            value={header.cell}
                                        />
                                    )
                                }
                                <img className="img" src={CELL} alt="cell" width={30} />

                                {/* Cell number Min Max range and special characters detection */}
                                {
                                    !showEditHeaderBtn && (
                                        <>
                                        <pre className="font-josefin-sans">
                                            (<i className={header.cell.length < 11 || header.cell.length > 14 ? 'text-danger' : ''}>
                                            {header.cell.length}</i>/11 to 14)
                                        </pre>
                                        {!isNumeric(header.cell) && header.cell.length > 0 ? (
                                            <pre className="font-josefin-sans">
                                                <i className="text-danger">Special characters and <br /> alphabets are not allowed</i>
                                            </pre>
                                        ) : null}
                                        </>
                                    )
                                }
                            </p>
                            <p>
                                {
                                    showEditHeaderBtn ? (
                                        <small className="font-lora">{header.email}</small>
                                    ) : (
                                        <input 
                                            className="font-lora" 
                                            type="text" 
                                            placeholder="Email Address"
                                            name="email" 
                                            onChange={handleHeaderChange}
                                            value={header.email}
                                        />
                                    )
                                }
                                <img className="img" src={EMAIL} alt="email" width={30} />
                                {
                                    !showEditHeaderBtn && (
                                        <>
                                        <pre className="font-josefin-sans">Min: 5 &nbsp; Max: 
                                        (<i className={header.email.length < 6 || header.email.length > 30 ? 'text-danger' : ''}>
                                            {header.email.length}</i>/30)
                                        </pre>
                                        {!isEmailValid(header.email) && header.email.length >= 6 && (
                                        <pre className="font-josefin-sans">
                                            <i className="text-danger">Invalid email pattern</i>
                                        </pre>
                                        )}
                                        </>
                                    )
                                }
                            </p>
                            <p>
                                {
                                    showEditHeaderBtn ? (
                                        <small className="font-lora">{header.address}</small>
                                    ) : (
                                        <textarea 
                                            className="font-lora" 
                                            type="text" 
                                            placeholder="Location / Address"
                                            name="address" 
                                            onChange={handleHeaderChange}
                                            value={header.address}
                                            rows={3}
                                            minLength={6}
                                            maxLength={50}
                                            min={25}
                                            max={50}
                                        >
                                        </textarea>
                                    )
                                }
                                <img src={ADDRESS} alt="address" width={30} />
                                {
                                    !showEditHeaderBtn && (
                                        <pre className="font-josefin-sans">Min: 25 &nbsp; Max: 
                                        (<i className={header.address.length < 25 || header.address.length > 50 ? 'text-danger' : ''}>
                                        {header.address.length}</i>/50)</pre>
                                    )
                                }
                            </p>
                        </div>
                        {
                            headerFilledStatus && !showEditHeaderBtn && (
                                <>
                                <p className="error-message font-josefin-sans">
                                    All fields should be filled according to the requirements.
                                </p>
                                <div id="arrowAnim">
                                    <div className="arrowSliding"><div className="arrow"></div></div>
                                    <div className="arrowSliding delay1"><div className="arrow"></div></div>
                                    <div className="arrowSliding delay2"><div className="arrow"></div></div>
                                    <div className="arrowSliding delay3"><div className="arrow"></div></div>
                                </div>
                                </>
                            )
                        }
                    </div>
                    <div className="classic-view-content font-lora">
                        <h1>Summary</h1>
                        {
                            summaryStatus ? (
                                <>
                                <p className="font-lora w-70 text-center">{summary}</p>
                                <button 
                                    onClick={() => (setSummaryStatus(false), setSummaryFilledStatus(false))} 
                                    className="save-summary font-lora"
                                >
                                    Edit Summary
                                </button>
                                </>
                            ) : (
                                <>
                                <p 
                                    className="limit-words font-josefin-sans"
                                >
                                    Min: 100 &nbsp; Max: (
                                        <span className={summary.length < 100 || summary.length > 350  ? "text-danger" : ""}>
                                        {summary.length}</span>/350)
                                </p>
                                {
                                    summaryFilledStatus === 'Empty' ? (
                                        <p className="error-message font-josefin-sans">
                                            Summary cannot be empty
                                        </p>
                                    ) : summaryFilledStatus === 'Less' ? (
                                        <p className="error-message font-josefin-sans">
                                            Summary should be atleast 100 characters
                                        </p>
                                    ) : summaryFilledStatus === 'More' ? (
                                        <p className="error-message font-josefin-sans">
                                            Summary should not be more than 350 characters 
                                        </p>
                                    ) : null
                                }
                                <textarea 
                                    className="summary font-lora" 
                                    type="text" 
                                    placeholder="Write your summary here"
                                    name="summary" 
                                    onChange={handleSummaryChange}
                                    value={summary}
                                    rows={5}
                                    minLength={100}
                                    min={100}
                                >
                                </textarea>
                                <button 
                                    onClick={() => saveSummary()} 
                                    className="save-summary font-lora"
                                >
                                    Save Summary
                                </button>
                                </>
                            )
                        }
                        <div className="content-holder-grid">
                            <div className="grid-1">
                                <h2 className="font-lora">Education</h2>
                                <input
                                    className="font-lora w-100"
                                    type="text"
                                    placeholder="Institute (University / College)"
                                    name="institute1"
                                    onChange={handleEduSectChange}
                                    value={eduSect.institute1}
                                    min={8}
                                    max={24}
                                    minLength={8}
                                    maxLength={24}
                                />
                                <input
                                    className="font-lora w-100"
                                    type="text"
                                    placeholder="Degree/ Course/ Certificate"
                                    name="degree1"
                                    onChange={handleEduSectChange}
                                    value={eduSect.degree1}
                                    min={4}
                                    max={20}
                                    minLength={4}
                                    maxLength={20}
                                />
                                <div className="w-100">
                                    <input
                                        className="font-lora w-30"
                                        type="number"
                                        placeholder="Year From"
                                        name="yearfrom1"
                                        onChange={handleEduSectChange}
                                        value={eduSect.yearfrom1}
                                        min={2}
                                        max={4}
                                        minLength={2}
                                        maxLength={4}
                                    />
                                    <input
                                        className="font-lora w-30"
                                        type="number"
                                        placeholder="Year To"
                                        name="yearto1"
                                        onChange={handleEduSectChange}
                                        value={eduSect.yearto1}
                                        min={2}
                                        max={4}
                                        minLength={2}
                                        maxLength={4}
                                    />
                                </div>
                                <button 
                                    className="add-section font-lora" 
                                    title="Add Section - Education"
                                >
                                    +
                                </button>
                            </div>
                            <div className="grid-2">
                                <h2 className="font-lora">Professional Experience</h2>
                                <input 
                                    className="font-lora w-100"
                                    type="text"
                                    placeholder="Designation/ Title"
                                    name="designation1"
                                    value={proExpSect.designation1}
                                    onChange={handleProExpSectChange}
                                    min={4}
                                    max={20}
                                    minLength={4}
                                    maxLength={20}
                                />
                                <div className="w-100">
                                    <input 
                                        className="font-lora w-55"
                                        type="text"
                                        placeholder="Company/ Organization"
                                        name="company1"
                                        value={proExpSect.company1}
                                        onChange={handleProExpSectChange}
                                        min={4}
                                        max={20}
                                        minLength={4}
                                        maxLength={20}
                                    />
                                    <input
                                        className="font-lora w-20"
                                        type="number"
                                        placeholder="Year From"
                                        name="yearfrom1"
                                        value={proExpSect.yearfrom1}
                                        onChange={handleProExpSectChange}
                                        min={2}
                                        max={4}
                                        minLength={2}
                                        maxLength={4}
                                    />
                                    <input
                                        className="font-lora w-20"
                                        type="number"
                                        placeholder="Year To"
                                        name="yearto1"
                                        value={proExpSect.yearto1}
                                        onChange={handleProExpSectChange}
                                        min={2}
                                        max={4}
                                        minLength={2}
                                        maxLength={4}
                                    />
                                </div>
                                <div className="w-100">
                                    {
                                        responsibilities1ChildrenCount > 0 ? responsibilities1Children.map((responsibility, index) => 
                                            <>
                                            <textarea
                                                className="font-lora w-100"
                                                type="text"
                                                placeholder="1- Responsibility"
                                                name="responsibilities1"
                                                onChange={handleProExpSectChange} 
                                                rows={2}
                                                minLength={100}
                                                maxLength={250}
                                                min={100}
                                                max={250}
                                                defaultValue={proExpSect.responsibilities1}
                                            >
                                                
                                            </textarea>
                                            <NewResponsibility
                                                key={index}
                                                numbering={index + 1}
                                                handleProExpSectChange={handleProExpSectChange}
                                                value={responsibility}
                                            />
                                            <button 
                                                className="add-point font-lora" 
                                                title="Add more responsibilities"
                                                onClick={() => addMoreResponsibilities(index + 1)}
                                            >
                                                <BsPlusCircle size={25} style={{ verticalAlign: 'middle' }} /> Add more responsibilities
                                            </button>
                                            </>
                                        ) : (
                                            <>
                                            <textarea
                                                className="font-lora w-100"
                                                type="text"
                                                placeholder="1- Responsibility"
                                                name="responsibilities1"
                                                onChange={handleProExpSectChange} 
                                                rows={2}
                                                minLength={100}
                                                maxLength={250}
                                                min={100}
                                                max={250}
                                                defaultValue={proExpSect.responsibilities1}
                                            >
                                                
                                            </textarea>
                                            <button 
                                                className="add-point font-lora" 
                                                title="Add more responsibilities"
                                                onClick={() => addMoreResponsibilities(1)}
                                            >
                                                <BsPlusCircle size={25} style={{ verticalAlign: 'middle' }} /> Add more responsibilities
                                            </button>
                                            </>
                                        )
                                    }
                                </div>
                                <button 
                                    className="add-section font-lora" 
                                    title="Add Section - Professional Experience"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tips />
        </div>
    );
}