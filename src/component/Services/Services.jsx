import React from 'react'
import Logo1 from '../../assets/images/Logo1.png'
import Logo2 from '../../assets/images/Logo2.png'
import Logo3 from '../../assets/images/Logo3.png'
import Logo4 from '../../assets/images/Logo4.png'
import Logo5 from '../../assets/images/Logo5.png'
import Logo6 from '../../assets/images/Logo6.png'
import Logo7 from '../../assets/images/Logo7.png'
import nat from '../../assets/images/nat.png'
import club from '../../assets/images/club.png'
import member from '../../assets/images/member.png'


const Services = () => {
   const services = [
    {id: 1,title: 'Membership Organisations',image: member, description: "Our membership management software provides full automation of membership renewals and payments"},
    {id: 2,title: 'National Associations', image: nat, description: "Our membership management software provides full automation of membership renewals and payments"},
    {id: 3,title: 'Clubs And Groups', image: club, description: 'Our membership management software provides full automation of membership renewals and payments'},
   ]
    return (
    <div name="service" className='md:px-14 px-4 lg:px-14 py-16 max-w-screen-2xl mx:auto bg-white flex flex-col justify-between items-center'>
         <div className='text-center my-8'>
         <h1 className='font-semibold text-4xl mb-2 text-neutralDGrey'>Our Clients</h1>
         <p className='text-neutralGrey '>We have been working with some Fortune 500+ clients</p>
         </div>
           <div className='my-12 flex flex-wrap justify-between items-center gap-8 w-full'>
            <img  className='w-8' src={Logo1} alt='logo 1'/>
            <img className='w-8' src={Logo2} alt='logo 2'/>
            <img className='w-8' src={Logo3} alt='logo 3'/>
            <img className='w-8' src={Logo4} alt='logo 4'/>
            <img className='w-8' src={Logo5} alt='logo 5'/>
            <img className='w-8' src={Logo6} alt='logo 6'/>
            <img className='w-8' src={Logo7} alt='logo 7'/>
        </div>
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
           <h1 className='text-4xl font-semibold text-neutralDGrey mb-3'>Manage your entire community in a single system</h1>
           <p className='text-base my-2 text-neutralGrey'>Who is Nextcent suitable for?</p>
         </div>
         <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 gap-12'>
           {services.map((service) => (
             <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx:auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-4 hover:border-b-4 hover:border-indigo-700 transition-all duration-300'>
               <div className='bg-[#e8f5e9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center h-full'>
                <img src={service.image} className='-ml-5' alt='logo 1'/>
               </div> 
               <h1 className='w-3/4 text-center text-2xl font-semibold text-neutralDGrey mb-2 px-2'>{service.title}</h1>
               <p className='text-sm  text-neutralGrey'>{service.description}</p>
             </div>
           ))}
           </div>   
    </div>
  )
}

export default Services