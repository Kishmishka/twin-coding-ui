import './App.css';
import CodeEditor from './Components/CodeEditor';
import SideBar from './Components/SideBar';
import io from 'socket.io-client'
import { useEffect, useRef, useState } from 'react';
import { useLog, useRedactor, useSettingsRedactor } from './store';
import { useBeforeunload } from 'react-beforeunload';
import { URLS } from './URLS';
import Cursor from './Components/Cursor';
const  process = require('process')

const socket = io.connect(URLS.httpServer)	
function App() {
	const redactorValue = useRedactor(state=>state.redactorValue)
	const setRedactorValue = useRedactor(state=>state.setRedactorValue)
	const setId = useLog(state=>state.setId)
	const setName = useLog(state=>state.setName)
	const setRoom = useLog(state=>state.setRoom)
	const id = useLog(state=>state.id)
	const name = useLog(state=>state.name)
	const room = useLog(state=>state.room)
	const cursors = useLog(state=>state.cursors)
	const setCursors = useLog(state=>state.setCursors)
	const cursorPosition = useRedactor(state=>state.cursorPosition)
	const setCursorPosition = useRedactor(state=>state.setCursorPosition)


	useEffect(()=>{
		socket.emit(URLS.join)
		socket.on(URLS.auth,(data)=>{
			setId(data.id)
			setName(data.name)
			setRoom(data.room)
		})
		socket.on(URLS.serverValue,(editorValue)=>{
			setRedactorValue(editorValue)
		})
		socket.on(URLS.serverCursors,(cursorsss)=>{
			setCursors(cursorsss)
		})
	},[])
	
	useEffect(()=>{
			const params = {
				data:redactorValue,
				name:name,
				room:room
			}
		  	socket.emit(URLS.clientValueСhanged,params)
	},[redactorValue])
	
	useEffect(()=>{
		const cursor = {
			id:id,
			X:cursorPosition.X,
			Y:cursorPosition.Y,
		}
		  socket.emit(URLS.positionCursorChange,cursor)
	},[cursorPosition])

	
	useBeforeunload(()=>{
		socket.emit(URLS.disconnect,name)
	})

  return (
    <div 
	 className="App"
	 onMouseMove={(e)=>{setCursorPosition(e.pageX,e.pageY)}}>
	 	<SideBar />
		<CodeEditor/>
		{cursors.map(cursor=><Cursor 
		color={cursor.color} 
		x={cursor.X} 
		y={cursor.Y}
		name={cursor.name}
		/>)}
		
		{/* <Cursor 
		color={'#31B2A5'} 
		x={cursorPosition.X} 
		y={cursorPosition.Y}/> */}
    </div>
  );
}

export default App;
