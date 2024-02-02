import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoImg from "../Resources/ACFT_LOGO_INVERTED.png";


export default function Navbar() {
  const [displayNavbar,setDisplayNavbar] = useState(false);


  return (
    <div id="navbar">
    <div className='flex justify-between bg-opacity-15 bg-black text-white'>
        <div className='ms-2'>
          <img  className='h-20 object-cover object-center w-40'
            src={logoImg}
            alt='logo'
          />
        </div>
        <div className=' flex items-center lg:hidden md:hidden p-4 hover:cursor-pointer'>
        {displayNavbar?
        <CloseIcon sx={{transform: 'scale(2)'}} onClick={()=>setDisplayNavbar(!displayNavbar)}/>:
        <MenuIcon sx={{transform: 'scale(2)'}} onClick={()=>setDisplayNavbar(!displayNavbar)}/>}
        </div>

        <div className='hidden lg:flex md:flex space-x-8  p-4 z-10 '>
            <button className='hover:underline'>Home</button>
            <button className='hover:underline'>Blog</button>
            <button className='hover:underline'>Services</button>
            <button className='hover:underline'>Contacts</button>
        </div>
    </div>

    <div className={`flex flex-col space-y-2 p-4 z-10 text-white bg-opacity-15 bg-black lg:hidden md:hidden transition-opacity ${displayNavbar ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
      <button className='hover:underline'>Home</button>
      <button className='hover:underline'>Blog</button>
      <button className='hover:underline'>Services</button>
      <button className='hover:underline'>Contacts</button>
    </div>

    <div className='lg:w-1/2 md:w-2/3 sm:w-9/12 w-11/12  mx-auto text-center '>
        <div className='  text-white flex flex-col space-y-6'>
            <h2 className='w-2/3 min-w-fit mx-auto lg:text-4xl md:text-4xl sm:text-3xl text-xl text-center '>
            <span className='ColorfulHeading'>ACFT Calculator</span> - Calculate Army Combat Fitness Test Score</h2>
            <p className='font-light lg:text-2xl md:text-xl sm:text-lg text-sm'>
              Determine your ACFT (Army Combat Fitness Test) score with our updated calculator and the most recent scoring charts.
            </p>
        </div>
    </div>
    </div>
  )
}
