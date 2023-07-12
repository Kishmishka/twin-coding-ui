import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


//Модернизированный слайдер из material-ui
//Используется в компоненте SettingsSideBar.jsx
export default function MySlider({value, title, max, min, setValue}) {
 
  return (
    <Box sx={{ width:"75%", margin:"0 auto" }}>
      <Typography sx={{color:"#EEEEEE", }} id="non-linear-slider" gutterBottom>
			{title}
      </Typography>
      <Slider
        value={value}
        min={min}
        step={1}
        max={max}
		  onChange={(event)=>{setValue(event.target.value)}}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}