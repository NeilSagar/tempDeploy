import React from 'react'
import headerImg from "../Resources/headerImg.png"
const customStyle = {
  backgroundImage: `url(${headerImg})`, // Correct way to set background image
  backgroundSize: 'cover', // Optional: Adjust as needed
  backgroundPosition: 'center', // Optional: Adjust as needed
  // Add other styling properties as needed
};
export default function Navbar() {
  return (
    <div style={customStyle} className='h-svh'>
    <div className='flex justify-between text-white'>
        <h1 className='text-2xl'>LOGO</h1>
        <div className='flex lg:space-x-8 space-x-2 mr-4'>
            <button className='hover:underline'>Home</button>
            <button className='hover:underline'>Blog</button>
            <button className='hover:underline'>Services</button>
            <button className='hover:underline'>Contacts</button>
        </div>
    </div>
    <div className='lg:w-1/2 md:w-2/3 sm:w-9/12 w-11/12  mx-auto text-center lg:mt-40 md:mt-32 sm:mt-24 mt-14'>
        <div className='  text-white flex flex-col space-y-6'>
            <h2 className='w-2/3 min-w-fit mx-auto lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-center '>
            <span className='ColorfulHeading'>ACFT Calculator</span> - Calculate Army Combat Fitness Test Score</h2>
            <p className='font-light lg:text-2xl md:text-lg text-sm'>Calculate your Army Combat Fitness Test score using the ACFT calculator and the latest score charts.</p>
        </div>
    </div>
    </div>
  )
}
