import React from 'react'
import image9 from '../../assets/images/image9.png';
import Logo1 from '../../assets/images/Logo1.png'
import Logo2 from '../../assets/images/Logo2.png'
import Logo3 from '../../assets/images/Logo3.png'
import Logo4 from '../../assets/images/Logo4.png'
import Logo5 from '../../assets/images/Logo5.png'
import { FaArrowRight } from "react-icons/fa6";

const Customer = () => {

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-8 md:py-16' >
       <div className='flex flex-col  md:flex-row justify-center items-center gap-8'>
           <div className='w-full md:w-1/3 text-center flex justify-center items-center'>
             <img src={image9} alt="image" className='object-contain text-center w-1/2'/>
           </div>
           <div className=" w-full md:w-2/3 mx-auto">
               <p className='text-neutralGrey text-sm md:w-4/5 mb-8 leading-7'> Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
                    vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                    gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                   Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
                   Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, 
                    eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
				<h3 className='text-xl text-brandPrimary font-semibold my-8'>Tim Smith</h3>
                <p className='text-neutralGrey'>British Dragon Boat Racing Association</p>
                <div className='my-12 flex flex-wrap justify-start items-center gap-12  w-full'>
            <img  className='w-8' src={Logo1} alt='logo 1'/>
            <img className='w-8' src={Logo2} alt='logo 2'/>
            <img className='w-8' src={Logo3} alt='logo 3'/>
            <img className='w-8' src={Logo4} alt='logo 4'/>
            <img className='w-8' src={Logo5} alt='logo 5'/>
            <div className='flex justify-start items-center gap-2'>
            <h2 className='text-brandPrimary font-semibold text-md'> Meet all custmores </h2>
            <FaArrowRight />
            </div>

        </div>
            </div>
       </div>
    </div>
  )
}

export default Customer