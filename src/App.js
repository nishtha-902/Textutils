import React,{ useState } from 'react';  //imrs
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/textform';
//import About from './components/about';
function App() {

  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      // showAlert(" Dark mode is enabled, you must decrease your brightness","warning")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      //showAlert(" Light mode is enabled","success")
    }
  }
return (
  <> 
    
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3"> </div>   { /*my-3 means margin in y direction*/ }
      <Textform showAlert={showAlert} heading="TEXT ANALYZER" mode={mode}/>
        
     
    
  </>
);
}

export default App;

