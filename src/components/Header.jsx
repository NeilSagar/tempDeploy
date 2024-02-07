import React from 'react'
import Navbar from './Navbar'

import Calculator from './Calculator';

import headerImg from "../Resources/headerImg.webp"

const customStyle = {
  backgroundImage: `url(${headerImg})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
};

export default function Header() {
  return (
    <div  style={customStyle} className='pb-10'>
        <Navbar/>
        <Calculator/>
    </div>
  )
}
