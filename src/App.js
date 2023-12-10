import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'light';
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" aboutText = "AboutApp" mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">
        <TextForm heading = "Enter the text to analyze"/>
      {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
