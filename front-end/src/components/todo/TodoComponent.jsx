import React,{Component} from "react";


class TodosComponent extends Component{
    render(){
        return <div>Todo Component for id - {this.props.params.id }</div>
    }
}
export default TodosComponent