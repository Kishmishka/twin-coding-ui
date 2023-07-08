import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
	// components:{
	// 	MuiSelect:{
	// 		styleOverrides: {
				
	// 			// Name of the slot
	// 			root: {
	// 			 appearance: "none",
	// 			 borderColor:"#DC0000",
				 
	// 			},
	// 		 },
	// 	  },
	// 	},
	palette:{
		primary:{
			main:'#F0F0F0',
			contrastText: '#fff',
		}
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<ThemeProvider theme={theme}>
    	<App />
	</ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
