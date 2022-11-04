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
}
