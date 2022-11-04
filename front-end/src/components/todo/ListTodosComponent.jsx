import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [   // remove the hardcode todos
                // {id:1,description : 'Learn React',done:false,targetDate:new Date()},
                // {id:2,description : 'Learn SpringBoot',done:false,targetDate:new Date()},
                // {id:3,description : 'Learn Machine Learninig',done:false,targetDate:new Date()}
            ]
        }
    }
    // write this line only to write log on the github 
    componentDidMount(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                //console.log(response)
                this.setState({todos :response.data})
            }
        )

    }
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">


                <table className="table">
                    <thead>
                        <tr>
                            {/* <th> id </th> */}
                            <th>description</th>
                            <th>whether done or not </th>
                            <th>target date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                            todo => 
                                <tr key={todo.id}>
                                    {/* <td>{todo.id}</td> */}
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }               
                    </tbody>
                </table>
                </div>
            </div>
        )        
    }
}
export default ListTodosComponent