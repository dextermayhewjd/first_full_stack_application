import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent.';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       My hello World
       <FirstComponent></FirstComponent>
       <SecondComponent></SecondComponent>
       <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}




export default App
