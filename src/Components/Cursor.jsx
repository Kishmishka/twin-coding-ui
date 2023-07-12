import React from 'react'
import cursorImg from '../img/cursor.svg'
import {HandySvg} from 'handy-svg';
import { useSettingsRedactor } from '../store';

//Компонент отвечающий за отрисовку курсора пользователя
//Задействован в компоненте App.js
const Cursor = ({color, x, y, name}) => {
	const cursorLabel = useSettingsRedactor(state=> state.cursorLabel)
	
	return(
		<div style={{position:'absolute',
		overflow:'hidden',
		display:cursorLabel ? "block":"none",
		pointerEvents: "none", 
		zIndex:6, 
		left:`${x-70}px`, 
		top: y-62}}>
			<HandySvg
			src={cursorImg}
			width="32"
			fill={color}
		/>	
		<div
		style={{
			backgroundColor:"rgba(0, 0, 0, .4)", 
			borderRadius:'10px', 
			marginTop:"-50px",
			color:"#F0F0F0",
			padding:"2px 10px"}}
		>{name}</div>
		</div>
			
		
)
}
export default Cursor