import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider } from '@mui/material';
import SearchInput from '@/components/SearchInput/SearchInput';

const baseStyles = {
  backgroundColor: 'white',
  color: 'var(--DQI-Widget-title, #000)',
 
  color2: 'var(--DQI-Widget-sub-title, #475467)',

};

const StyledBox = styled(Box)(({ variant }) => ({
  backgroundColor: variant ? variant.backgroundColor: baseStyles.backgroundColor,
  color: variant ? variant.color: baseStyles.color,
  color2: variant ? variant.color2: baseStyles.color2,
 
}));

export default function Equipment({variant}) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <StyledBox variant={variant} >
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
     
      
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={12}>

          <SearchInput/>
          
            <List dense={dense}>
                <ListItem>
                  <img src='https://uirepo.blob.core.windows.net/airwave/internet-devices.svg' style={{marginRight:'15px'}}/>
                  <ListItemText
                    primary="ENODEB"
                    secondary="384002 E20TH BROADWAY AWS"
                  />
                  <img src='https://uirepo.blob.core.windows.net/airwave/smallDQI_folder_icon.svg'/>
                </ListItem>

                <Divider/>

                <ListItem>
                  <img src='https://uirepo.blob.core.windows.net/airwave/radio_frame_icon.svg' style={{marginRight:'15px'}}/>
                  <ListItemText
                    primary="RADIO FRAME"
                    secondary="NY_MINI NO2_002 ASSEMBIAGE"
                  />
                  <img src='https://uirepo.blob.core.windows.net/airwave/smallDQI_folder_icon.svg'/>
                </ListItem>

                <Divider/>

                <ListItem>
                  <img src='https://uirepo.blob.core.windows.net/airwave/radio_frame_icon.svg' style={{marginRight:'15px'}}/>
                  <ListItemText
                    primary="RADIO FRAME"
                    secondary="NY_MINI NO2_002 ASSEMBIAGE"
                  />
                  <img src='https://uirepo.blob.core.windows.net/airwave/smallDQI_folder_icon.svg'/>
                </ListItem>

                <Divider/>

                <ListItem>
                  <img src='https://uirepo.blob.core.windows.net/airwave/cell_calendar_icon.svg' style={{marginRight:'15px'}}/>
                  <ListItemText
                    primary="CDMA 800 CELL"
                    secondary="NY_MINI NO2_002 ASSEMBIAGE"
                  />
                  <img src='https://uirepo.blob.core.windows.net/airwave/smallDQI_folder_icon.svg'/>
                </ListItem>

                <Divider/>

                <ListItem>
                  <img src='https://uirepo.blob.core.windows.net/airwave/internet-devices.svg' style={{marginRight:'15px'}}/>
                  <ListItemText
                    primary="ENODEB"
                    secondary="MINLNYACTA-P-AL-0002-01"
                  />
                  <img src='https://uirepo.blob.core.windows.net/airwave/smallDQI_folder_icon.svg'/>
                </ListItem>

                <Divider/>

                <ListItem>
                  <img src='https://uirepo.blob.core.windows.net/airwave/cell_calendar_icon.svg' style={{marginRight:'15px'}}/>
                  <ListItemText
                    primary="CDMA 800 CELL"
                    secondary="NY_MINI NO2_002 ASSEMBIAGE"
                  />
                  <img src='https://uirepo.blob.core.windows.net/airwave/smallDQI_folder_icon.svg'/>
                </ListItem>

                <Divider/>
              
            </List>
          
        </Grid>
      </Grid>
    </Box>
    </StyledBox>
  );
}
