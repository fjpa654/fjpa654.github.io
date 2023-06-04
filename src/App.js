import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-container">
          <About />
        </div>
        <div className="app-container">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
