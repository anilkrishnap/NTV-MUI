import * as React from 'react';
import Box from '@mui/material/Box';
 
export default function RadiantBox({ children }) {
  return (
    <Box component="section">
      {children}
    </Box>
  );
}