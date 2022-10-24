import React, { Component } from "react"
import './Counter.css'
class Counter extends Component{
  
  // define the initial state in a constructor 
  //state => counter 0
  
  constructor(){
    super();
   
    this.state = {
      counter : 0,
      secondCounter : 100
    }

    this.increment = this.increment.bind(this)
  }


  render(){
  return(
    <div className="counter">
      {/* <button onclick={someJSMethodCall()}>+1</button> */}
      <button onClick={this.increment}>+1</button>
      <span className="count">{this.state.counter}</span>
      <span className="count">{this.state.secondCounter}</span>

    </div>
    )
  }

 increment(){ // update the state
              // counter ++

  this.setState({
    counter: this.state.counter+1 ,
    secondCounter:  this.state.secondCounter + 1
 });
 }
}
export default Counter