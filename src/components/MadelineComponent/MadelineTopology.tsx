import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'; 

import Button from '@mui/material/Button';
const baseStyles = {
    backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)',
    color: 'var(--DQI-Widget-title, #000)',
    backgroundColorCard:"white",
    color2: 'var(--DQI-Widget-sub-title, #475467)',
    backgroundColorTopology:"white", 

  
  };
  
  const StyledBox = styled(Box)(({ variant }) => ({
      backgroundColor: variant ? variant. backgroundColorTopology : baseStyles.backgroundColor,
      color: variant ? variant.color : baseStyles.color,
     
     
    }));



function MadelineTopology({variant}) {
  
    const cardStyles = {
   
    cardActions: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderBottom: '1px solid #eee', margin: '0', 
    backgroundColor
    : variant ? variant.backgroundColorTopology :
    'white'
    ,padding:"10px" },
  
    cardActionImg:{display: 'flex',width: '24px',height: '24px',padding: '4px',justifyContent: 'center',alignItems: 'center',gap: '8px',borderRadius: '50px',border: '1px solid var(--Heading, #0958D9)'}};
  return (
    <StyledBox variant={variant} >
           <Box sx={cardStyles.cardActions}>
<Box sx={cardStyles.cardActionImg} ><img
    loading="lazy"
    src="https://uirepo.blob.core.windows.net/airwave/topology.svg"
    className="imgMadeLineCard-2"
/>
</Box>
<Button size="small" style={{color:'var(--Heading, #0958D9)',fontWeight:"700",textTransform:"capitalize"}}>Topology</Button>
</Box>
    </StyledBox>
 
  )
}

export default MadelineTopology

