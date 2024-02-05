import './ShowResumeFormats.css'
import { BsXLg } from 'react-icons/bs'
import CLASSIC from '../../assets/classic.jpg';
import CONTEMPORARY from '../../assets/contemporary.jpg';
import MINIMALIST from '../../assets/minimalist.jpg';
import MODERN from '../../assets/modern.jpg';
import PROFESSIONAL from '../../assets/professional.jpg';
import STANDARD from '../../assets/standard.jpg';
import STYLISH from '../../assets/stylish.jpg';
import TECHNICAL from '../../assets/technical.jpg';

export default function ShowResumeFormats({ closePopup }) {
    return (
        <div id="resume-formats-popup" className="resume-formats-popup">
            <button className="close" onClick={() => closePopup(false)}><BsXLg /></button>
            <h3>Resume Templates</h3>
            <div className="resume-formats">
                <ul className="instructions">
                    <li>Click on the image to preview the resume template.</li>
                    <li>Click on the preview button to preview the resume with the information you provided.</li>
                    <li>Some of the templates are disabled, we are working on it.</li>
                </ul>
                <div className="resume-template">
                    <img alt="Standard Resume Template Image" src={STANDARD} />
                    <h5>Standard</h5>
                    <button>Preview</button>
                </div>
                <div className="resume-template">
                    <img alt="Minimalist Resume Template Image" src={MINIMALIST} />
                    <h5>Minimalist</h5>
                    <button>Preview</button>
                </div>
                <div className="resume-template">
                    <img alt="Classic Resume Template Image" src={CLASSIC} />
                    <h5>Classic</h5>
                    <button>Preview</button>
                </div>
                <div className="resume-template">
                    <img alt="Technical Resume Template Image" src={TECHNICAL} />
                    <h5>Technical</h5>
                    <button>Preview</button>
                </div>
                <div className="resume-template">
                    <img className="disabled" alt="Professional Resume Template Image" src={PROFESSIONAL} /> 
                    <h5>Professional</h5>
                    <button className="disabled">Coming Soon</button>
                </div>
                <div className="resume-template">
                    <img className="disabled" alt="Contemporary Resume Template Image" src={CONTEMPORARY} />
                    <h5>Contemporary</h5>
                    <button className="disabled">Coming Soon</button>
                </div>
                <div className="resume-template">
                    <img className="disabled" alt="Modern Resume Template Image" src={MODERN} />
                    <h5>Modern</h5>
                    <button className="disabled">Coming Soon</button>
                </div>
                <div className="resume-template">
                    <img className="disabled" alt="Stylish Resume Template Image" src={STYLISH} />
                    <h5>Stylish</h5>
                    <button className="disabled">Coming Soon</button>
                </div>
            </div>
        </div>
    );
}