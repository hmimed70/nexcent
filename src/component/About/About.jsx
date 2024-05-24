import React from 'react'
import about from '../../assets/images/about.svg'
const About = () => {
  return (
    <div>

    <div name="about" className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
       <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='w-full mb-10 md:w-1/2 lg:mb-0'>
              <img className='object-contain mx-auto' src={about} alt='about'/>
          </div>
          <div className='md:w-3/5 mx:auto'>
             <h2 className='text-4xl text-neutralDGrey md:w-4/5 mb-4 font-semibold'>The unseen of spending three years at Pixelgrade</h2>
            <p className='text-neutralGrey text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
             <button className='btn-primary'>Learn More</button>
          </div>
       </div>
    </div>
    </div>
  )
}

export default About