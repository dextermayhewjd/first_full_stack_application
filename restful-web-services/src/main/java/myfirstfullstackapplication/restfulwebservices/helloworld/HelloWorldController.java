package myfirstfullstackapplication.restfulwebservices.helloworld;
//controller handle with http request


import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class HelloWorldController {

    //GET
    //URI -/hello-world
    //method - helloWorld  which is called
    @RequestMapping(method = RequestMethod.GET,path = "/hello-world")
    //@GetMapping(path = "/hello-world")
    public  String helloWorld(){
       return "Hello World";
   }

   // hello-world-bean
    // automatic converted to json format
    @RequestMapping(method = RequestMethod.GET,path = "/hello-world-bean")
    public  HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }

    @RequestMapping(method = RequestMethod.GET,path = "/hello-world/path-variable/{name}")
    public  HelloWorldBean helloWorldPathVariable(@PathVariable String name){
//        throw new RuntimeException("something went wrong");
        return new HelloWorldBean(String.format("Hello World , %s",name));

    }
    // show the power of path variable
}
