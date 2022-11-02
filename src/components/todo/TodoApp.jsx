import React,{Component} from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import './bootstrap.css';
class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Routes>
                        {/* in Router you can only have one child element */}
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent/>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
                {/* <LoginComponent></LoginComponent> */}
            </div>
        )
    }
}



class HeaderComponent extends Component{
    render(){
        return(
            <div>
                Header<hr/>
            </div>
        )
    }
}
class FooterComponent extends Component{
    render(){
        return(
            <div>
                <hr/>Footer
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
                
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invaild Credentials</div> }
                {/* <ShowLoginSuccessMessage showSuccessMessage ={this.state.showSuccessMessage}/> */}
                {this.state.showSuccessMessage && <div>Login Sucessful</div> }
            User Name : <input type="text" name="username" value={this.state.username}onChange={this.handleChange}/>
            Password: <input type="text" name="password"value={this.state.password}onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
            )
    }

    

}
function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                {/* Welcome {this.props.params.name}. You can manage your todos <a href="/todos">here</a>.  */}
                Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>. 
            </div>
        )        
    }
}

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
                {id:1,description : 'Learn React',done:false,targetDate:new Date()},
                {id:2,description : 'Learn SpringBoot',done:false,targetDate:new Date()},
                {id:3,description : 'Learn Machine Learninig',done:false,targetDate:new Date()}
            ]
        }
    }
    
    
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th> id </th>
                            <th>description</th>
                            <th>whether done or not </th>
                            <th>target date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                            todo => 
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }               
                    </tbody>
                </table>
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