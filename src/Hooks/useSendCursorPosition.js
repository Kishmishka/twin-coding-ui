import { useEffect } from "react"
import { useLog, useRedactor } from "../store"
import { URLS } from "../Constants/URLS"

function useSendCursorPosition(socket){
	const id = useLog(state=>state.id)
	const cursorPosition = useRedactor(state=>state.cursorPosition)
	
	useEffect(()=>{
		const cursor = {
			id:id,
			X:cursorPosition.X,
			Y:cursorPosition.Y,
		}
		
		socket.emit(URLS.positionCursorChange,cursor)
	},[cursorPosition])
}
export{useSendCursorPosition}