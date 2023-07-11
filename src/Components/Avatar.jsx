import React from 'react'
import {HandySvg} from 'handy-svg';
import {useAvatar} from '../Hooks/useAvatar'

const Avatar = ({color,name}) => {
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
			src={useAvatar(name)}
			style={{}}
			width="32"
			fill={color}
		/>	
		</div>
)
}
export default Avatar