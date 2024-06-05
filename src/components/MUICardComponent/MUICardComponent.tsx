import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'; 

const baseStyles = {
  backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)',
  color: 'var(--DQI-Widget-title, #000)',
  backgroundColorCard:"white",
  color2: 'var(--DQI-Widget-sub-title, #475467)',

};

// const cardStyles = {
//   card: {
//     backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)', boxShadow:'none',minWidth: 275
//   },
// };
const StyledCard = styled(Card)(({ variant }) => ({
  backgroundColor: variant ? variant.backgroundColorCard : baseStyles.backgroundColor,
  color: variant ? variant.color : baseStyles.color,
  color2: variant ? variant.color2 : baseStyles.color2,
 
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
            <Typography sx={{color:'var(--Text-color-3, #475467);'}}>
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
