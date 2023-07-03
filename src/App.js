import './App.css';
import CodeEditor from './Components/CodeEditor';
import SideBar from './Components/SideBar';
import io from 'socket.io-client'
import { useEffect } from 'react';
import { useLog, useSettings } from './store';
import { useBeforeunload } from 'react-beforeunload';

const socket = io.connect('http://localhost:3030')



function App() {
	const redactorValue = useSettings(state=>state.redactorValue)
	const setRedactorValue = useSettings(state=>state.setRedactorValue)
	const setId = useLog(state=>state.setId)
	const setName = useLog(state=>state.setName)
	const setRoom = useLog(state=>state.setRoom)
	

	useEffect(()=>{
		socket.emit("join")
		socket.on('log',(data)=>{
			setId(data.id)
			setName(data.name)
			setRoom(data.room)
		})
		socket.on('editRedactor',(editorValue)=>{
			setRedactorValue(editorValue)
		})
	},[])
	
	useEffect(()=>{
			const params = {
				data:redactorValue,
				name:"3",
				room:1
			}
		  socket.emit('redactorValue',params)
	},[redactorValue])

	useBeforeunload(()=>{
		socket.emit("disconnect")
	})

  return (
    <div className="App">
	 	<SideBar></SideBar>
		<CodeEditor></CodeEditor>
    </div>
  );
}

export default App;
