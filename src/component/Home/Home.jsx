import React from 'react'
import banner1 from '../../assets/images/Illustration.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home bg-neutralSilver '>
         <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

        <div className=" my-16 md:my-8 py-12 flex flex-col h-full md:flex-row-reverse items-center justify-between gap-12">
           <div>
             <img src={banner1} alt='banner 1'/>
           </div>
           <div className="md:w-1/2">
             <h1 className="text-5xl  font-semibold mb-4 md:w-3/4 leading-snug text-neutralDGrey">
             Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years </span>      
             </h1>
             <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
              <button className='btn-primary'>Register</button>
            </div>
         </div>     
    </div>
    </div>
  )
}

export default Home