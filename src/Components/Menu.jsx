import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';


//Модернизированный компонент menu взятый из material-ui
//Используется в компоненте SettingsSideBar.jsx
const CssTextField = styled(TextField)({
	color:"#FFFFFFFF",
	 margin:"0 auto", 
	 width:'87%',
	'& label':{
		paddingLeft:"20px",
		color:"#F0F0F0FF"
	},
  '& label.Mui-focused': {
    color: '#F0F0F0FF',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
	minWidth: 120, 
	borderRadius:"5px",
	margin:"0 auto", 
	width:'87%', 
	color:'#F0F0F0FF',
	backgroundColor:'transparent',
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});


export default function Menu({title, items, value, setValue}) {
  return (
    <Box sx={{ minWidth: 200, margin:"0 10px", width:'87%', mb:"20px"}}>
      <FormControl color='primary' fullWidth  sx={{color:'white', borderColor:'#EBEBEBFF'}}>
        <InputLabel  sx={{color:'white'}} id="demo-simple-select-label">{title}</InputLabel>
        <Select
		 
		 	sx={{color:'white',borderColor:'#CC397BFF',  }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={title}
          onChange={(event) => {setValue(event.target.value)}}
			 
        >
		  {items.map(item=>
			<MenuItem key={item} value={item}>{item}</MenuItem>
		  )}
          
        </Select>
      </FormControl>
    </Box>
  );
}