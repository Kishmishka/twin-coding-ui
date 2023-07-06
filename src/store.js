import create from 'zustand'

export const useSettingsRedactor = create((set, get) =>({
	language:'',
	fontSize:20,
	tabSize:3,
	blackTheme: false,
	cursorLabel: false,
	
	setLanguage:(value)=>{
		set({language: value})
	},
	setFontSize:(value)=>{
		set({fontSize:value})
	},
	setTabSize:(value)=>{
		set({tabSize:value})
	},
	swapblackTheme:()=>{
		set({blackTheme:!get().blackTheme})
	},
	swapCursorLabel:()=>{
		set({cursorLabel:!get().cursorLabel})
	}
}))

export const useLog = create((set, get)=>({
	id:0,
	name:'',
	room:0,
	cursors:[],

	setCursors(value){
		const cursors = value.filter(cursor=>cursor.id!=get().id)
		set({cursors:cursors})
	},
	setId:(value)=>{
		set({id:value})
	},
	setName:(value)=>{
		set({name:value})
	},
	setRoom:(value)=>{
		set({room:value})
	}
}))

export const useRedactor = create((set, get) =>({
	redactorValue:'',
	cursorPosition:{
		X:0,
		Y:0
	},

	setCursorPosition(x,y){
		set({cursorPosition:{X:x,Y:y}})
	},
	setRedactorValue:(value)=>{
		set({redactorValue:value})
	},
	setCarriagePosition(x,y){
		set({column:x})
		set({row:y})
	},

}))

