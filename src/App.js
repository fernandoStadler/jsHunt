import React, { Component } from "react";
import Routes from './routes'


import './style.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './pages/main/'
import { Route } from "react-router-dom";


const App = () => (

  <div className="App">
     <Header />
     <Routes />
    
      </div>


);


export default App;