import { create } from 'zustand'
import { CompilingStatus } from './Constants/CompilingStatus'
import { Languages } from './Constants/Languages'

//Стор со значениями компиляции
//Используется в компоненте OutputSideBar.jsx
export const useCompiling = create((set, get)=>({
	//Ответ компилятора
	compilingOutput:'',
	//Флаг стостояния процесса 
	compilingProcess:false,
	
	setCompilingOutputManyReques:()=>{
		set({compilingOutput:get().compilingOutput+'\n'+
		'Quota of 50 requests exceeded for the Day!'
	})
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

//Стор со значениями настроек текстового редактора
//Используется в компонентах:
//CodeRedactor.jsx, Cursor.jsx, OutputSideBar.jsx, SettingsSideBar.jsx, SideBar.jsx
//Используется в хуках:
//useGetServerValue.js useSendLanguage.js 
export const useSettingsRedactor = create((set, get) =>({
	language:Languages.java,
	tabSize:3,
	//Флаг выбора темы
	blackTheme: false,
	//Флаг отображения курсоров пользователя
	cursorLabel: false,
	//Флаг отображения текстовых курсоров пользователя
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

// Стор со значениями пользователей
//Используется в компонентах:
//CodeRedactor.jsx, SideBar.jsx
//Используется в хуках:
//useGetServerValue.js, useSendCursorposition.js, 
//useSendReadctorValue.js, useSendTextCursorPosition.js
export const useLog = create((set, get)=>({
	id:'',
	name:'',
	room:0,
	color:'',
	users:[],
	//Массив со значениями текстовых курсоров пользоваиелей
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

//Стор со значениями котрые отображаются в текстовом редакторе
//Используется в компонентах:
//CodeRedactor.jsx, OutputSideBar.jsx,  SideBar.jsx
//Используется в хуках:
//useGetServerValue.js, useSendCursorposition.js,  useSendLanguage.js
//useSendReadctorValue.js, useSendTextCursorPosition.js
export const useRedactor = create((set, get) =>({
	//Флаг разрещающий изменения состояния текста
	allowСhange:false,
	//Значение текстового редактора
	redactorValue:Languages.java.startPattern,
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

