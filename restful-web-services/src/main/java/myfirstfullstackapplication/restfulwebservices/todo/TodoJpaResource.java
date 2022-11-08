package myfirstfullstackapplication.restfulwebservices.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class TodoJpaResource {

    @Autowired // to let the spring boot auto know which function to run kind of make a instance
    private TodoHardcodeService todoService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping("jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){

        return todoJpaRepository.findByUsername(username);
//        return todoService.findAll();
    }

    @GetMapping("jpa/users/{username}/todos/{id}")
    public Todo getAllTodo(@PathVariable String username,@PathVariable long id){
        // it would return a optional value if not using get()
        return todoJpaRepository.findById(id).get();
    }

    @DeleteMapping("jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username,@PathVariable long id ){

        //if delete is successful it would return  todo back
        // in other situation we are retaining no content back
        todoJpaRepository.deleteById(id);
        //otherwise we are returning a notFound status back
        return ResponseEntity.notFound().build();
    }
            // enable us to return a specific status back
    @PutMapping("jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody Todo todo){

        todo.setUsername(username);

      Todo todoUpdated = todoJpaRepository.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);

    }
    @PostMapping("jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
            @PathVariable String username,
            @RequestBody Todo todo){

        todo.setUsername(username);

        Todo createdTodo = todoService.save(todo);

        //location
        //get current resource url

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }



}
