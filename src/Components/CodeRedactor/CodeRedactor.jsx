import React from 'react'
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-sass'
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import {useLog, useRedactor, useSettingsRedactor } from '../../store';
import './CodeRedactor.scss'

//Компонент редактора кода с натройками
//npm react-ace
const CodeEditor = () => {
	const theme                 = useSettingsRedactor(state=> state.blackTheme)
	const fontSize              = useSettingsRedactor(state=> state.fontSize)
	const language              = useSettingsRedactor(state=> state.language)
	const tabSize               = useSettingsRedactor(state=> state.tabSize)
	const redactorValue         = useRedactor(state=> state.redactorValue)
	const setRedactorValue      = useRedactor(state => state.setRedactorValue)
	const setTextCursorPosition = useRedactor(state => state.setTextCursorPosition)
	const markers        	    = useLog(state=>state.markers)
	const textCursorLabel       = useSettingsRedactor(state=> state.textCursorLabel)
	
	return(
		<AceEditor
			style={{position:"relative", zIndex:2}}
		 	mode={language==='javascript'? "typescript": language!=='' ? language: 'java'}
			value={redactorValue}
			placeholder='good luck)'
			theme= {theme ? 'twilight': 'tomorrow'}
			fontSize={fontSize}
			name="UNIQUE_ID_OF_DIV"
			width='100vw'
			height='100vh'
			cursorStart={2}
			showPrintMargin={false}
			focus={true}
			tabSize={tabSize}
			onChange={(value)=>{setRedactorValue(value)}}
			onCursorChange={(e)=>{setTextCursorPosition(e.cursor.column,e.cursor.row)
			console.log(markers)}}
			markers = {textCursorLabel? markers: []}
  		/>
		
)
}
export default CodeEditor