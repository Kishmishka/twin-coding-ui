import { create } from 'zustand'
import { CompilingStatus } from './Constants/CompilingStatus'
import { Languages } from './Constants/Languages'

// Стор состояний созданный с помощью Zushtand
// Zushtand - простой стейтменеджер 

export const useCompiling = create((set, get)=>({
	compilingOutput:'',
	compilingProcess:false,
	showAlertManyRequest:false,

	setShowAlertManyRequest:(value)=>{
		set({showAlertManyRequest:value})
	},
	setCompilingOutput:(responseCompiling)=>{
		set({compilingOutput:get().compilingOutput+'\n'+
		`${responseCompiling.finished_at}`+'\n'
		+`status: ${responseCompiling.status?.description}`
		+(responseCompiling?.memory ? '\n'+`memory consumed: ${responseCompiling?.memory} bytes`: '')
		+(responseCompiling?.time ? '\n'+`time spent: ${responseCompiling?.time} s`: '')+'\n'
		+(responseCompiling.status.id === CompilingStatus.compilationError ? `compilation error: ${atob(responseCompiling?.compile_output)}` :
		responseCompiling.status.id === CompilingStatus.succes ? `rezult: ${atob(responseCompiling.stdout)}` :
		responseCompiling.status.id === CompilingStatus.error ? `error: Time Limit Exceeded`: `error: ${atob(responseCompiling?.stderr)}`)
		
	})
	},
	setCompilingProcess:(value)=>{
		set({compilingProcess:value})
	},
}))

export const useSettingsRedactor = create((set, get) =>({
	language:Languages.java,
	tabSize:3,
	blackTheme: false,
	cursorLabel: false,
	textCursorLabel: false,
	
	setLanguage:(value)=>{
		switch(value){
			case Languages.java.name:
				set({language:Languages.java})
			break;
			case Languages.javaScript.name:
				set({language:Languages.javaScript})
			break;
			case Languages.sql.name:
				set({language:Languages.sql})
			break;
		}
	},
	setTabSize:(value)=>{
		set({tabSize:value})
	},
	swapblackTheme:()=>{
		set({blackTheme:!get().blackTheme})
	},
	setCursorLabel:(value)=>{
		set({cursorLabel:value})
	},
	swapCursorLabel:()=>{
		set({cursorLabel:!get().cursorLabel})
	},
	swapTextCursorLabel:()=>{
		set({textCursorLabel:!get().textCursorLabel})
	}
}))

export const useLog = create((set, get)=>({
	id:'',
	name:'',
	room:0,
	color:'',
	users:[],
	markers:[],

	setMarkers(value){
		const markers = value.filter(marker=>marker.id!==get().id)
		set({markers:markers})
	},
	setUsers(value){
		const users = value.filter(user=>user.id!==get().id)
		set({users:users})
	},
	setId:(value)=>{
		set({id:value})
	},
	setName:(value)=>{
		set({name:value})
	},
	setRoom:(value)=>{
		set({room:value})
	},
	setColor:(value)=>{
		set({color:value})
	},
}))

export const useRedactor = create((set, get) =>({
	allowСhange:false,
	redactorValue:'',
	textCursorPosition:{
		column:0,
		row:0
	},
	cursorPosition:{
		X:0,
		Y:0
	},

	setStartRedactorValue:(value)=>{
		set({redactorValue:value})
		set({allowСhange:true})
	},
	setRedactorValue:(value)=>{
			set({redactorValue:value})
	},
	setCursorPosition(x,y){
		set({cursorPosition:{X:x,Y:y}})
	},
	setTextCursorPosition(x,y){
		set({textCursorPosition:{column:x,row:y}})
	},

}))

