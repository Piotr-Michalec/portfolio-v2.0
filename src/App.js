import React from 'react';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <AboutMe/>
    <Technologies/> 
    <Projects/>
    <Footer/>
    </div>
    
  );
}

export default App;
