import { useEffect } from "react"
import { useRedactor, useSettingsRedactor } from "../store"
import { URLS } from "../Constants/URLS"

function useSendLanguage(socket){
	const language = useSettingsRedactor(state=> state.language)
	const allowСhange = useRedactor(state=>state.allowСhange)
	const setRedactorValue = useRedactor(state=>state.setRedactorValue)
	useEffect(()=>{
		if(allowСhange){
			socket.emit(URLS.languageChange,language.name)
			setRedactorValue(language.startPattern)
		}
	},[language])
}
export{useSendLanguage}