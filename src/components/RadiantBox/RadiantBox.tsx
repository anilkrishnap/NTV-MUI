import * as React from 'react';
import Box from '@mui/material/Box';

export default function RadiantBox() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
