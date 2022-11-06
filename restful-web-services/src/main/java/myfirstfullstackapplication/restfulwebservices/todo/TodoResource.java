package myfirstfullstackapplication.restfulwebservices.todo;


import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getAllTodo(@PathVariable String username,@PathVariable long id){
        return todoService.findById(id);
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
    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody Todo todo){
        Todo todoUpdated = todoService.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);

    }
    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
            @PathVariable String username,
            @RequestBody Todo todo){
        Todo createdTodo = todoService.save(todo);

        //location
        //get current resource url

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }



}
