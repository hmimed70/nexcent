import React from 'react'
import { stats } from '../../constants'

const Achievements = () => {

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-8md:py-16' >
       <div className='py-20 px-10 flex flex-col  md:flex-row justify-between items-center'>
           <div className='md:w-1/2'>
             <h1 className='text-4xl text-neutralDGrey font-semibold'>Helping a local <br/>
              <span className='text-brandPrimary'> business reinvent itself</span>
             </h1>
             <p className='text-neutralGrey text-base my-8'>We reached here with our hard work and dedication</p>
           </div>
           <div className=" md:w-1/2">
						<ul className="flex flex-wrap items-center justify-center w-full gap-5">
							{stats.map((stat) => (
								<li key={stat.id} className=" flex items-center justify-center w-full md:w-1/3 ">
									<img src={stat.icon} className="object-contain w-5" />
									<div className="ml-5">
										<h3 className="mb-1 text-2xl font-bold text-neutral-600">{stat.value}</h3>
										<p className="text-base font-normal text-neutral-500">{stat.title}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
       </div>
    </div>
  )
}

export default Achievements