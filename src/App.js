import './App.css';
import CodeEditor from './Components/CodeRedactor/CodeRedactor';
import SideBar from './Components/SideBar';
import io from 'socket.io-client'
import { useEffect} from 'react';
import { useLog, useRedactor} from './store';
import { useBeforeunload } from 'react-beforeunload';
import { URLS } from './URLS';
import Cursor from './Components/Cursor';

const socket = io.connect(URLS.httpServer)	
function App() {
	const redactorValue 	   = useRedactor(state=>state.redactorValue)
	const setRedactorValue  = useRedactor(state=>state.setRedactorValue)
	const cursorPosition    = useRedactor(state=>state.cursorPosition)
	const setCursorPosition = useRedactor(state=>state.setCursorPosition)
	const setId 			   = useLog(state=>state.setId)
	const setName 			   = useLog(state=>state.setName)
	const setRoom 			   = useLog(state=>state.setRoom)
	const id 				   = useLog(state=>state.id)
	const name 				   = useLog(state=>state.name)
	const room 				   = useLog(state=>state.room)
	const users 			   = useLog(state=>state.users)
	const setUsers        	= useLog(state=>state.setUsers)
	

	useEffect(()=>{
		socket.emit(URLS.join)
		socket.on(URLS.auth,(data)=>{
			setId(data.id)
			setName(data.name)
			setRoom(data.room)
			setRedactorValue(data.editorValue)
		})
		socket.on(URLS.serverValue,(editorValue)=>{
			setRedactorValue(editorValue)
		})
		
		socket.on(URLS.serverCursors,(userss)=>{
				setUsers(userss)
			})
		socket.on(URLS.clientDisconnect,(userss)=>{
			setUsers(userss)
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
		{users.map(user=><Cursor 
		color={user.color} 
		x={user.cursorX} 
		y={user.cursorY}
		name={user.name}
		/>)}
		
		{/* <Cursor 
		color={'#31B2A5'} 
		x={cursorPosition.X} 
		y={cursorPosition.Y}/> */}
    </div>
  );
}

export default App;
