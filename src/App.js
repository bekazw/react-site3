import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import Titles from "./components/Titles/Titles";
import LatestsWorks from "./components/LatestWorks/LatestsWorks";
import Footer from "./components/Footer/Footer";
import Copyrights from "./components/Copyrights/Copyrights";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeaderSlider />
        <Titles />
        <LatestsWorks />
        <Footer />
        <Copyrights />
      </div>
    );
  }
}

export default App;
