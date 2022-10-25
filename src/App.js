import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent.';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <LearningComponents></LearningComponents> */}
      <Counter by = {1}/>
      {/* could use COounter by = "1" in this case 1 would be string instead of value */}
      <Counter by = {5}/>
      <Counter by = {10}/>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
       My hello World
       <FirstComponent></FirstComponent>
       <SecondComponent></SecondComponent>
       <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}


export default App
