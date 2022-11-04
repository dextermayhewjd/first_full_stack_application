import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component{
    // it is a controlled components because the state is insede the react component
    // for update the last
    constructor(props){
        super(props)
        this.state={
            username:'DexterDing',
            password:'',
            hasLoginFailed:false,
            showSuccessMessage:false
        
        }
        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        console.log(event.target.name);
        this.setState(
            {
                //key point for a general handler 
                [event.target.name]
                    :event.target.value
            }
        )
    }
    // handlerUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //         username:event.target.value
    //          }
    //     )
    // }
    // handlerPasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //         password:event.target.value
    //          }
    //     )
    // }
    loginClicked(){
        //dexterding,Jam198522
        // this in class function is a function to determine and change state 
        // based on the information that passed in 
        if(this.state.username==='dexterding'&&this.state.password==='Jam198522')
        {
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
            this.props.navigate(`/welcome/${this.state.username}`)
        }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log('Failed')
        }
        console.log(this.state)
        
    }
    render(){
        return(
            <div>
                {/* here are two function called with state's true or false boolen passed in 
                the ShowInvalidCredential and howLoginSuccessMessage are function written 
                ouside the task */}
                <h1>Login</h1>
                <div className="container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invaild Credentials</div> }
                {/* <ShowLoginSuccessMessage showSuccessMessage ={this.state.showSuccessMessage}/> */}
                {this.state.showSuccessMessage && <div>Login Sucessful</div> }
            User Name : <input type="text" name="username" value={this.state.username}onChange={this.handleChange}/>
            Password: <input type="text" name="password"value={this.state.password}onChange={this.handleChange}/>
            <button className="btn btn=sucess"onClick={this.loginClicked}>Login</button>
            </div>
        </div>
            )
    }

    

}

export default LoginComponent