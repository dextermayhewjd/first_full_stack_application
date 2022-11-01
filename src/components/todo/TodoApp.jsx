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
            password:''
        
        }
        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        console.log(event.target.name);
        this.setState(
            {
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
    render(){
        return(
            <div>
            User Name : <input type="text" name="username" value={this.state.username}onChange={this.handleChange}/>
            Password: <input type="text" name="password"value={this.state.password}onChange={this.handleChange}/>
            <button>Login</button>
            </div>
            )
    }w
}
export default TodoApp