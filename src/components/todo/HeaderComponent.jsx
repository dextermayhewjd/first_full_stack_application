import React,{Component} from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AuthenticationService from "./AuthenticationService.js";
class HeaderComponent extends Component{
    render(){

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();



        return(
            <header> 
                <nav className="navbar nabar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/jiahua-ding-7933b1198/" className="navbar-brand">DexterDing </a> </div>   
                    <ul className="navbar-nav" >
                        {isUserLoggedIn&&<li><Link className="nav-link" to="/welcome/dexterding">Home</Link></li>}                        
                        {isUserLoggedIn&&<li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn&&<li><Link className="nav-link"to="/login">Login</Link></li>}
                        {isUserLoggedIn&&<li><Link className="nav-link"to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent