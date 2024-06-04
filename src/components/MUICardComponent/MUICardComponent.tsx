import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MUICardComponent() {
  return (
    <>
    <Card sx={{ backgroundColor: 'var(--BG-2-blue-in-light, #EFF3F7)', boxShadow:'none',minWidth: 275 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box display="flex" flexDirection="column">
            <Typography>
              <strong>Utilization</strong>
            </Typography>
            <Typography variant="body2">
              Good (75% to 90%)
            </Typography>
          </Box>
          <Box flexGrow={1}></Box>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f096038999b1ff38132a475c789972a95d392daaaace567c023bf9c83b0fad22?"
            className="img"
            style={{ height: '100%' }}
          />
        </Box>
      </CardContent>
    </Card>
    <style jsx>{`
      `}</style>
    </>
  );
}
