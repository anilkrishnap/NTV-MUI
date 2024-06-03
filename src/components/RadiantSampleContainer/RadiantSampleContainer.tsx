import * as React from 'react';

import { Container } from '@mui/material';
import RadiantInputField from '../RadiantInputField/RadiantInput';
import RadiantButton from '../RadiantButton/RadiantButton';
import Box from '@mui/material/Box';




export default function RadiantSampleContainer() {
  
  return (
    // <Box component="section" style={{height:"288px",width:"1200px"}}sx={{ p: 2, border: '1px dashed grey' }}>
    //   This Box renders as an HTML section element.
    // </Box>
    <>
 
      <Container className='container-styles' maxWidth="lg"  style={{display:"flex",height:"288px",width:"1200px",alignItems:"flex-start",flexDirection:"column"}}>
       
     
         <RadiantInputField  label="Label" inputType="text" required />
         <Box sx={{ display:"inline-flex",gap:"20px"}}>
         <RadiantButton label="first" backgroundColor='primary'/>
         <RadiantButton label='second' backgroundColor='#9C27B0'/>
         <RadiantButton label='third' backgroundColor='green'/>
         </Box>
       
         
        
      </Container>
</>

  );
}
