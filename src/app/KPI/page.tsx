'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MUICardComponent from '../../components/MUICardComponent/MUICardComponent';
import KPIDataCardComponent from '../../components/KPIDataCardComponent/KPIDataCardComponent';
import { styled } from '@mui/material/styles'; 

const baseStyles = {
  backgroundColor: 'white',
  color: 'var(--DQI-Widget-title, #000)',
 
  color2: 'var(--DQI-Widget-sub-title, #475467)',

};

const StyledAccordion = styled(Accordion)(({ variant }) => ({
  backgroundColor: variant ? variant.backgroundColor: baseStyles.backgroundColor,
  color: variant ? variant.color: baseStyles.color,
  color2: variant ? variant.color2: baseStyles.color2,
 
}));
export default function MUIAccordionComponent({ variant }) {

  return (
    <> 
    <StyledAccordion variant={variant} defaultExpanded style={{margin:'0'}}>
    <AccordionSummary
          expandIcon={<ExpandMoreIcon  style={{color:"grey"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><strong>KPI</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ marginBottom: "16px"}}>
            <MUICardComponent  variant={variant}/>
          </Box>
          <KPIDataCardComponent  variant={variant}/>
        </AccordionDetails></StyledAccordion>
   
       
   
    </>
  );
}
