import axios from "axios"
import { BACK_END_API_URL,BACK_END_JPA_API_URL } from "../../Constants";

class TodoDataService{
    retrieveAllTodos(name){
    return axios.get(`${BACK_END_JPA_API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name,id){
        return axios.get(`${BACK_END_JPA_API_URL}/users/${name}/todos/${id}`);
        }
    deleteTodo(name,id){
        return axios.delete(`${BACK_END_JPA_API_URL}/users/${name}/todos/${id}`);
    }
    updateTodo(name,id,todo){
        return axios.put(`${BACK_END_JPA_API_URL}/users/${name}/todos/${id}`,todo);
    }
    createTodo(name,todo){
        return axios.post(`${BACK_END_JPA_API_URL}/users/${name}/todos/`,todo);
    }
}
// when it is a service need to add () in the end
export default new TodoDataService()