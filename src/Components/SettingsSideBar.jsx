import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FormControlLabel, IconButton, Switch } from '@mui/material';
import Menu from './Menu';
import { useSettingsRedactor } from '../store';
import settings from '../img/settings.svg'
import MySlider from './MySlider';



export default function SettingsSideBar() {
  	const [state, setState] = React.useState(false);
	const setLanguage = useSettingsRedactor(state => state.setLanguage)
	const language = useSettingsRedactor(state => state.language)
	const setFontSize = useSettingsRedactor(state=> state.setFontSize)
	const fontSize = useSettingsRedactor(state=> state.fontSize)
	const setTabSize = useSettingsRedactor(state=> state.setTabSize)
	const tabSize = useSettingsRedactor(state=> state.tabSize)
	const swapCursorLabel = useSettingsRedactor(state=> state.swapCursorLabel)
	const cursorLabel = useSettingsRedactor(state=> state.cursorLabel)
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = (anchor) => (
    <Box
	 	sx={{backgroundColor:"#232323FF", height:"100%", pl:'10px'}}
      role="presentation"
    >
   <List >
		<Box sx = {{display:"flex", justifyContent:"center", mb:"30px"}}>
			<img width={'30px'}  src={settings}/>
		</Box>
		<ListItem  disablePadding>
			<MySlider
			setValue={setTabSize} 
			value={tabSize}
			title={"TabSize"} 
			max={4} 
			min={1}
			></MySlider>
      </ListItem>
		<ListItem  disablePadding>
			<MySlider
			setValue={setFontSize} 
			value={fontSize} 
			title={"FontSize"} 
			max={40} 
			min={15}></MySlider>
      </ListItem>
      <ListItem  disablePadding  sx={{ mt:'10px'}}>
        	<Menu 
			title={'Language'} 
			items={['java', 'javascript']} 
			setValue={setLanguage} 
			value={language}/>
      </ListItem>
		<ListItem  disablePadding>
		<FormControlLabel
			sx={{color:'#F0F0F0', margin:'0 auto'}}
          control={
            <Switch checked={cursorLabel} onChange={(e)=>{swapCursorLabel();}} name="antoine" />
          }
          label="Cursor label"
        />
      </ListItem>
   </List>
	</Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
		  <IconButton onClick={toggleDrawer(true)} aria-label="delete" sx={{color:"white"}}>
		  	<img width={'30px'}  src={settings}/>
			</IconButton>
          
          <Drawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}