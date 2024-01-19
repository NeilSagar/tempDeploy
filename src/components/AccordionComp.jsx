import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionComp({question}) {
  return (
    <div>
        <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary sx={{backgroundColor:"#CFCFCF"}}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"#F4F4F4"}}>
        PayPal fees can seriously eat into your profits if you handle a lot of transactions through their service. 
        lorem upsum lorem upsum lorem upsumlorem upsum lorem upsum lorem upsum
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
