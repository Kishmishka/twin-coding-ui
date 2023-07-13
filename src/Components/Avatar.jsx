import React from 'react'
import {HandySvg} from 'handy-svg';
import {useAvatar} from '../Hooks/useAvatar'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import styled from '@emotion/styled';

//Компонент отвечающий за отрисовку аватарки пользователя при авторизации
//Задействован в компоненте SideBar.jsx
const BootstrapTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
 ))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
	  color: theme.palette.common.black,
	},
	[`& .${tooltipClasses.tooltip}`]: {
	  backgroundColor: theme.palette.common.black,
	},
 }));

const Avatar = ({color,name}) => {
	return(
		<BootstrapTooltip title={name}>
			<div  style={{
			border:`2px solid ${color}`, 
			maxHeight:'50px',
			maxWidth:'50px',
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			borderRadius:"40px",
			margin:"20px auto",
			overflow:'hidden'
			}}>
		<HandySvg
			src={useAvatar(name)}
			style={{}}
			width="32"
			fill={color}
		/>	
		</div>
	</BootstrapTooltip>
		
)
}
export default Avatar