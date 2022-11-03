import React,{Component} from "react";
import {  Link, } from 'react-router-dom'

class WelcomeComponent extends Component {

    constructor(props){
        super(props)
        this.retrieveEwlcomeMessage = this.retrieveEwlcomeMessage.bind(this)
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
            </>
        )        
    }
        retrieveEwlcomeMessage(){
            console.log('retrieve clicked')
        }


}
export default WelcomeComponent