import React from 'react'

export default function ScoreCard({heading,value}) {
  return (
    <div style={value==="Passed"?{backgroundColor:"#13BB24",border:"2px solid #727272",color:"#fff"}:{backgroundColor:"#D9D9D9",border:"2px solid #727272"}} className='w-52 lg:w-5/12 md:w-5/12 p-2 m-2' >
        <h3 className='text-sm lg:text-xl md:text-xl'>{heading}</h3>
        <p className='text-sm lg:text-lg md:text-lg font-light'>{value}</p>
    </div>
  )
}
