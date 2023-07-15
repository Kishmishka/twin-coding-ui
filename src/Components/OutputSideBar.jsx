import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { CircularProgress, IconButton} from '@mui/material';
import compile from '../img/compile.svg';
import close from '../img/close.svg';
import { useCompiling, useRedactor, useSettingsRedactor } from '../store';
import axios from "axios";
import { CompilingStatus } from '../Constants/CompilingStatus';

//Выпадающий вывод компиляции кода
//Задействован в компоненте SideBar.jsx
//Создан при помощи material-ui
export default function OutputSideBar() {
	
	const [openSide, setOpenSide] = React.useState(false);
	const language = useSettingsRedactor(state=> state.language)
	const redactorValue = useRedactor(state=>state.redactorValue)
	const compilingOutput = useCompiling(state=>state.compilingOutput)
	const compilingProcess = useCompiling(state=>state.compilingProcess)
	const setCompilingOutput = useCompiling(state=>state.setCompilingOutput)
	const setCompilingProcess = useCompiling(state=>state.setCompilingProcess)
	const setCompilingOutputManyReques = useCompiling(state=>state.setCompilingOutputManyReques)
	const toggleDrawer = (value) => (event) => {
		value && handleCompile();
		setOpenSide(value);
    };

	
	
	const handleCompile = () => {
	setCompilingProcess(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(redactorValue),
      stdin: btoa(""),
    };

    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { 
			base64_encoded: "true", 
			fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios.request(options).then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkCompilingRezult(token);
      }).catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === CompilingStatus.manyRequest) {
			setCompilingOutputManyReques()
        }
        setCompilingProcess(false);
        console.log("catch block...", error);
      });
	}

  const checkCompilingRezult = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
			checkCompilingRezult(token);
        }, 2000);
        return;
      } else {
			setCompilingProcess(false);
			setCompilingOutput(response.data)
      //   setOutputDetails(response.data);
      //   showSuccessToast(`Compiled Successfully!`);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setCompilingProcess(false);
      // showErrorToast();
    }
  };
  
  return (
    <div> 
		  	<IconButton onClick={toggleDrawer(true)} aria-label="delete">
				<img width={'25px'}  src={compile}/>
			</IconButton>
			<Drawer
			 	sx={{ml:'30px', position:'relative', zIndex:3}}
				PaperProps={{sx:{ml: "94px" },}}
            anchor={'bottom'}
            open={openSide}
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
					
					<span style={{color:'white', 
									  padding:"10px 20px", 
									  fontSize:'20px'}}
					> {compilingProcess ? <CircularProgress size={23} color="inherit" />
					: "Cpompiling: complite"} </span>
					
					<IconButton  onClick={toggleDrawer(false)} aria-label="delete" sx={{p:"5px 5px"}}>
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
				 		value={compilingOutput} readonly="readonly" className='text'/>
			 	</Box>
         </Drawer>
    </div>
  );
};
