import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton, TextField} from '@mui/material';
import compile from '../img/compile.svg';
import close from '../img/close.svg';
import { useRedactor } from '../store';

//Выпадающий вывод компиляции кода
//Задействован в компоненте SideBar.jsx
//Создан при помощи material-ui

export default function OutputSideBar() {
	const [state, setState] = React.useState(false);
	const redactorValue = useRedactor(state=>state.redactorValue)
	const toggleDrawer = (open) => (event) => {
    setState(open);
   };

  

  return (
    <div > 
		  	<IconButton onClick={toggleDrawer(true)} aria-label="delete">
				<img width={'25px'}  src={compile}/>
			</IconButton>
			<Drawer
			 	sx={{ml:'30px', position:'relative', zIndex:3}}
				PaperProps={{sx:{ml: "94px" },}}
            anchor={'bottom'}
            open={state}
            onClose={toggleDrawer(false)}
          >
				<Box
				sx={{
					backgroundColor:"#151515", 
					display:'flex',
					justifyContent:'space-between',
					position:'sticky', 
					top:0
					}}>
					<span
					style={{
						color:'white', 
						padding:"10px 20px", 
						fontSize:'20px'}}
					>Output:
					</span>
					<IconButton onClick={toggleDrawer(false)} aria-label="delete" sx={{p:"5px 5px"}}>
						<img width={'27px'}  src={close}/>
					</IconButton>
				</Box>
			 		<Box
	 				sx={{
						backgroundColor:"#232323", 
						height:"230px", 
						overflow:'hidden'}}>
						<textarea 
						style={{
							width: "100%",
							height: "229px",
							paddingLeft: "20px",
							paddingTop: "5px",
							fontSize: "20px",
							backgroundColor:"#232323",
							color:'#FFFFFF'}}
				 		value={redactorValue} readonly="readonly" className='text'/>
			 		</Box>
         </Drawer>
    </div>
  );
}
