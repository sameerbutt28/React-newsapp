import './App.css';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
       <div>
      <Main>
        <Navbar/>
      <Routes>
<Route exact path='/news' element={<News/>}/>
<Route exact path='/about' element={<About/>}/>




      </Routes>
      </Main>
     </div>
    )
  }
}

