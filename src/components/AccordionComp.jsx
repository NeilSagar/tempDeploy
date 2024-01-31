import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function AccordionComp({question,answers}) {
  return (
    <div>
        <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary sx={{backgroundColor:"#CFCFCF"}}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"#F4F4F4"}}>
        {answers}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
