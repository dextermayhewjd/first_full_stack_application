import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       My hello World
       <FirstCompoment></FirstCompoment>
      </div>
    );
  }
}

class FirstCompoment extends Component {
  render() {
    return (
      <div className="firstComponent">
       FirstCompoment
      </div>
    );
  }
}

export default App;
