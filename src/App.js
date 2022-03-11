//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Test from './components/test';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Test/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
