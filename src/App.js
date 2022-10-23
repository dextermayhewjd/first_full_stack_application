import React, { Component } from 'react';
import FirstCompoment,{SecondCompoment} from './components/learning-examples/FirstComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       My hello World
       <FirstCompoment></FirstCompoment>
       <SecondCompoment></SecondCompoment>
       <ThirdCompoment></ThirdCompoment>
      </div>
    );
  }
}



function ThirdCompoment(){
  return(
    <div className="thirdComponent">
     ThirdCompoment
    </div>
  );
}


export default App;
