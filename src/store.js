import create from 'zustand'

export const useSettings = create((set, get) =>({
	language:'',
	fontSize:20,
	tabSize:3,
	blackTheme: false,
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
	}
}))