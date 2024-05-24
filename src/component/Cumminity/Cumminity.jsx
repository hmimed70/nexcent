import React from 'react'

import { FaArrowRight } from 'react-icons/fa6';
import { blogs } from '../../constants';

const Cumminity = () => {

  return (
    <div className='md:px-14 px-4 lg:px-14 py-16 max-w-screen-2xl mx:auto bg-white flex flex-col justify-between items-center'>
    
    <div className=' md:w-1/2 mx-auto text-center'>
           <h1 className='text-4xl font-semibold text-neutralDGrey mb-4'>Caring is the new marketing</h1>
           <p className='text-sm my-2 text-neutralGrey mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
         </div>
         <ul className="flex flex-wrap justify-center w-full gap-20 lg:gap-16 xl:gap-0 lg:justify-evenly">
						{blogs.map((blog) => (
							<li key={blog.id} className="rounded-sm max-w-[23rem] w-full relative">
								<img src={blog.thumbnail} alt={blog.title} className="object-contain rounded-sm" />
								<div className="absolute z-10 p-4 mx-3 text-center rounded-md shadow-md bg-slate-50 -bottom-14 lg:-bottom-12 ">
									<h3 className="mb-4 text-base font-semibold text-neutral-500 lg:text-xl">{blog.title}</h3>
                                    <div className='flex justify-center items-center gap-2 text-center my-2'>
                                      <h2 className='text-brandPrimary font-semibold text-md'> ReadMore </h2>
                                      <FaArrowRight />
                                     </div>
								</div>
							</li>
						))}
					</ul>
    </div>
  )
}

export default Cumminity