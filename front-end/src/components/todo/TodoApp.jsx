import React,{Component} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import './bootstrap.css';
import './bootstrap.min.css.map'
// import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        {/* in Router you can only have one child element */}
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>} /> 
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>} />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
                {/* <LoginComponent></LoginComponent> */}
            </div>
        )
    }
}










// the use of {this.state.hasLoginFailed && <div>Invaild Credentials</div> } 
//specify the process of all the logic things

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed){
//         return<div>Invaild Credentials</div>
//         // the return value could be html script
//     }
//     return null
// }
// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage){
//         return<div>Login Sucessful</div>
//     }
//     return null
// }
export default TodoApp