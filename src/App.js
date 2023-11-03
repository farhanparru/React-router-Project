import React from 'react';
import './App1.css';
import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
 <Routes>
  <Route path="/" element={<Register/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="home" element={<Home/>}/>
  
 </Routes>
    </div> 
   
  );
}

export default App;
