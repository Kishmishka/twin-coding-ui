import { Alert, Snackbar } from '@mui/material';
import React from 'react'
import { useCompiling } from '../store';


const MyAlert = ({showAlert}) => {
	const setShowAlertManyRequest = useCompiling(state=>state.setShowAlertManyRequest)
	const handleClose = (event, reason) => {
	  if (reason === 'clickaway') {
		 return;
	  }
 
	  setShowAlertManyRequest(false);
	};
 
	return (
		 <Snackbar anchorOrigin={{horizontal:"right" , vertical:'top'}} open={showAlert} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose}  severity="error"  sx={{ width: '100%'}}>
				Quota of 100 requests exceeded for the Day!
			</Alert>
		 </Snackbar>
	);
}
export default MyAlert