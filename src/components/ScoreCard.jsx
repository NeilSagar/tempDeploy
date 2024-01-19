import React from 'react'

export default function ScoreCard({heading,value}) {
  return (
    <div style={value==="Passed"?{backgroundColor:"#13BB24",border:"2px solid #727272",color:"#fff"}:{backgroundColor:"#D9D9D9",border:"2px solid #727272"}} className='w-1/3 lg:w-5/12 md:w-5/12 sm:w-5/12 min-w-fit p-2' >
        <h2 className='text-xl'>{heading}</h2>
        <p className='font-light'>{value}</p>
    </div>
  )
}
