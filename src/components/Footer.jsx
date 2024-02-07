import React from 'react'
import Pinterest from "../Resources/Pinterest.png"
import LinkedIn from "../Resources/LinkedIn.png"
import TwitterX from "../Resources/TwitterX.png"
import Facebook from "../Resources/Facebook.png"
import Instagram from "../Resources/Instagram.png"
import ACFT_LOGO from "../Resources/ACFT_logo.png"
import { ContentLinks } from '../Resources/ContentLinks.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  const col1=[["Contact Us","ContactUs"],["ABOUT US","AboutUs"],["Privacy Policy","PrivacyPolicy"],["Terms of Service","TermsOfService"],["DMCA Policy","DMCAPolicy"],["Authors","Authors"],
  ["Work With us","WorkWithUs"],["FAQ","FAQ"]];
  const col2 =[["Advertise","Advertise"],["Accessibility","Accessibility"],["Guest Posting","GuestPosting"],["Terms of Services","TermsOfServices"],["Site Map","SiteMap"],
  ["Terms of Sale","TermsOfSale"],["Subscription","Subscription"]];
  const col3 = [["Blog/Articles","BlogArticles"],["Trust","Trust"],["Help","Help"]];
  const logos = [Pinterest,LinkedIn,TwitterX,Facebook,Instagram];
  const footerContent = "© 2024 U.S. Army Combat Fitness Test Information. All Rights Reserved.For more information, visit the official U.S. Army website or contact us.Stay updated on ACFT news, guidelines, and resources by following us on our social media channels.";


  const scrollToElement = (elementId) => {
    
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function backToTop(){
    scrollToElement('navbar');
  }
  return (
    <div className='w-full py-10 bg-slate-200 '>
    <div className='lg:w-7/12 md:w-2/3 w-11/12 mx-auto'>
      <div className='w-full mx-auto'>
      <div className=' flex flex-wrap justify-between items-center'>
        <img  className='h-20 object-cover object-center w-40'
            src={ACFT_LOGO}
            alt='logo'
        />
        <p onClick={backToTop} className='underline hover:cursor-pointer'>
          Back to Top
        </p>
      </div>
      <div className='w-full mx-auto '>
          <p className='mt-2'>
            {footerContent}
          </p>
          <div>
            <div className='flex flex-wrap justify-around  mt-5 sm:text-left text-center'>
              <div className='lg:w-36 md:w-36 sm:w-36 w-full my-5 '>
              {col1.map((col,index)=>(<Link key={index} className='hover:underline hover:cursor-pointer  w-full' to={ContentLinks[col[1]]} target="_blank"><p>{col[0]}</p></Link>))}
              </div>
              <div className='lg:w-36 md:w-36 sm:w-36 w-full my-5'>
              {col2.map((col,index)=>(<Link key={index} className='hover:underline hover:cursor-pointer  w-full'to={ContentLinks[col[1]]} target="_blank" ><p>{col[0]}</p></Link>))}
              </div>
              <div className='lg:w-36 md:w-36 sm:w-36 w-full my-5'>
              {col3.map((col,index)=>(<Link key={index} className='hover:underline hover:cursor-pointer  w-full' to={ContentLinks[col[1]]} target="_blank"  ><p>{col[0]}</p></Link>))}
              </div>
            </div>
          </div>
      </div>
      
      <div className='flex flex-wrap  lg:justify-end md:justify-end justify-center min-w-fit '>
        {logos.map((logo,index)=>(
          <img key={index} src={logo} alt='social-app' className='lg:w-20 md:w-20 sm:w-20 w-12'/>
        ))}
      </div>

      <p className='mt-4  mx-auto text-center lg:text-lg md:text-lg sm:text-sm text-xs 
      w-11/12'>Copyright 2024 Calender. All right reserved</p>
      </div>
      </div>
    </div>
  )
}
