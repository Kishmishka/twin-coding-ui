import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FormControlLabel, IconButton, Switch } from '@mui/material';
import Menu from '../MUI/Menu';
import { useSettingsRedactor } from '../../store';
import settings from '../../img/settings.svg'
import MySlider from '../MUI/MySlider';
import './SettingsSideBar.scss'
import { Languages } from '../../Constants/Languages';

//Выпадающее меню настроек редактора
//Задействован в компоненте SideBar.jsx
//Создан при помощи material-ui
export default function SettingsSideBar() {
  	const [state, setState] 	 = React.useState(false);
	const setLanguage       	 = useSettingsRedactor(state => state.setLanguage)
	const language 		   	 = useSettingsRedactor(state => state.language)
	const setTabSize         	 = useSettingsRedactor(state=> state.setTabSize)
	const tabSize           	 = useSettingsRedactor(state=> state.tabSize)
	const swapCursorLabel   	 = useSettingsRedactor(state=> state.swapCursorLabel)
	const cursorLabel         	 = useSettingsRedactor(state=> state.cursorLabel)
   const swapTextCursorLabel   = useSettingsRedactor(state=> state.swapTextCursorLabel)
	const textCursorLabel       = useSettingsRedactor(state=> state.textCursorLabel)
	const toggleDrawer = (open) => (event) => {
    setState(open);
   };

  const list =  (
   <Box className="SettingsSideBar">
		<div className="SettingsSideBar__container">
			<List className="SettingsSideBar__menu Menu">
				<Box className="Menu__logo">
					<img src={settings}/>
				</Box>
				<ListItem className='Menu__item Item' disablePadding>
					<MySlider
						className="Item__slider"
						setValue={setTabSize} 
						value={tabSize}
						title={"Tab size"} 
						max={4} 
						min={1}>
					</MySlider>
      		</ListItem>
      		<ListItem className='Menu__item Item' disablePadding>
					<div className="Item__menu">
						<Menu
						title={'Language'} 
						items={[Languages.java.name, Languages.javaScript.name, Languages.sql.name]} 
						setValue={setLanguage} 
						value={language.name}/>
					</div>
     	 		</ListItem>
				<ListItem className='Menu__item Item' disablePadding>
					<div className="Item__switchMenu switchMenu">
						<div className="switchMenu__item">
							<FormControlLabel 
								className='Item__switch'
								label="User text cursors"
								control={
								<Switch 
									checked={textCursorLabel} 
									onChange={(e)=>{swapTextCursorLabel();}} 
									name="UserTextCursor" />}/>
						</div>
						<div className="switchMenu__item">
							<FormControlLabel 
								className='Item__switch'
								label="User cursors"
          					control={
            				<Switch  
									checked={cursorLabel} 
									onChange={(e)=>{swapCursorLabel();}} 
									name="UserCursor" />}/>
						</div>
					</div>
      		</ListItem>
   		</List>
		</div>
	</Box>
  );

  return (
    <div>
		<IconButton onClick={toggleDrawer(true)} aria-label="delete" sx={{color:"white"}}>
		  	<img width={'30px'}  src={settings}/>
		</IconButton>
      <Drawer
         anchor={'left'}
         open={state}
         onClose={toggleDrawer(false)}>
      	{list}
       </Drawer>
    </div>
  );
}