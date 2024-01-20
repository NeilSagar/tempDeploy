import React from 'react'
import Pinterest from "../Resources/Pinterest.png"
import LinkedIn from "../Resources/LinkedIn.png"
import TwitterX from "../Resources/TwitterX.png"
import Facebook from "../Resources/Facebook.png"
import Instagram from "../Resources/Instagram.png"

export default function Footer() {
  const col1=["Contact Us","ABOUT US","Privacy Policy","Terms of Service","DMCA Policy","Authors",
  "Work With us","FAQ"];
  const col2 =["Advertise","Accessibility","Guest Posting","Terms of Services","Site Map",
  "Terms of Sale","Subscription"];
  const col3 = ["Blog/Articles","Trust","Help"];
  const logos = [Pinterest,LinkedIn,TwitterX,Facebook,Instagram];
  return (
    <div className='w-5/6 mx-auto py-10'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>LOGO</h1>
        <h2>Back to Top</h2>
      </div>
      <div className='lg:w-2/3 md:5/6 w-full mx-auto'>
          <div>
            Lorem  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div>
            <div className='flex flex-wrap lg:justify-center md:justify-center justify-left mt-5'>
              <div className='m-5'>
              {col1.map((col,index)=>(<p key={index} className='hover:underline hover:cursor-pointer min-w-fit'>{col}</p>))}
              </div>
              <div className='m-5'>
              {col2.map((col,index)=>(<p key={index} className='hover:underline hover:cursor-pointer min-w-fit'>{col}</p>))}
              </div>
              <div className='m-5'>
              {col3.map((col,index)=>(<p key={index} className='hover:underline hover:cursor-pointer min-w-fit'>{col}</p>))}
              </div>
            </div>
          </div>
      </div>
      
      <div className='flex flex-wrap  lg:justify-end md:justify-end justify-center min-w-fit '>
        {logos.map((logo,index)=>(
          <img key={index} src={logo} alt='social-app' className='min-w-fit'/>
        ))}
      </div>

      <p className='mt-4 w-1/2 mx-auto text-center'>Copyright 2024 Calender. All right reserved</p>
    </div>
  )
}
