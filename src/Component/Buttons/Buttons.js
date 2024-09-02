import React, {useState} from 'react'
import Datas from '../Datas/Datas'

function Buttons() {
    const [activeSection, setActiveSection] = useState('Professional Experience');
    
    const buttonClass = `text-white rounded-sm mx-1 p-2`;
    const activeButtonClass = `bg-black ${buttonClass} font-bold sm:font-sm`;
    const inactiveButtonClass = `bg-blue-900 sm:font-sm ${buttonClass}`;

    return (
        <div className=''>
            <div className='flex justify-center mx-2 mt-2 sm:mx-1'>
                <button 
                    className={activeSection === 'Professional Experience' ? activeButtonClass : inactiveButtonClass} 
                    onClick={() => setActiveSection('Professional Experience')}
                >
                   Experience
                </button>
                <button 
                    className={activeSection === 'Skills' ? activeButtonClass : inactiveButtonClass} 
                    onClick={() => setActiveSection('Skills')}
                >
                    Skills
                </button>
                <button 
                    className={activeSection === 'Education' ? activeButtonClass : inactiveButtonClass} 
                    onClick={() => setActiveSection('Education')}
                >
                    Education
                </button>
                <button 
                    className={activeSection === 'Testimonial' ? activeButtonClass : inactiveButtonClass} 
                    onClick={() => setActiveSection('Testimonial')}
                >
                    Testimonial
                </button>
            </div>
            <Datas activeSection={activeSection} />
        </div>
    );
}



export default Buttons;

