import React from 'react'
import cursorImg from '../../img/cursor.svg'
import {HandySvg} from 'handy-svg';
import { useSettingsRedactor } from '../../store';
import "./Cursor.scss"
//Компонент отвечающий за отрисовку курсора пользователя
//Задействован в компоненте App.js
const Cursor = ({color, x, y, name}) => {
	const cursorLabel = useSettingsRedactor(state=> state.cursorLabel)
	
	return(
	<div className='Cursor'
		style={{
		display:cursorLabel ? "block":"none",
		left:x-70, 
		top:y-62}}>
			<HandySvg
			src={cursorImg}
			width="32"
			fill={color}
		/>	
			<div className='Cursor__title'>
				{name}
			</div>
		</div>
			
		
)
}
export default Cursor