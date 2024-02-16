import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

let courseName = "Python"
function App() {
  const [mode, setMode] = useState(`light`)
  const [alert, setAlert] = useState(null)
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`)
      document.body.style.backgroundColor = `gray`
      showAlert(`Dark mode enabled`, `success`)
      document.title = `TextUtils-Dark`
    } else {

      setMode(`light`)
      document.body.style.backgroundColor = `white`
      showAlert(`Light mode enabled`, `success`)
      document.title = `TextUtils-Light`
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>

        {/* <Navbar title="" Action1="" Action2="" Action3="" /> */}
        {/* <Navbar /> */}
      <Router>
        <Navbar title="Honeywell" dropdownMenu="Theme" Action1="Dark" Action2="Light" Action3="Yellow" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
