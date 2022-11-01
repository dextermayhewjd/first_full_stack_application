import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent.';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import CounterButton from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
        {/* <Counter/> */}
      {/* <LearningComponents></LearningComponents>
      <Counter />
      could use COounter by = "1" in this case 1 would be string instead of value
      only using this {}way could assign a integer value to it
      <Counter by = {5}/>
      <Counter by = {10}/> */}
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
