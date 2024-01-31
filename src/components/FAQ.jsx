import React from 'react'
import AccordionComp from './AccordionComp'
import { FAQ_ques,FAQ_ans } from '../Resources/Contents';

export default function FAQ() {

  const Questions = [
    "What is a PayPal fee calculator?",
    "Why do I need a PayPal calculator?",
    "How much will PayPal charge me to receive money?",
    "How should I use the PayPal Fee Calculator?",
    "How do you calculate the “You should ask for” amount?",
    "Do you have any other calculators I can use?",
    "How do I calculate PayPal fees?",
    "How much is the PayPal fee for $100?"
  ];

  return (
    <div className='flex flex-col items-center mt-10 lg:w-2/3 md:2/3 w-5/6 mx-auto'>
      <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl text-center'>Frequently Asked Questions</h2>
      <div className='my-3 flex flex-col space-y-2 w-full'>
        {Questions.map((question,index)=>{
          return(
            <AccordionComp key={index} question={FAQ_ques[index]} answers = {FAQ_ans[index]}/>
          )
        })}
      </div>

    </div>
  )
}
