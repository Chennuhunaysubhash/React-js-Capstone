/* eslint-disable no-unused-vars */


// src/App.js
import React from 'react';
import './App.css';
import SkillProfile from './component/SkillProfile';
import UserProfile from './component/UserProfile';
function App() {
  
  return (
    <div className="App">
            <UserProfile className="element"/>
            <SkillProfile className="element" />
        </div>
  )
}

export default App
