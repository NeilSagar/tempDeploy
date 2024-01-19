import React from 'react'
import Card from './Card'

import bookmark from "../Resources/Delete Bookmark.png"
import cloud from "../Resources/Download from the Cloud.png";
import ok from "../Resources/Ok.png";
import plus from "../Resources/Plus.png";

export default function Body() {
const images =[bookmark,cloud,ok, plus];
  return (
    <div className=' mt-5 flex flex-col items-center text-center space-y-10'>
      <h2 className='lg:w-1/2 md:w-2/3 w-11/12 mx-auto text-4xl'>Lorem ipsum dolor sit amet, consectetur adipisicing </h2>
      <p className='lg:w-1/2 md:w-2/3 w-11/12  mx-auto font-light  tracking-wide leading-8'>Designhill's PayPal calculator takes away the complexity of calculating individual fees and payments. It makes sure your calculations are done correctly even in a jiffy. If you own a business and your buyers /customers use PayPal, you'll have to bear the fee. As you have many transactions in a day, Designhill's PayPal fee calculator can prove to be a useful tool for you.. 
      Read more.</p>

      <h2 className='lg:w-1/2 md:w-2/3 w-11/12 mx-auto text-4xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</h2>
      <div className=' flex flex-wrap justify-center'>
        {images.map((image,index)=>{
          return (
            <Card key={index}
            image={image} 
            heading="Lorem ipsum dolor sit amet, consectetur " 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
          )
        })}
      </div>
    </div>
  )
}
