import React,{Component} from "react";
import {  Link, } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class WelcomeComponent extends Component {

    constructor(props){
        super(props)
        
        this.retrieveEwlcomeMessage = this.retrieveEwlcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        
        this.state = {
            welcomeMessage :''
        }
    }

    render() {
        return (
        <>
            <h1>Welcome!</h1>
            <div className="container">
                {/* Welcome {this.props.params.name}. You can manage your todos <a href="/todos">here</a>.  */}
                    Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>. 
            </div>
            <div className="container">
                click here to get a customized welcome message
                You can manage your todos <Link to="/todos">here</Link>
            <button onClick={this.retrieveEwlcomeMessage}
            className="btn btn-success">Get welcome message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
         </>
        )        
    }
        retrieveEwlcomeMessage(){
            // execuate the api that defined in the api in the api/todo folder
            
            // 1 . HelloWorldService.execuateHelloWorldService()
            // .then(response => this.handleSuccessfulResponse(response))
            
            // 2 . in this step the return value is a json so need to change the response
            // HelloWorldService.execuateHelloWorldBeanService()
            // .then(response => this.handleSuccessfulResponse(response))
            
            //3.q. how to get the name  a. in the props.match.params.name
            HelloWorldService.execuateHelloWorldPathVariableService(this.props.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
        }

        handleSuccessfulResponse(response){
            // the response has many information that could be seen in the console
            console.log(response)
            this.setState({welcomeMessage: response.data.message})
            // the response.data is longer usable , you need to use the response.data.message
        }
        handleError(error){
            // the response has many information that could be seen in the console
            
            // only write the line below in console.log will show in the brower's console
            console.log(error.response)

            this.setState({welcomeMessage: error.response.data.message})
            // the response.data is longer usable , you need to use the response.data.message
        }


}
export default WelcomeComponent