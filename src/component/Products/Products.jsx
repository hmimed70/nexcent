import React from 'react'
import pana from '../../assets/images/pana.svg'
const Products = () => {
  return (
    <div>

    <div name="product" className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
       <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='w-full mb-10 md:w-1/2 lg:mb-0'>
              <img className='object-contain mx-auto w-3/4' src={pana} alt='about'/>
          </div>
          <div className='md:w-3/5 mx:auto'>
             <h2 className='text-4xl text-neutralDGrey md:w-4/5 mb-4 font-semibold'>How to design your site footer like we did</h2>
            <p className='text-neutralGrey text-sm mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
             <button className='btn-primary'>Learn More</button>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Products