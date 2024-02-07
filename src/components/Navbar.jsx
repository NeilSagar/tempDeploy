import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoImg from "../Resources/ACFT_LOGO_INVERTED.png";


export default function Navbar() {
  const [displayNavbar,setDisplayNavbar] = useState(false);


  return (
    <div id="navbar" >
      <div className='flex items-center 3xl:px-48 lg:px-32 justify-between bg-opacity-15 bg-black text-white h-fit p-2'>
        <div className='ms-1 mt-1 '>
          <img  className='h-20 w-40 object-cover '
            src={logoImg}
            alt='logo'
          />
        </div>
        <div className=' flex items-center lg:hidden md:hidden pr-4 hover:cursor-pointer'>
        {displayNavbar?
        <CloseIcon sx={{transform: 'scale(2)'}} onClick={()=>setDisplayNavbar(!displayNavbar)}/>:
        <MenuIcon sx={{transform: 'scale(2)'}} onClick={()=>setDisplayNavbar(!displayNavbar)}/>}
        </div>

        <div className='hidden lg:flex md:flex space-x-8  pr-4 z-10 '>
            <button className='hover:underline'>Home</button>
            <button className='hover:underline'>Blog</button>
            <button className='hover:underline'>Services</button>
            <button className='hover:underline'>Contacts</button>
        </div>
      </div>

      <div className={` flex flex-col space-y-2 p-4 z-10 text-white bg-opacity-15 bg-black lg:hidden md:hidden transition-opacity ${displayNavbar ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
      <button className='hover:underline'>Home</button>
      <button className='hover:underline'>Blog</button>
      <button className='hover:underline'>Services</button>
      <button className='hover:underline'>Contacts</button>
      </div>

      <div className='lg:w-1/2 md:w-2/3 sm:w-9/12 w-11/12  mx-auto text-center mt-2'>
        <div className='  text-white flex flex-col space-y-6'>
            <h1 className='w-2/3 min-w-fit mx-auto lg:text-4xl md:text-4xl sm:text-3xl text-xl text-center '>
              ACFT Score Calculator Online
            </h1>
            <p className='font-light text-xs'>
              Determine your ACFT (Army Combat Fitness Test) score with our updated calculator and the most recent scoring charts.
            </p>
        </div>
      </div>
    </div>
  )
}
