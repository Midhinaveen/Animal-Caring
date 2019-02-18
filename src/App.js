import React, { Component } from 'react';
import './App.css';
import Header from '../src/home/header';
import Home from '../src/home/home';
import Home2 from '../src/home/home2';
import Home3 from '../src/home/home3';
import Home0 from '../src/home/home0';


class App extends Component {
  render() {
    return (
      <React.Fragment>
           <Header />
           <Home0 />
           <Home />
           <Home2 />
           <Home3 />
           
      </React.Fragment>
    );
  }
}
export default App;
