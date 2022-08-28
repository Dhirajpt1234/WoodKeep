//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  // const switchmode2 = () => {
  //   if (mode2 === "light") {
  //     setMode2('green');
  //     document.body.style.backgroundColor = "green";
  //     showAlert("green mode enabled!", "success")
  //     console.log(mode2);

  //   }
  //   else {
  //     setMode2("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("light mode enabled!", "success");
  //     console.log(mode2);

  //   }
  // }

  const switchmode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#6082B6'
      showAlert("dark mode enabled!", "info")
      document.title = 'home page - Dark Mode ';


    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("light mode enabled!", "info")
      document.title = 'home page - Light Mode ';
    }
  }


  return (<>
    <Navbar title="WoodKeeep" subTitle="contact us " mode={mode} sub='here we go!' switchmode={switchmode} />
    {/* // <Navbar title="Dhiraj " subTitle="Suraj" sub="about us" /> */}
    <Alert alert={alert} />
    <TextForm mode={mode} showAlert={showAlert} title='Enter the text here!' />

    {/* <About /> */}

  </>
  );
}

export default App;
