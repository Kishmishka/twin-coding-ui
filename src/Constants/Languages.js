const Languages={
	javaScript:{
		id:63,
		name:'Java script',
		value:'typescript',
		startPattern:`console.log("good luck)")`
	},
	java:{
		id:62,
		name:'Java',
		value:'java',
		startPattern:`class Main {
	public static void main(String[] args) {
		System.out.println("good luck)");
	}
}`
	},
	sql:{
		id:82,
		name:'SQL',
		value:"sql",
		startPattern:`SELECT * FROM TABEL`
	}
}
exports.Languages = Languages