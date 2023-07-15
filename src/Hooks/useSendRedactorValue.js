import { useEffect } from "react"
import { useLog, useRedactor } from "../store"
import { URLS } from "../Constants/URLS"

function useSendRedactorValue(socket){
	const redactorValue = useRedactor(state=>state.redactorValue)
	const allowСhange = useRedactor(state=>state.allowСhange)
	const name = useLog(state=>state.name)
	const room = useLog(state=>state.room)
	
	useEffect(()=>{
		const params = {
			data:redactorValue,
			name:name,
			room:room
		}
		
		if(allowСhange){
			socket.emit(URLS.clientValueСhanged,params)
		}
},[redactorValue])
}
export{useSendRedactorValue}