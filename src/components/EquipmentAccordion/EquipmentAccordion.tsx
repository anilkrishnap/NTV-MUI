import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MUICardComponent from '../MUICardComponent/MUICardComponent';
import Equipment from '../../app/Equipment/page';
import { styled } from '@mui/material/styles'; 
const baseStyles = {
  backgroundColor: 'var(--light-bg-bg4-value)',
  color: 'var(--DQI-Widget-title, #000)',
 
  color2: 'var(--DQI-Widget-sub-title, #475467)',

};

const StyledAccordion = styled(Accordion)(({ variant }) => ({
  backgroundColor: variant ? variant.backgroundColor: baseStyles.backgroundColor,
  color: variant ? variant.color: baseStyles.color,
  color2: variant ? variant.color2: baseStyles.color2,
 
}));

export default function EquipmentAccordion({variant}) {
  return (
    <div>
        <StyledAccordion variant={variant} defaultExpanded style={{margin:'0'}}>
     
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><strong>Equipment(6)</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Equipment variant={variant}/>
          </Typography>
        </AccordionDetails>
   
        </StyledAccordion>
     
     
    </div>
  );
}
