import React from 'react'
import {HandySvg} from 'handy-svg';

import penguin from '../img/Avatars/penguin.svg'
import frog from '../img/Avatars/frog.svg'
import anteater from '../img/Avatars/anteater.svg'
import crocodile from '../img/Avatars/crocodile.svg'
import chameleon from '../img/Avatars/chameleon.svg'
import owl from '../img/Avatars/owl.svg'
import tortoise from '../img/Avatars/tortoise.svg'
import elephant from '../img/Avatars/elephant.svg'
import shark from '../img/Avatars/shark.svg'
import fish from '../img/Avatars/fish.svg'
import toucan from '../img/Avatars/toucan.svg'
import cobra from '../img/Avatars/cobra.svg'
import stingray from '../img/Avatars/stingray.svg'
import squirrel from '../img/Avatars/squirrel.svg'
import duck from '../img/Avatars/duck.svg'
import sheep from '../img/Avatars/sheep.svg'

const Avatar = ({color,name}) => {

	function getAvatar(name){
		switch(name){
			case 'Загорелый пингвин':
				return penguin;
			case 'Равнодушная лягушка':
				return frog;
			case 'Безудержный муравьед':
				return anteater;
			case 'Суетной крокодил':
					return crocodile;
			case 'Мутный хамелеон':
				return chameleon;
			case 'Внушительный филин':
				return owl;
			case 'Неуловимая чарепаха':
				return tortoise;
			case 'Скрытный слон':
				return elephant;
			case 'Заинтересованная акула':
					return shark;
			case 'Сухопутная рыба':
				return fish;
			case 'Приземленный тукан':
				return toucan;
			case 'Прямолинейная кобра':
				return cobra;
			case 'Скатившийся скат':
				return stingray;
			case 'Рентабельная белка':
				return squirrel;
			case 'Относительная утка':
					return duck;
			case 'Виртуозный барашек':
				return sheep;
		}
	}

	return(
		<div title={name} style={{
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
			src={getAvatar(name)}
			style={{}}
			width="32"
			fill={color}
		/>	
		</div>
)
}
export default Avatar