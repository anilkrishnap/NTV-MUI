import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const customStyles = {
parentContainer:{
width:'416px', height:'60px', padding:'10px 8px', display: 'flex',
alignItems: 'flex-start',
alignSelf: 'stretch',
background: 'var(--BG-3-white-in-light, #FFF)'
},
searchContainer:{width:'320px', height:'40px', border:'1px solid #000',
display: 'flex',padding: '0px var(--Search-search-bar-right-left-padding, 16px)',alignItems: 'center',
gap: 'var(--Search-search-bar-main-gap, 16px)',flex: '1 0 0',alignSelf: 'stretch',borderRadius: '24px',
background: 'var(--Search-search-bar-bg, #FCFCFD)'
},
madeLineText:{color: 'var(--Search-filled-text, #000)',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '20px' /* 142.857% */}

}
export default function CustomSearchInput() {
  return (
    <Box sx={customStyles.parentContainer}>
        <Box style={{padding:'10px 8px 10px 0'}}><img src='https://uirepo.blob.core.windows.net/airwave/menuIcon.svg'/></Box>
        <Box sx={customStyles.searchContainer}>
            <Box style={{padding:'16px 0 10px 0'}}>
                <img src='https://uirepo.blob.core.windows.net/airwave/arrow-left.svg'/>
            </Box>
            <Box sx={customStyles.madeLineText}>
                MADE LINE
            </Box>
            <Box flexGrow={1}></Box>
            <Box style={{padding:'16px 0 10px 0'}}>
                <img src='https://uirepo.blob.core.windows.net/airwave/x-close.svg'/>
                <img src='https://uirepo.blob.core.windows.net/airwave/slidersIcon.svg'/>
            </Box>
        </Box>
    </Box>
   
  )
}


