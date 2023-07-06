import React from 'react'
import cursorImg from '../img/cursor.svg'
import {HandySvg} from 'handy-svg';
import { dividerClasses } from '@mui/material';
import { padding } from '@mui/system';
import { useSettingsRedactor } from '../store';
const Cursor = ({color, x, y,name}) => {
	const cursorLabel = useSettingsRedactor(state=> state.cursorLabel)
	
	return(
		<div style={{position:'absolute',
		pointerEvents: "none", 
		zIndex:6, 
		left: x-38, 
		top: y-62}}>
			<HandySvg
			src={cursorImg}
			width="32"
			fill={color}
		/>	
		<div
		style={{
			display:cursorLabel ? "block":"none",
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