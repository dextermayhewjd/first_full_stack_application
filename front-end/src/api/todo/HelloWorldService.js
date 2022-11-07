import axios from "axios"


class HelloWorldService{

  

    execuateHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
    }
    execuateHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
    }
    execuateHelloWorldPathVariableService(name){
        // let username = 'user'
        // let password = 'password'

        // let basicAuthHeader = 'Basic '+window.btoa(username +":"+password)

        // need to use ` character instead of ' to replace the path-variable(name) here
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,{
        //     headers:{
        //         authorization:basicAuthHeader
        //     }
        // }
        );
    }
}
export default new HelloWorldService()