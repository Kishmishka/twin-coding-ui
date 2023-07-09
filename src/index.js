import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
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

reportWebVitals();
