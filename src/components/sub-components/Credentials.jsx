/* eslint-disable react/prop-types */
import CredentialFunction from './CredentialFunction'

export default function Credentials({ handleShowTips }) {
    const {
        errorResponses,
        resumeCredentials,
        validateField, 
        handleResumeCredentials,
    } = CredentialFunction();
    
    return (
        <>
            <div className="row">
                <div className="input-group">
                    <h4 className="font-work-sans">Credentials</h4>
                </div> 
            </div>
            <div className="row">
                <div className="input-group">
                    <label className="font-work-sans">Your First Name*</label>
                    <input 
                        name="firstName"
                        value={resumeCredentials.firstName}
                        className="font-work-sans" 
                        type="text" 
                        placeholder="E.g. John" 
                        onChange={handleResumeCredentials}
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {errorResponses.firstName && <p className="text-danger pl-20">{errorResponses.firstName}</p>}
                </div>
                <div className="input-group">
                    <label className="font-work-sans">Your Last Name*</label>
                    <input 
                        name="lastName"
                        value={resumeCredentials.lastName}
                        className="font-work-sans" 
                        type="text" 
                        placeholder="E.g. Doe" 
                        onChange={handleResumeCredentials}
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {errorResponses.lastName && <p className="text-danger pl-20">{errorResponses.lastName}</p>}
                </div>
                <div className="input-group">
                    <label className="font-work-sans">Your Designation*</label>
                    <input 
                        name="designation"
                        value={resumeCredentials.designation}
                        className="font-work-sans" 
                        type="text" 
                        placeholder="E.g. Web Developer"
                        onChange={handleResumeCredentials} 
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {errorResponses.designation && <p className="text-danger pl-20">{errorResponses.designation}</p>}
                </div>
            </div>
            <div className="row">
                <div className="input-group">
                    <label className="font-work-sans">Your Email Address*</label>
                    <input 
                        name="email"
                        value={resumeCredentials.email}
                        className="font-work-sans" 
                        type="email" 
                        placeholder="E.g. johndoe@example.com" 
                        onChange={handleResumeCredentials}
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {errorResponses.email && <p className="text-danger pl-20">{errorResponses.email}</p>}
                </div>
                <div className="input-group">
                    <label className="font-work-sans">Your Cell Phone Number*</label>
                    <input 
                        name="phoneNumber"
                        value={resumeCredentials.phoneNumber}
                        className="font-work-sans" 
                        type="tel" 
                        placeholder="E.g. 923109234567" 
                        onChange={handleResumeCredentials}
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="off"
                        spellCheck="false"
                    />
                    {errorResponses.phoneNumber && <p className="text-danger pl-20">{errorResponses.phoneNumber}</p>}
                </div>
            </div>
            <div className="row">
                <div className="input-group">
                    <label className="font-work-sans">Your Address*</label>
                    <textarea 
                        name="address"
                        value={resumeCredentials.address}
                        className="font-work-sans" 
                        rows="5" 
                        placeholder="E.g. 123, 456, 789, ABC Street, XYZ City, Pakistan" 
                        onChange={handleResumeCredentials}
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="on"
                        spellCheck="false"
                    />
                    {errorResponses.address && <p className="text-danger pl-20">{errorResponses.address}</p>}
                </div>
                <div className="input-group">
                    <label className="font-work-sans">About You (Summary)*</label>
                    <textarea 
                        name="summary"
                        value={resumeCredentials.summary}
                        className="font-work-sans"
                        rows="5" 
                        placeholder="Briefly provide an overview of your skills, experiences, and career objectives." 
                        onChange={handleResumeCredentials}
                        onBlur={(e) => validateField(e.target.name, e.target.value)}
                        onFocus={(e) => handleShowTips(e.target.name)}
                        onMouseEnter={(e) => handleShowTips(e.target.name)}
                        onMouseLeave={() => handleShowTips(null)}
                        onMouseOut={() => handleShowTips(null)}
                        autoComplete="on"
                        spellCheck="false"
                    />
                    {errorResponses.summary && <p className="text-danger pl-20">{errorResponses.summary}</p>}
                </div>
            </div>
        </>
    )
}