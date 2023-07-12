import { useEffect } from "react"
import { useRedactor, useSettingsRedactor } from "../store"
import { URLS } from "../URLS"

function useSendLanguage(socket){
	const language = useSettingsRedactor(state=> state.language)
	const allowСhange = useRedactor(state=>state.allowСhange)
	
	useEffect(()=>{
		if(allowСhange){
			socket.emit(URLS .languageChange,language)
		}
	},[language])
}
export{useSendLanguage}