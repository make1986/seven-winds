import React, { Component } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import Slider from './Components/Slider';
import Content from './Components/Content';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Slider />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
