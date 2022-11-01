import React,{Component} from "react";

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent></LoginComponent>
            </div>
        )
    }
}
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
            console.log('Successful')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})

        }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
            console.log('Failed')

        // console.log(this.state)
        }
    }
    render(){
        return(
            <div>
                {/* here are two function called with state's true or false boolen passed in 
                the ShowInvalidCredential and howLoginSuccessMessage are function written 
                ouside the task */}
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccessMessage showSuccessMessage ={this.state.showSuccessMessage}/>
            User Name : <input type="text" name="username" value={this.state.username}onChange={this.handleChange}/>
            Password: <input type="text" name="password"value={this.state.password}onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
            )
    }

    

}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed){
        return<div>Invaild Credentials</div>
        // the return value could be html script
    }
    return null
}
function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage){
        return<div>Login Sucessful</div>
    }
    return null
}
export default TodoApp