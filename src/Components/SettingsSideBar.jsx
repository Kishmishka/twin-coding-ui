import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { IconButton, TextField } from '@mui/material';
import Menu from './Menu';
import { useSettings } from '../store';
import settings from '../img/settings.svg'



export default function SettingsSideBar() {
  	const [state, setState] = React.useState(false);
	const setLanguage = useSettings(state => state.setLanguage)
	const language = useSettings(state => state.language)
	const setFont = useSettings(state=> state.setFont)
	const font = useSettings(state=> state.font)
	const setFontSize = useSettings(state=> state.setFontSize)
	const fontSize = useSettings(state=> state.fontSizeStr)
	const setTabSize = useSettings(state=> state.setTabSize)
	const tabSize = useSettings(state=> state.tabSize)

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = (anchor) => (
    <Box
	 	sx={{backgroundColor:"#232323FF", height:"100%", pl:'10px'}}
      role="presentation"
    >
   <List >
		<Box sx = {{display:"flex", justifyContent:"center"}}>
			<img width={'30px'}  src={settings}/>
		</Box>
      <ListItem  disablePadding  sx={{ mt:'10px'}}>
        	<Menu 
			title={'Language'} 
			items={['sass', 'java', 'javascript']} 
			setValue={setLanguage} 
			value={language}/>
      </ListItem>
		<ListItem  disablePadding>
			<Menu 
			title={'FontSize'} 
			items={['Big', 'Medium','Small']}
			setValue={setFontSize} 
			value={fontSize}
			/>
      </ListItem>
		<ListItem  disablePadding>
			<Menu 
			title={'TabSize'} 
			items={['4','3','2']}
			setValue={setTabSize} 
			value={tabSize}
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