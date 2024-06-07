// ReusableAccordion.js
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const ReusableAccordion = ({ title, children }) => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Box display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReusableAccordion;
