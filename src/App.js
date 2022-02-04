import React from 'react';
import Header from './Header/Header';
import './App.css';
import Start from './IndexPage.jsx';
import Page1 from './page1/page1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HighScore from './Highscore/Highscore';

function App() {
  return (
    <Router>
    <div className='main'>
    <Header/>
    <Routes>
    <Route exact path = '/' element = { <Start/> } />
    <Route exact path = '/page1' element = { <Page1/> } />
    <Route exact path = 'highscore' element = {<HighScore/>} /> 
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
