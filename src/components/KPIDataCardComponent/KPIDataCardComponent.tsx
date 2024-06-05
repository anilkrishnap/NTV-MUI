import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'; 

// const cardStyles = {
//   card: {
//     backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)', boxShadow:'none',minWidth: 275
//   },
// };
const StyledCard = styled(Card)(({ variant }) => ({
  backgroundColor: variant ? variant.backgroundColorCard : baseStyles.backgroundColor,
 
}));
const baseStyles = {
  backgroundColor: 'orange',

};


export default function KPIDataCardComponent({variant}) {
  return (
    <>
       <StyledCard variant={variant}>
       <CardContent>
        <Box display="flex" alignItems="center">
          <Box display="flex" flexDirection="column">
            <Typography>
              <strong>Data Quality Index</strong>
            </Typography>
            <Typography>
              Good (75% to 90%)
            </Typography>
          </Box>
          <Box flexGrow={1}></Box>
          <img
            loading="lazy"
            src="https://uirepo.blob.core.windows.net/airwave/DQIDQI.svg"
            className="img"
            style={{ height: '100%' }}
          />
        </Box>
      </CardContent>
       </StyledCard>
 
  
    
    <style jsx>{`
      `}</style>
    </>
  );
}
