import { height } from '@mui/system';
import './App.css';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import SideBar from './Components/SideBar';
import io from 'socket.io-client'
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'

const socket = io.connect('http://localhost:3030')
const names = [
	'Бодрая лань',
'Веселый крокодил',
'Безудержная панда',
	 'Бодрая лань',
 'Веселый крокодил',
	 'Безудержная панда',
 'Неуловимая чарепаха',
 'Скрытный слон',
	 'Заинтересованный ёж',
	'Сухопутная рыба',
 'Приземленная чайка',
 'Элегантный утконос',
	 'Реактивный лангустин',
	 'Рентабельная белка',
 'Маржинальная коала',
 'Виртуозная капибара'
]


function App() {
	

	useEffect(()=>{
		const nameRand = names[Math.floor(Math.random() * 12)]
		const params={
			name: nameRand,
			room:1
		}
		
		socket.emit("join",params)
	},[])

	useEffect(()=>{
		  socket.on('message',({data})=>{
		  	console.log(data)
		  })
	},[])
  return (
    <div className="App">
	 	<SideBar></SideBar>
		<CodeEditor></CodeEditor>
    </div>
  );
}

export default App;
