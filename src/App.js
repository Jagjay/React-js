import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }  

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#160841'
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }

    const toggleModeGreen=()=>{
      if(mode === 'light'){
        setMode('green')
        document.body.style.backgroundColor='#198754'
        showAlert("Green Dark mode is enabled", "success")
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode is enabled", "success")
      }
    
  }
  return (
    <>
     {/* <Navbar title = "TextUtils" aboutText = "About Utils"/ > */}
     {/*<Navbar/>*/}
     {/* <Router> */}
     <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen}/>
     <Alert alert={alert}/>
     <div className="container my-3">

     {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading = 'Enter the text to analyse' mode={mode}/>
          {/* </Route> */}
      {/* </Switch> */}

     
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
