import { useEffect } from "react";
import { useLog, useRedactor, useSettingsRedactor } from "../store";
import { URLS } from "../Constants/URLS";

function useGetServerValue(socket){
	const setId = useLog(state=>state.setId)
	const setName = useLog(state=>state.setName)
	const setRoom = useLog(state=>state.setRoom)
	const setColor = useLog(state=>state.setColor)
	const setUsers = useLog(state=>state.setUsers)
	const setMarkers = useLog(state=>state.setMarkers)
	const setRedactorValue = useRedactor(state=>state.setRedactorValue)
	const setStartRedactorValue = useRedactor(state=>state.setStartRedactorValue)
	const setLanguage = useSettingsRedactor(state=> state.setLanguage)
	
	

	useEffect(()=>{
		socket.emit(URLS.join)
		socket.on(URLS.auth,(data)=>{
			setId(data.id);
			setName(data.name);
			setRoom(data.room);
			setColor(data.color);
			setLanguage(data.language)
			setStartRedactorValue(data.editorValue);
		})
		
		socket.on(URLS.serverValue,(editorValue)=>{
			setRedactorValue(editorValue)
		})

		socket.on(URLS.serverCursors,(userss)=>{
			setUsers(userss)
		})

		socket.on(URLS.serverTextCursors,(textCursorss)=>{
			setMarkers(textCursorss)
		})

		socket.on(URLS.clientDisconnect,(params)=>{
			setUsers(params.users)
			setMarkers(params.textCursors)
		})	

		socket.on(URLS.serverLanguage,(languageValue)=>{
			setLanguage(languageValue)
		})	
		
	},[])
}
export{useGetServerValue}