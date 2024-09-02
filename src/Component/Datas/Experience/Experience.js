import React from 'react'
import Cards from '../Cards.js/Cards'

function Experience() {
  return (
    <div className='border-2 rounded-md text-white font-semibold p-2' style={{backgroundColor:"#454679"}}>
        <div className='flex justify-between text-2xl font-semibold'>

        <div className='' >
            Resemble systems pvt ltd
        </div>
        <div className=''>
           FEB 2022 -  JULY 2024 
        </div>
        </div>
        <div className='font-bold text-xl' style={{color:"#ffc900"}}>
            Associate Software Engineer
        </div>
        <div className=''>
        I have developed new, efficient, and thoroughly tested code for a variety of software projects. I wrote
        clean and dynamic code using HTML, CSS, Bootstrap 5, JavaScript and React.  
</div>
<div className=''>
Here are some highlights of my projects: 
</div>
<div className='flex flex-wrap gap-4'>

  <Cards />
 
</div>
</div>
  )
}

export default Experience