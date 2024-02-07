import React from 'react'
import AccordionComp from './AccordionComp'
import { FAQ_ques,FAQ_ans } from '../Resources/Contents';

export default function FAQ() {

  return (
    <div className='bg-slate-200 flex flex-col items-center w-full  mx-auto py-10'>
        <div className='lg:w-7/12 md:w-2/3 w-11/12 mx-auto'>
          <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl text-left'>Frequently Asked Questions</h2>
          <div className='my-3 flex flex-col space-y-2 w-full'>
            {FAQ_ques.map((FAQ,index)=>{
              return(
                <AccordionComp key={index} question={FAQ_ques[index]} answers = {FAQ_ans[index]}/>
              )
            })}
        </div>
        </div>
    </div>
  )
}
