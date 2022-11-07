package myfirstfullstackapplication.restfulwebservices.basic.auth;
//controller handle with http request


import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class BasicAuthenticationController {


    @RequestMapping(method = RequestMethod.GET,path = "/basicauth")
    public AuthenticationBean helloWorldBean(){
        return new AuthenticationBean("You are authenticated");
    }


    // show the power of path variable
}
