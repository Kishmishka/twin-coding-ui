import create from 'zustand'

export const useSettings = create((set, get) =>({
	language:'',
	font:'',
	fontSizeStr:'',
	fontSizeNum:'',
	tabSize:'',
	blackTheme: false,
	setLanguage:(value)=>{
		set({language: value})
	},
	setFont:(value)=>{
		set({font: value})
	},
	setFontSize:(value)=>{
		switch(value){
			case 'Big':
				set({fontSize:34})
				
			break
			case 'Medium':
				set({fontSize:26})
			break
			case 'Small':
				set({fontSize:15})
			break
		}
		set({fontSizeStr:value})
		

	},
	setTabSize:(value)=>{
		set({tabSize:value})
	},
	swapblackTheme:()=>{
		set({blackTheme:!get().blackTheme})
	}
}))