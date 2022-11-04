import axios from "axios"


class HelloWorldService{
    execuateHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
    }
    execuateHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
    }
    execuateHelloWorldPathVariableService(name){
        // need to use ` character instead of ' to replace the path-variable(name) here
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }
}
export default new HelloWorldService()