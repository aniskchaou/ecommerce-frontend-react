import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/template/navbar';
import Body from './components/template/body';
import Footer from './components/template/footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShowProduct from './components/products/showProduct';

function App() {
  return (

    <div className="App">
      <div id="main_container">
        <NavBar />
        <Route path="/" exact={true} component={Body} />
        <Route path="/products/:id" exact={true} component={ShowProduct} />
        <Footer />
      </div>
    </div>

  );
}

export default App;
