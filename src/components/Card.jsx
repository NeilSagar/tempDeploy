import React from 'react'

export default function Card({image,heading,content}) {
  return (
    <div style={{backgroundColor:"#D9D9D9"}} className='w-52 m-2 flex flex-col items-center p-3 rounded-lg'>
        <img src={image} alt='card-img'/>
        <h2 className='font-semibold leading-5 '>{heading}</h2>
        <p className='font-light leading-5 mt-2'>{content}</p>
    </div>
  )
}
