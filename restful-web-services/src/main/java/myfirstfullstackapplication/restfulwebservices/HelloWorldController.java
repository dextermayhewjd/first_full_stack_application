package myfirstfullstackapplication.restfulwebservices;
//controller handle with http request


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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


}
