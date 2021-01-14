import React, { Component } from 'react';
import Preloader from './components/preloader/preloader';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';

import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Hero/>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
        
      </div>
    );
  }
}

export default App;