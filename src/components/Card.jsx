import React from 'react'

export default function Card({image,heading,content}) {
  return (
    <div style={{backgroundColor:"#D9D9D9"}} className='w-48 m-2 flex flex-col items-center p-1 py-3 rounded-lg shadow-sm'>
        <img src={image} alt='card-img'/>
        <h2 className='font-semibold leading-5 w-full text-center'>{heading}</h2>
        <p className='font-light mt-2 text-center w-full'>{content}</p>
    </div>
  )
}
