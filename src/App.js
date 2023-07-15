import './App.css';
import CodeEditor from './Components/CodeRedactor/CodeRedactor';
import SideBar from './Components/SideBar';
import io from 'socket.io-client'
import Cursor from './Components/Cursor';
import { useSendLanguage } from './Hooks/useSendLanguage';
import { useSendTextCursorPosition } from './Hooks/useSendTextCursorPosition';
import { useSendCursorPosition } from './Hooks/useSendCursorPosition';
import { useSendRedactorValue } from './Hooks/useSendRedactorValue';
import { useGetServerValue } from './Hooks/useGetServerValue';
import { useCompiling, useLog, useRedactor} from './store';
import { useBeforeunload } from 'react-beforeunload';
import { URLS } from './Constants/URLS';
import MyAlert from './Components/MyAlert';

// Главный компонент приложения который 
// Содержит сайдбар, редактор кода и логику работы с сервером
const socket = io.connect(URLS.httpServer)
	
function App() {
	const showAlertManyRequest = useCompiling(state=>state.showAlertManyRequest)
	const name = useLog(state=>state.name)
	const users = useLog(state=>state.users)
	const setCursorPosition = useRedactor(state=>state.setCursorPosition)

	useGetServerValue(socket)

	useSendRedactorValue(socket)
	useSendCursorPosition(socket)
	useSendTextCursorPosition(socket)
	useSendLanguage(socket)

	useBeforeunload(()=>{
		socket.emit(URLS.disconnect,name)
	})

  return (
    <div 
	 className="App"
	 onMouseMove={(e)=>{setCursorPosition(e.pageX,e.pageY)}}>
	 	<SideBar />
		<CodeEditor/>
		<MyAlert showAlert={showAlertManyRequest}/>
		{users.map(user=><Cursor
		key={user.id} 
		color={user.color} 
		x={user.cursorX} 
		y={user.cursorY}
		name={user.name}
		/>)}
    </div>
  );
}

export default App;
