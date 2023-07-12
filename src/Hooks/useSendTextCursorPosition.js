import { useEffect } from "react"
import { useLog, useRedactor } from "../store"
import { URLS } from "../URLS"


function useSendTextCursorPosition(socket){
	const id = useLog(state=>state.id)
	const textCursorPosition = useRedactor(state=>state.textCursorPosition)

	useEffect(()=>{
		const textCursor = {
			id:id,
			column:textCursorPosition.column,
			row:textCursorPosition.row,
		}
		
		socket.emit(URLS.positionTextCursorChange,textCursor)
	},[textCursorPosition])
}
export{useSendTextCursorPosition}