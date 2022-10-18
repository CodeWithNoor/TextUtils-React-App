//  JSX extension to JavaScript.
//  UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
//  HTML covert JSX ---> class becomes className in JSX, and tabindex becomes tabIndex.
//  JSX must be wrapped in enclosing tags ---> JSX fragments <> ..... </>


import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// *****************************************************
function App() {

  const body = document.querySelector("body")

  const [mode, setMode] = useState("select color")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 4000);


const RemoveBodyClasses = () => {
  document.body.classList.remove('bg-info')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')

}

  const toggler = (cls) => {  // class reserved keyword in JavaScript so call cls
    RemoveBodyClasses();
console.log(toggler);
document.body.classList.add('bg-' +cls)
    if (mode === 'light') {
      setMode("dark");
      body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //  document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      // document.title = "Install TextUtils Now"
      // }, 3000);
    }

    else {
      setMode("light");
      body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"
    }
  }

  return (

    // *********************** Navbar --> components of props **********************************
    // props. ---> short form of properties. 
    // props. ---> Read only. 
    // custom components ko ma kuch cheez bhej skti hun or woh use kr skte hain apne under 
    // components take pass a some variables is called a components of props
    // components pass of properties or properties ki madad se component apne app ko render kre ga

    <>

      {/* // *********************** TextForm --> components of state **********************************
// Understanding State & Handling Events in React }
// components ma jhn jhn mera variable ho wo update hota howa dikh jae its a part of component of state*/}
      {/* props parse and things are render but state belongs to components */}


      {/* <Navbar title = 'PROPS' home = 'HOME' service = 'SERVICE'/> 
    <Navbar/>  */}


      <Router>
        <Navbar title='TextUtils' home='Home' about='About' mode={mode} toggler={toggler} />  {/* whether dark mode is enable or not} */}
        <Alert Alert={alert} />

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        {/* why we react router use? -->  1 sided change the component*/}


        {/* {
               path, // like /users/:id; either a single string or an array of strings
               strict, // optional, defaults to false
               exact, // optional, defaults to false
        } */}

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces ...!" mode={mode} />} />
          </Routes>
        </div>
      </Router>

      {/* <TextForm showAlert={showAlert} heading="Enter your text to analyze below...!" mode={mode} />  */}

    </>

  );
}

export default App;
