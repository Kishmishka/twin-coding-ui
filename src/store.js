import create from 'zustand'

export const useSettings = create((set, get) =>({
	language:'',
	font:'',
	fontSize:'',
	tabSize:'',
	blackTheme: false,
	setLanguage:(value)=>{
		set({language: value})
	},
	setFont:(value)=>{
		set({font: value})
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