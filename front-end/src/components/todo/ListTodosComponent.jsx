import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [   
            
                // remove the hardcode todos
                // {id:1,description : 'Learn React',done:false,targetDate:new Date()},
                // {id:2,description : 'Learn SpringBoot',done:false,targetDate:new Date()},
                // {id:3,description : 'Learn Machine Learninig',done:false,targetDate:new Date()}
            ],
            message : null


        }
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)

    }
    // write this line only to write log on the github 
    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                //console.log(response)
                this.setState({todos :response.data})
            }
        )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(id + " " +username); 
        TodoDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState({message : ` Delete of todo ${id} Successful`})
                this.refreshTodos()
            }
        )
    }


    updateTodoClicked(id){
        console.log('update'+id)
        this.props.navigate(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log(id + " " +username); 
        // TodoDataService.deleteTodo(username,id)
        // .then(
        //     response => {
        //         this.setState({message : ` Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //     }
        // )
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th> id </th> */}
                            <th>description</th>
                            <th>whether done or not </th>
                            <th>target date </th>
                            <th>Update</th>
                            <th>Delete</th>

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
                                    <td><button className='btn bt-success' onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>                              
                                    <td><button className='btn bt-warning' onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
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