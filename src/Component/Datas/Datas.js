import React from 'react'
import Skill from './Skills/Skill'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Testimonial from './Testimonial/Testimonial'

function Datas({activeSection}) {
  return (
    <div className='container w-full mt-2'>
        <div className='p-5 rounded-md shadow-md' style={{backgroundColor:"#ffc900"}}>
        {activeSection === 'Skills' && <Skill />}
        {activeSection === 'Education' && <Education />}
        {activeSection === 'Professional Experience' && <Experience />}
        {activeSection === 'Testimonial' && <Testimonial />}

        </div>
    </div>
  )
}

export default Datas