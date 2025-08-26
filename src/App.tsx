import { useState } from 'react';
import './App.css';
// import About from './components/About.tsx';
import Navbar from './components/Navbar.tsx';
import TextForm from './components/TextForm.tsx';
import Alert from './components/Alert.tsx';
// import Contact from './components/Contact.tsx';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

type AlertType = {
  msg: string;
  type: string;
} | null;


function App() {
  
      const [mode, setMode] = useState<'light' | 'dark'>('light');
      const [alert, setAlert] = useState<AlertType>(null);
      const showAlert = (message:string, type:string) => {
        setAlert({
          msg:message,
         type:type,
        })
        setTimeout(() => {
           setAlert(null)
        }, 2000);
      };
      const toggleMode = () =>{
        if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = "#222222";
          showAlert("Dark mode has been enabled", "success")
          document.title = 'TextUtils - Dark Mode'
        } else {
          setMode('light');
          document.body.style.backgroundColor = "white";
          showAlert("Light mode has been enabled", "success")
          document.title = 'TextUtils - Light Mode'
        }
      }
      
  return (
    <>
      {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleMode= {toggleMode}/> 
      <Alert alert={alert}/> 
      <div className="container my-3">

 {/* <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={  */}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
          {/* }
          />
          </Routes> */}
   </div>
{/* </Router> */}
      </>
  );
}

export default App;
