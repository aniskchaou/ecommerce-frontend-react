import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/template/navbar';
import Body from './components/template/body';
import Footer from './components/template/footer';

function App() {
  return (
    <div className="App">
      <div id="main_container">
        <NavBar />
        <Body />
        <Footer />
      </div>

    </div>
  );
}

export default App;
