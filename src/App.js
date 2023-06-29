import { height } from '@mui/system';
import './App.css';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
	 	<SideBar></SideBar>
		<CodeEditor></CodeEditor>
    </div>
  );
}

export default App;
