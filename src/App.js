import React from 'react';
import Weather from './weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultyCity="nigeria"/>
    
     <footer>
            <p>
                This project was coded by
                <a href="https://github.com/jessiebobra" rel="noreferrer" target="_blank"> prezi jessica </a> and is
                    <br />
                    <a href="https://github.com/jessiebobra/weather-react" rel="noreferrer" target="_blank"> on GitHub</a> and
                <a href="https://weather-react-8grh.onrender.com"  rel="noreferrer" target="_blank"> hosted on render</a>
            </p>
      </footer>
    </div>
    </div>
  );
}

export default App;
