import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/Icon.svg'
import { Link } from 'react-scroll'
import { FaBars, FaXmark } from 'react-icons/fa6'
import './Navbar.css'
import { navItems } from '../../constants'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
   } 

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
   },[  isSticky])


  return (
    <header className=' header-container '>
      <nav className={` ${isSticky ? 'sitckyNav ' : 'bg-transparent'}`}>
         <div className='nav-large '>
           <a href='home' className='brand'>
             <img src={logo} alt="logo"  className=''/>
             <span className='text-brandSecondary'>NEXTCENT</span> 
           </a>
             {/* Nav items large  */}
              <ul className=' '>
                 {
                   navItems.map(({link, path}) =>
                    <Link to={path} key={path} spy={true} smooth={true} 
                      offset={-100} className='my-item cursor-pointer'>{link}
                   </Link>)
                 }
              </ul>
              {/* Btn large devices */}
              <div className='space-x-12 hidden lg:flex items-center'>
                 <a href='/' className='hidden lg:flex items-center
                  text-brandPrimary hover:text-gray-900' >Login</a>
                  <button className='bg-brandPrimary text-white px-4 py-2 
                  rounded-md transition-all duration-300 hover:bg-neutralDGrey'>Sign up</button>
              </div>

              {/* btn small devices */}
              <div className='md:hidden'>
                 <button onClick={toggleMenu} className='  toggleMenu'>
                   {
                     isMenuOpen  ? (<FaXmark className='h-6 w-6 '/>) 
                     :(<FaBars className='h-6 w-6 ' />)
                   }
                 </button>
              </div>
         </div>
         { /* nav items for mobile devices */ }
          <div className={`mobileItem ${isMenuOpen ? 'MenuOpen ' : 'hidden'}`} >
          {
                   navItems.map(({link, path}) =>
                    <Link to={path} key={path} spy={true} smooth={true} 
                      offset={-100} className='my-item-mobile '>{link}
                   </Link>)
                 }
          </div>
      </nav>
    </header>
  )
}

export default Navbar