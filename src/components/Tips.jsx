/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export default function Tips({ title }) {
    return (
        <>
        {title !== null ? (
            <div className="tip-box">
                {
                    title === 'firstName' ? (
                        <>
                            <h3>First Name</h3>
                            <ol className="text-white">
                                <li>Your First Name is must to enter.</li>
                                <li>First Name should contain only alphabets e.g. John.</li>
                                <li>First Name must be between 3 and 30 characters.</li>
                            </ol>    
                        </>
                    ) : title === 'lastName' ? (
                        <>
                            <h3>Last Name</h3>
                            <ol className="text-white">
                                <li>Your Last Name is must to enter.</li>
                                <li>Last Name should contain only alphabets e.g. Doe.</li>
                                <li>Last Name must be between 3 and 30 characters.</li>
                            </ol>    
                        </>
                    ) : title === 'designation' ? (
                        <>
                            <h3>Designation</h3>
                            <ol className="text-white">
                                <li>Your Designation is must to enter.</li>
                                <li>Designation should contain only alphabets e.g. Frontend Developer.</li>
                                <li>Designation must be between 6 and 30 characters.</li>
                            </ol>    
                        </>
                    ) : title === 'email' ? (
                        <>
                            <h3>Email</h3>
                            <ol className="text-white">
                                <li>Your Email is must to enter.</li>
                                <li>Valid Email address is needed e.g. johndoe@example.com.</li>
                                <li>Email address must be between 6 and 50 characters.</li>
                                <li>We advise you to use gmail as outlook or yahoo look out dated.</li>
                            </ol>    
                        </>
                    ) : title === 'phoneNumber' ? (
                        <>
                            <h3>Phone Number</h3>
                            <ol className="text-white">
                                <li>Your Phone Number is must to enter.</li>
                                <li>Valid cell phone number registered against your name is needed e.g. 07123456789.</li>
                                <li>Phone number must be between 11 and 14 digits.</li>
                            </ol>
                        </>
                    ) : title === 'address' ? (
                        <>
                            <h3>Address</h3>
                            <ol className="text-white">
                                <li>Your Address is must to enter.</li>
                                <li>Valid and precise address is needed e.g. Aprt # 123, XYZ Block, My Street, My City, My Country.</li>
                                <li>Address must be between 10 and 50 characters.</li>
                            </ol>
                        </>
                    ) : title === 'summary' ? (
                        <>
                            <h3>Summary</h3>
                            <ol className="text-white">
                                <li>Your Summary is must to enter.</li>
                                <li>Write a brief summary of your experience, education and skills.</li>
                                <li>Choose wise and simple words to describe yourself, your goals and the stuff you bring to the table.</li>
                                <li>Summary should be between 100 and 350 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('experienceDesignation') ? (
                        <>
                            <h3>Designation</h3>
                            <ol className="text-white">
                                <li>Your Designation or Position is optional.</li>
                                <li>Designation should contain only alphabets e.g. Frontend Developer.</li>
                                <li>Designation must be between 6 and 30 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('experienceCompany') ? (
                        <>
                            <h3>Company</h3>
                            <ol className="text-white">
                                <li>The Company Name is optional.</li>
                                <li>Company Name can be alphanumeric.</li>
                                <li>Company Name must be between 6 and 30 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('experienceDuration') ? (
                        <>
                            <h3>Duration</h3>
                            <ol className="text-white">
                                <li>The Duration is optional.</li>
                                <li>Duration can be alphanumeric.</li>
                                <li>How long have you worked or have been working here.</li>
                            </ol>
                        </>
                    ) : title.includes('experienceFrom') ? (
                        <>
                            <h3>Year From</h3>
                            <ol className="text-white">
                                <li>From date is optional.</li>
                                <li>Select the date.</li>
                                <li>When did the experience start?</li>
                            </ol>
                        </>
                    ) : title.includes('experienceTo') ? (
                        <>
                            <h3>Year To</h3>
                            <ol className="text-white">
                                <li>To date is optional.</li>
                                <li>Select the date.</li>
                                <li>When did the experience end?</li>
                            </ol>
                        </>
                    ) : title.includes('content') ? (
                        <>
                            <h3>Details</h3>
                            <ol className="text-white">
                                <li>Details are optional.</li>
                                <li>You can add details of your experience.</li>
                                <li>What were your responsibilities?</li>
                            </ol>
                        </>
                    ) : title.includes('institution') ? (
                        <>
                            <h3>Institution</h3>
                            <ol className="text-white">
                                <li>Institution is must to enter.</li>
                                <li>Institution can be alphanumeric.</li>
                                <li>Institution must be between 6 and 30 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('degree') ? (
                        <>
                            <h3>Degree</h3>
                            <ol className="text-white">
                                <li>Degree is must to enter.</li>
                                <li>Degree can be alphanumeric.</li>
                                <li>Degree must be between 6 and 30 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('startYear') ? (
                        <>
                            <h3>Start Year</h3>
                            <ol className="text-white">
                                <li>Start Year is optional.</li>
                                <li>When did you start your degree / course?</li>
                            </ol>
                        </>
                    ) : title.includes('endYear') ? (
                        <>
                            <h3>End Year</h3>
                            <ol className="text-white">
                                <li>End Year is optional.</li>
                                <li>When did you end your degree / course?</li>
                            </ol>
                        </>
                    ) : title.includes('skill') ? (
                        <>
                            <h3>Skills</h3>
                            <ol className="text-white">
                                <li>Skills are optional.</li>
                                <li>What skills do you have?</li>
                                <li>Showcase your skills so that recruiters can easily know what you bring to the table.</li>
                            </ol>
                        </>
                    ) : title.includes('institute') ? (
                        <>
                            <h3>Institute Name</h3>
                            <ol className="text-white">
                                <li>Institute name is optional.</li>
                                <li>Institute can be alphanumeric.</li>
                                <li>Institute must be between 3 and 25 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('certificate') ? (
                        <>
                            <h3>Certificate Title</h3>
                            <ol className="text-white">
                                <li>Certification name is optional.</li>
                                <li>Certification can be alphanumeric.</li>
                                <li>Certification must be between 3 and 25 characters.</li>
                            </ol>
                        </>
                    ) : title.includes('yearStartFrom') ? (
                        <>
                            <h3>Start Year</h3>
                            <ol className="text-white">
                                <li>Start Year is optional.</li>
                                <li>When did you start your certification?</li>
                            </ol>
                        </>
                    ) : title.includes('yearEndTo') ? (
                        <>
                            <h3>End Year</h3>
                            <ol className="text-white">
                                <li>End Year is optional.</li>
                                <li>When did you end your certification?</li>
                            </ol>
                        </>
                    ) : null
                }
            </div>
        ) : null
        }  
        </>
    );    
}
