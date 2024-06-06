import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MUICardComponent from '../MUICardComponent/MUICardComponent';
import Equipment from '../../app/Equipment/page';

export default function EquipmentAccordion() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><strong>Equipment(6)</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Equipment/>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
