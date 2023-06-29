import React from 'react'
import './CodeEditor.scss'
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-sass'
import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import { useSettings } from '../../store';
const CodeEditor = () => {
	const theme = useSettings(state=> state.blackTheme)
	const fontSize = useSettings(state=> state.fontSize)
	const language = useSettings(state=> state.language)
	const tabSize = useSettings(state=> state.tabSize)
	return(
		
		<AceEditor
			placeholder='good luck)'
   		// mode=
			mode={language!=='' ? language: 'javascript'}
			theme= {theme ? 'twilight': 'tomorrow'}
			fontSize={fontSize}
			name="Editor"
			width='100vw'
			height='100vh'
			showPrintMargin={false}
			focus={true}
			tabSize={tabSize}

  		/>
		
)
}
export default CodeEditor