import { useEffect } from "react"
import { useRedactor, useSettingsRedactor } from "../store"
import { URLS } from "../Constants/URLS"

function useSendLanguage(socket){
	const language = useSettingsRedactor(state=> state.language)
	const allowСhange = useRedactor(state=>state.allowСhange)
	
	useEffect(()=>{
		if(allowСhange){
			console.log(language)
			socket.emit(URLS.languageChange,language.name)
		}
	},[language])
}
export{useSendLanguage}