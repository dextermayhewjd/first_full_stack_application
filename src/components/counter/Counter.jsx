import React, { Component } from "react"
import './Counter.css'
import propTypes from 'prop-types'


class Counter extends Component{
 
  constructor(){
    super();
   
    //when it is for a one-button-one-counter 
    this.state = {
      counter : 0,
      // secondCounter : 100
    }

    this.increment = this.increment.bind(this)
  }

  increment(by){ 
    // console.log(`increment from parent - ${by}`)

    this.setState(
      (prevState) => {
        // define a arrow function to return counter back
        return {counter: prevState.counter + by} 
      }
      )

}
 
 
  render() {
    return (
      <div className="counter">
      {/* <LearningComponents></LearningComponents> */}
      <CounterButton by ={1} incrementMethod={this.increment}/>
      {/* could use COounter by = "1" in this case 1 would be string instead of value */}
      {/* only using this {}way could assign a integer value to it */}
      <CounterButton by ={5} incrementMethod={this.increment}/>
      <CounterButton by ={10} incrementMethod={this.increment}/>
      <span className="count">{this.state.counter}</span>
      </div>
    );
  }
}

class CounterButton extends Component{
  
  // define the initial state in a constructor 
  //state => counter 0
  
  constructor(){
    super();
   
    //when it is for a one-button-one-counter 
    this.state = {
      counter : 0,
      // secondCounter : 100
    }

    this.increment = this.increment.bind(this)
  }


  render(){
    // let style = {fontSize:"50px",padding: "15px 30px"}
    // let make style a block scope variable
    // could be used in this way but I would better use in in css file
    // const style = {fontSize:"50px",padding: "15px 30px"}
  return(
    <div className="counter">
      {/* <button onclick={someJSMethodCall()}>+1</button> */}
      <button onClick={this.increment}>+{this.props.by}</button>
      {/* <span className="count" */}
      {/* //define inline javascript css in jsx */}
      {/* // style={style} */}
      {/* > */}
        {/* {this.state.counter}</span> */}
      {/* <span className="count">{this.state.secondCounter}</span> */}

    </div>
    )
  }

 increment(){ // update the state
              // counter ++

  this.setState({
    counter: this.state.counter + this.props.by ,
    // secondCounter:  this.state.secondCounter + 1
 });
  this.props.incrementMethod(this.props.by);
 }

}

CounterButton.defaultProps = {
  by : 1
  // could assign default properies in this way
}

CounterButton.propTypes = {
  by : propTypes.number
  // could do the prop type check for you
  // but it would only give warning but can still work in the original way
}

export default Counter