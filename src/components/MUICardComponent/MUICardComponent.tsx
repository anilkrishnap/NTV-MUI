import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'; 
const baseStyles = {
  backgroundColor: 'orange',

};

// const cardStyles = {
//   card: {
//     backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)', boxShadow:'none',minWidth: 275
//   },
// };
const StyledCard = styled(Card)(({ variant }) => ({
  backgroundColor: variant ? variant.backgroundColorCard : baseStyles.backgroundColor,
 
}));
export default function MUICardComponent({variant}) {
  return (
    <>
     <StyledCard variant={variant}>
     
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box display="flex" flexDirection="column">
            <Typography>
              <strong>Utilization</strong>
            </Typography>
            <Typography>
              Moderate (25% to 50%)
            </Typography>
          </Box>
          <Box flexGrow={1}></Box>
          <img
            loading="lazy"
            src="https://uirepo.blob.core.windows.net/airwave/utilization_img.svg"
            className="img"
          />
        </Box>
      </CardContent>
   
     </StyledCard>
   
    </>
  );
}
