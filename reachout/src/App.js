import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/Home/Home";
import Expertlog from "./components/Login/Expertlog";
import Expertsign from "./components/Signup/Expertsign";

import {auth} from "./firebase";

import './App.css';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user)=> {
      if(user){
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Expertlog />} />
          <Route path="/signup" element={<Expertsign />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
