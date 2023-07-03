import create from 'zustand'

export const useSettings = create((set, get) =>({
	language:'',
	redactorValue:'',
	fontSize:20,
	tabSize:3,
	blackTheme: false,
	
	setLanguage:(value)=>{
		set({language: value})
	},
	setRedactorValue:(value)=>{
		set({redactorValue:value})
	},
	setFontSize:(value)=>{
		set({fontSize:value})
	},
	setTabSize:(value)=>{
		set({tabSize:value})
	},
	swapblackTheme:()=>{
		set({blackTheme:!get().blackTheme})
	}
}))

export const useLog = create((set, get)=>({
	id:0,
	name:'',
	room:0,

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