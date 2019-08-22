import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner.js'
import Content from './components/content.js'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Content/>
    </div>
  );
}

export default App;
