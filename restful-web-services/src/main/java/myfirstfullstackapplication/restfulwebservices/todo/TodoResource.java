package myfirstfullstackapplication.restfulwebservices.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class TodoResource {

    @Autowired // to let the spring boot auto know which function to run kind of make a instance
    private TodoHardcodeService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAll();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username,@PathVariable long id ){

        //if delete is successful it would return  todo back
        // in other situation we are retaining no content back
        Todo todo = todoService.deleteById(id);

        if (todo!= null){
            return ResponseEntity.noContent().build();
        }

        //otherwise we are returning a notFound status back
        return ResponseEntity.notFound().build();
    }
            // enable us to return a specific status back

}
