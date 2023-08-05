import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
//import About from './components/About';
import Textform from './components/Textform';

function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is Enabled","success");
     // document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled","success");
     // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        
        <Textform showAlert={showAlert} heading="Enter your text to Analyze Below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
