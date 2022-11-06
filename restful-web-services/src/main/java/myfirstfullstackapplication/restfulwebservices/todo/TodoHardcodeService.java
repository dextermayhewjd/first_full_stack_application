package myfirstfullstackapplication.restfulwebservices.todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodeService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;


    static {
        todos.add(new Todo(++idCounter,"dexterding","learn kaggle",new Date(),false));
        todos.add(new Todo(++idCounter,"dexterding","learn react",new Date(),false));
        todos.add(new Todo(++idCounter,"dexterding","learn springboot",new Date(),false));
    }
    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if (todo == null)return null;
        // if todos is able to remove todo
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
      for (Todo todo:todos){
          if (todo.getId() == id){
              return todo;
          }
      }
      return null;
    }

    public Todo save(Todo todo){
        if (todo.getId()==-1){
            todo.setId(++idCounter);
            todos.add(todo);
        }else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
}
