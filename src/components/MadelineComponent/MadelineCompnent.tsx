import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'; 
import MadelineTopology from './MadelineTopology';

  
const baseStyles = {
  backgroundColor: 'var(--light-bg-bg4-value)',
  color: 'var(--DQI-Widget-title, #000)',
  backgroundColorCard:"white",
  color2: 'var(--DQI-Widget-sub-title, #475467)',

};

const StyledCard = styled(Card)(({ variant }) => ({
    backgroundColor: variant ? variant.backgroundColorMadeline: baseStyles.backgroundColor,
    color: variant ? variant.color : baseStyles.color,
   
   
  }));

const cardStyles = {
    card: { boxShadow: 'none', minWidth: 275 },
    BoxContainer:{padding:'10px', borderRadius:0},
    cardContent: { backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)' },
    cardActions: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", borderBottom: '1px solid #eee', margin: '0 16px' },
    ellipse: { display: 'flex', width: '28px', height: '20px', padding: '4px 20px', justifyContent: 'center', alignItems: 'center', gap: '4px', borderRadius: 'var(--radius-lg, 12px)', border: '0.5px solid var(--Border-d2-l2, #D0D5DD)', background: 'var(--BG-4-white-in-light, #FFF)' },
    madelineTextIcons: { display: "flex", justifyContent: "space-between", flexDirection: "row" },
    madeLineParent: { display: "flex", alignItems: "center" },
    addr: { marginLeft: '53px' },
    addText: { marginTop: '10px' },
    rightIcons: { display: 'flex', alignItems: 'flex-start', position: 'relative', top: '0' },
    madeLineHeader: { marginLeft: '10px', marginBottom: '10px', fontWeight:'700' },
    cardActionImg:{display: 'flex',width: '24px',height: '24px',padding: '4px',justifyContent: 'center',alignItems: 'center',gap: '8px',borderRadius: '50px',border: '1px solid var(--Heading, #0958D9)'}};

export default function MadelineCompnent({variant}){
    return (
        <>
           <StyledCard variant={variant} sx={cardStyles.BoxContainer}>
             
                <Box sx={cardStyles.madeLineParent}>
                    <Box sx={cardStyles.madelineTextIcons}>

                        <Box sx={cardStyles.ellipse}>
                            <img src='https://uirepo.blob.core.windows.net/airwave/EllipseIcon.svg'  />
                            <img src='https://uirepo.blob.core.windows.net/airwave/EllipseIcon.svg' />
                        </Box>

                        <Box sx={cardStyles.madeLineHeader}>MADELINE</Box>

                    </Box>
                    <Box flexGrow={1}></Box>
                    <Box sx={cardStyles.rightIcons}>
                        <img src='https://uirepo.blob.core.windows.net/airwave/pinIcon.svg' style={{ marginRight: '8px' }} />
                        <img src='https://uirepo.blob.core.windows.net/airwave/moveIcon.svg' style={{ marginRight: '8px' }} />
                        <img src='https://uirepo.blob.core.windows.net/airwave/minus-squareIcon.svg' style={{ marginRight: '8px' }} />
                        <img src='https://uirepo.blob.core.windows.net/airwave/OpeninNewIcon.svg' style={{ marginRight: '8px' }} />
                    </Box>
                </Box>

                <Box sx={cardStyles.addr}>

                    <Typography variant="body2" style={{color:'var(--Text-color-3, #475467);'}}>
                        Macro Cell Site: 499246
                    </Typography>
                    <Box sx={cardStyles.addText}>
                        <Box display={'flex'}>
                            <Box>
                                <Typography variant="body2">Address:</Typography>
                            </Box>
                            <Box marginLeft={'60px'}>
                                <Typography variant="body2">Monrovia, CA, 91016</Typography>
                            </Box>
                        </Box>
                        <Box display={'flex'}>
                            <Box>
                                <Typography variant="body2">CLLI Code:</Typography>
                            </Box>
                            <Box marginLeft={'45px'}>
                                <Typography variant="body2">TLJHGYT875T</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>

           
            
        </StyledCard>
        <MadelineTopology variant={variant}/>
      </>
     
       
          
      
    );
}
