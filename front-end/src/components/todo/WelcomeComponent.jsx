import React,{Component} from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
class WelcomeComponent extends Component {
    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
                {/* Welcome {this.props.params.name}. You can manage your todos <a href="/todos">here</a>.  */}
                Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>. 
            </div>
            </>
        )        
    }
}
export default WelcomeComponent