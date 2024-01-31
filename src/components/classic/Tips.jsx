/* eslint-disable react/no-unescaped-entities */
export default function Tips() {
    return (
        <div className="tip-box">
             <h3>Header Tips</h3>
             <ol className="text-white font-lora">
                 <li>Font used in this template is "Lora, serif"</li>
                 <li>Every field has to be filled according to the information specified below them.  
                     <span className="text-danger font-bold">Min</span> means the minimum length.  
                     And <span className="text-danger font-bold">Max</span> means the maximum length.  
                     And the <span className="text-danger font-bold">Length</span> means the characters 
                     (alphabets or digits including spaces).
                 </li>
                 <li>Your Name and Surname are must to enter.</li>
                 <li>Designation is must to enter (eg. Frontend Developer)<span className="text-danger font-bold"></span>.</li>
                 <li>Valid cell phone number registered against your name is needed<span className="text-danger font-bold">(11 to 14 digits)</span>.</li>
                 <li>Valid Email address is needed 
                     <span className="text-danger font-bold">(We advise you to use gmail as outlook or yahoo look out dated)</span>.
                 </li>
                 <li>Valid and precise address <span className="text-danger font-bold">(50 characters only)</span> is needed.</li>
             </ol>
             <h3>Content Tips</h3>
             <ol className="text-white font-lora">
                 <li>Choose wise and simple words to describe yourself, your goals and the stuff you bring to the table.</li>
             </ol>
        </div>
    );
}