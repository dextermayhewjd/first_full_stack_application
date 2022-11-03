import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class AuthenticationRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return {...this.props.children}
            //...xxx is called spread operator
        }else{
            return <Navigate to="/login" /> 
        }
    }
}
export default AuthenticationRoute