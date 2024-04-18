import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarWeb from './NavbarWeb'

const Navbar = () => {
  return (
    <div>
      <div className='lg:hidden md:hidden sm:block mob:block'>
        <NavbarMobile />
      </div>
      <div className='lg:block md:block sm:hidden mob:hidden'>
        <NavbarWeb />
        </div>
    </div>
  )
}

export default Navbar
