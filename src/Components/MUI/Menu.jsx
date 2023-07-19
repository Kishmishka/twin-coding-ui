import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//Модернизированный компонент menu взятый из material-ui
//Используется в компоненте SettingsSideBar.jsx
export default function Menu({title, items, value, setValue}) {
  return (
    <Box>
      <FormControl color='primary' fullWidth  >
        <InputLabel  sx={{color:'white'}} id="demo-simple-select-label">{title}</InputLabel>
        <Select
		 	 sx={{color:'white'}}
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