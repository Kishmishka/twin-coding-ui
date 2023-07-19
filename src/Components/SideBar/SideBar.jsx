import React from 'react'
import logo from '../../img/logo.svg'
import Box from '@mui/material/Box';
import SettingsSideBar from '../SettingsSideBar/SettingsSideBar';
import MySwitch from '../MUI/MySwith';
import { useLog, useSettingsRedactor } from '../../store';
import Avatar from '../Avatar/Avatar';
import OutputSideBar from '../OutputSideBar/OutputSideBar';
import './SideBar.scss'

//Компонент отвечающий за отрисовку боковой панели
//Используется в компоненте App.js
const SideBar = ({}) => {
	const blackTheme = useSettingsRedactor(state=> state.blackTheme)
	const swapblackTheme = useSettingsRedactor(state=> state.swapblackTheme)
	const users = useLog(state=>state.users)
	const color = useLog(state=>state.color)
	const name  = useLog(state=>state.name)
	
	return(
		<div className="SideBar">
			<div className="SideBar__content content">
				<img className="content__img" src={logo}/>
				{color!=='' && name!=='' && (<Avatar color={color} name={name} />)}
				{users.map(user=><Avatar color={user.color} name={user.name} />)}
			</div>
			<div className="SideBar__settings">
				<OutputSideBar/>
				<SettingsSideBar/>
				<MySwitch onChange={()=>{swapblackTheme()}} blackTheme={blackTheme}/>
			</div>
		</div>
)
}
export default SideBar